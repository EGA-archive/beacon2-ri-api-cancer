import os.path
import urllib.request
from typing import List, Dict, Optional
import re
from urllib.error import HTTPError

import requests
import owlready2
from pymongo.mongo_client import MongoClient
import progressbar
from bson.objectid import ObjectId
from owlready2 import OwlReadyOntologyParsingError
from tqdm import tqdm
import obonet
from bson.json_util import dumps
import json
import networkx
import os
import scipy
import numpy as np
from utils import get_filtering_documents


ONTOLOGY_REGEX = re.compile(r"([_A-Za-z0-9]+):([_A-Za-z0-9^\-]+)")

client = MongoClient(
    #"mongodb://127.0.0.1:27017/"
    "mongodb://root:example@mongo:27017/beacon?authSource=admin"

)

class MyProgressBar:
    def __init__(self):
        self.pbar = None

    def __call__(self, block_num: int, block_size: int, total_size: int):
        if not self.pbar:
            self.pbar = progressbar.ProgressBar(maxval=total_size)
            self.pbar.start()

        downloaded = block_num * block_size
        if downloaded < total_size:
            self.pbar.update(downloaded)
        else:
            self.pbar.finish()


def get_filtering_terms(collection:str):
    query = {
    }
    results = client.beacon.get_collection(collection).find(query).limit(1)
    results = list(results)
    results = dumps(results)
    results = json.loads(results)
    field = ''
    final_dict={}
    for result in results:
        for k, v in result.items():
            field=k
            label=v
            final_dict[field]=label
    return final_dict

def get_filtering_object(dict_terms: dict, c_name: str):
    terms=[]
    alphanumeric_fields=['ProvinceCode', 'id', 'TopographyLocation', 'CauseOfDeath', 'CauseOfDeathCode', 'TTNM', 'NTNM', 'MTNM', 'TNMStage']
    type=''
    try:
        for k, v in dict_terms.items():
            field = k
            label = v
            if field not in alphanumeric_fields:
                type='numeric'
            else:
                type='alphanumeric'
            if field is not None:
                if label is not None:
                    terms.append({
                                        'type': type,
                                        'id': field,
                                        'scope': c_name                    
                                    })
                    terms.append({
                                        'type': 'custom',
                                        'id': '{}:{}'.format(field,label),
                                        'scope': c_name                   
                                    })

            print(terms)
    except Exception:
        pass

    return terms

def insert_all_ontology_terms_used():
    collections = client.beacon.list_collection_names()
    if 'filtering_terms' in collections:
        collections.remove('filtering_terms')
    print("Collections:", collections)
    for c_name in collections:
        if c_name == 'individuals':
            dict_terms = get_filtering_terms(c_name)
            terms = get_filtering_object(dict_terms, c_name)
            if len(terms) > 0:
                client.beacon.filtering_terms.insert_many(terms)


insert_all_ontology_terms_used()
