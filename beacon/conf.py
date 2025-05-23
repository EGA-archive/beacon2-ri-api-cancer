from datetime import date
import datetime
import glob
import os


"""Beacon Configuration."""

#
# Beacon general info
#
beacon_id = 'org.ega-archive.ga4gh-approval-beacon-cancer-test'  # ID of the Beacon
beacon_name = 'GA4GH Approval Beacon Cancer Test'  # Name of the Beacon service
api_version = 'v2.0.0'  # Version of the Beacon implementation
uri = 'http://oriol-1-test.ega-archive.org'

#
# Beacon granularity
#
default_beacon_granularity = "record"
max_beacon_granularity = "record"

#
#  Organization info
#
org_id = 'EGA'  # Id of the organization
org_name = 'European Genome-Phenome Archive (EGA)'  # Full name
org_description = ('The European Genome-phenome Archive (EGA) '
                   'is a service for permanent archiving and sharing '
                   'of all types of personally identifiable genetic '
                   'and phenotypic data resulting from biomedical research projects.')
org_adress = ('C/ Dr. Aiguader, 88'
              'PRBB Building'
              '08003 Barcelona, Spain')
org_welcome_url = 'https://ega-archive.org/'
org_contact_url = 'mailto:beacon.ega@crg.eu'
org_logo_url = 'https://ega-archive.org/images/logo.png'
org_info = ''

#
# Project info
#
description = r"This Beacon is based on synthetic data hosted at the <a href='https://ega-archive.org/datasets/EGAD00001003338'>EGA</a>. The dataset contains 2504 samples including genetic data based on 1K Genomes data, and 76 individual attributes and phenotypic data derived from UKBiobank."
version = 'v2.0'
welcome_url = 'https://beacon.ega-archive.org/'
alternative_url = 'https://beacon.ega-archive.org/api'
create_datetime = '2021-11-29T12:00:00.000000'
update_datetime = ''
# update_datetime will be created when initializing the beacon, using the ISO 8601 format

#
# Service
#
service_type = 'org.ga4gh:beacon:1.0.0'  # service type
service_url = 'https://beacon.ega-archive.org/api/services'
entry_point = False
is_open = True
documentation_url = 'https://github.com/EGA-archive/beacon-2.x/'  # Documentation of the service
environment = 'test'  # Environment (production, development or testing/staging deployments)

# GA4GH
ga4gh_service_type_group = 'org.ga4gh'
ga4gh_service_type_artifact = 'beacon'
ga4gh_service_type_version = '1.0'

#
# Database connection
#
database_host = '127.0.0.1'
database_port = 27018
database_user = 'root'
database_password = 'example'
database_name = 'beacon'
database_auth_source = 'admin'
# database_schema = 'public' # comma-separated list of schemas
# database_app_name = 'beacon-appname' # Useful to track connections

#
# Web server configuration
# Note: a Unix Socket path is used when behind a server, not host:port
#
beacon_host = '0.0.0.0'
beacon_port = 5050
beacon_tls_enabled = False
beacon_tls_client = False
beacon_cert = '/etc/ega/server.cert'
beacon_key = '/etc/ega/server.key'
CA_cert = '/etc/ega/CA.cert'

#
# Permissions server configuration
#
permissions_url = 'http://beacon-permissions'
#permissions_url = 'http://localhost:5051/'

#
# IdP endpoints (OpenID Connect/Oauth2)
#
# or use Elixir AAI (see https://elixir-europe.org/services/compute/aai)
#
idp_client_id = 'beacon'
idp_client_secret = 'b26ca0f9-1137-4bee-b453-ee51eefbe7ba'  # same as in the test IdP
idp_scope = 'profile openid'

idp_authorize = 'http://idp/auth/realms/Beacon/protocol/openid-connect/auth'
idp_access_token = 'http://idp/auth/realms/Beacon/protocol/openid-connect/token'
idp_introspection = 'http://idp/auth/realms/Beacon/protocol/openid-connect/token/introspect'
idp_user_info = 'http://idp/auth/realms/Beacon/protocol/openid-connect/userinfo'
idp_logout = 'http://idp/auth/realms/Beacon/protocol/openid-connect/logout'

idp_redirect_uri = 'http://beacon:5050/login'

#
# UI
#
autocomplete_limit = 16
autocomplete_ellipsis = '...'

#
# Ontologies
#
ontologies_folder = "deploy/ontologies/"
