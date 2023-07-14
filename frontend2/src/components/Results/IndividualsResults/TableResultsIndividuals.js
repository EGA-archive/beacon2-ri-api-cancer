
import './TableResultsIndividuals.css'
import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

function TableResultsIndividuals(props) {

    const columns = [
        { field: 'id', headerName: 'Row', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'IndividualId', headerName: 'Individual ID', width: 200, headerClassName: 'super-app-theme--header' },
        { field: 'age', headerName: 'Age', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'behaviour', headerName: 'Behaviour', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'causeofdeath', headerName: 'Cause of death', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'causeofdeathcode', headerName: 'Cause od death code', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'dayofbirth', headerName: 'Day of birth', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'dayofdeath', headerName: 'Day of death', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'dayofdiagnosis', headerName: 'Day of diagnosis', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'diagnosisbasis', headerName: 'Diagnosis basis', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'endmonitoringday', headerName: 'End monitoring day', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'endmonitoringmonth', headerName: 'End monitoring month', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'endmonitoringyear', headerName: 'End monitoring year', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'grade', headerName: 'Grade', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'iarcflag', headerName: 'IARC flag', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'icdedition', headerName: 'ICD edition', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'mtnm', headerName: 'MTNM', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'monthofbirth', headerName: 'Month of birth', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'monthofdeath', headerName: 'Month of death', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'monthofdiagnosis', headerName: 'Month of diagnosis', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'morphology', headerName: 'Morphology', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'ntnm', headerName: 'NTNM', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'numberoftumours', headerName: 'Number of tumours', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'provincecode', headerName: 'Province code', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'registryyear', headerName: 'Registry year', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'sexatbirth', headerName: 'Sex at birth', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'tnmedition', headerName: 'TNM edition', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'tnmstage', headerName: 'TNM stage', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'ttnm', headerName: 'TTNM', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'topographylocation', headerName: 'Topography location', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'topographysublocation', headerName: 'Topography sublocation', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'tumoursequencenum', headerName: 'Tumour sequence number', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'vitalstatus', headerName: 'Vital status', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'yearofbirth', headerName: 'Year of birth', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'yearofdeath', headerName: 'Year of death', width: 100, headerClassName: 'super-app-theme--header' },
        { field: 'yearofdiagnosis', headerName: 'Year of diagnosis', width: 100, headerClassName: 'super-app-theme--header' }
        //   { field: 'pedigrees', headerName: 'pedigrees', width: 150 },
        // { field: 'treatments', headerName: 'treatments', width: 150 },
        //{ field: 'interventionsOrProcedures', headerName: 'interventionsOrProcedures', width: 150 },
        // { field: 'exposures', headerName: 'exposures', width: 150 },
        // { field: 'karyotypicSex', headerName: 'karyotypicSex', width: 150 },
    ]
    console.log(props.results)
    const rows = []
    const ids = []
    props.results.forEach((element, index) => {
        console.log(element[0])
            
        if (element[1] !== undefined) {
            console.log(element[0])
            let Age = ''
            let stringAge = ''

            if (element[1].Age !== '' && element[1].Age !== undefined) {
                if (element[1].Age !== undefined) {
                    Age = element[1].Age
                }
                stringAge = `${Age}`
            } else {
                stringAge = ''
            }

            let Behaviour = ''
            let stringBeh = ''

            if (element[1].Behaviour !== '' && element[1].Behaviour !== undefined) {
                if (element[1].Behaviour !== undefined) {
                    Behaviour = element[1].Behaviour
                }

                stringBeh = `${Behaviour}`
            } else {
                stringBeh = ''
            }
 
            let CauseOfDeath = ''
            let stringCOD = ''

            if (element[1].CauseOfDeath !== '' && element[1].CauseOfDeath !== undefined) {
                if (element[1].CauseOfDeath !== undefined) {
                    CauseOfDeath = element[1].CauseOfDeath
                }

                stringCOD = `${CauseOfDeath}`
            } else {
                stringCOD = ''
            }

            let CauseOfDeathCode = ''
            let stringCODe = ''

            if (element[1].CauseOfDeathCode !== '' && element[1].CauseOfDeathCode !== undefined) {
                if (element[1].CauseOfDeathCode !== undefined) {
                    CauseOfDeathCode = element[1].CauseOfDeathCode
                }

                stringCODe = `${CauseOfDeathCode}`
            } else {
                stringCODe = ''
            }

            let DayOfBirth = ''
            let stringDOB = ''

            if (element[1].DayOfBirth !== '' && element[1].DayOfBirth !== undefined) {
                if (element[1].DayOfBirth !== undefined) {
                    DayOfBirth = element[1].DayOfBirth
                }

                stringDOB = `${DayOfBirth}`
            } else {
                stringDOB = ''
            }

            let DayOfDeath = ''
            let stringDOD = ''

            if (element[1].DayOfDeath !== '' && element[1].DayOfDeath !== undefined) {
                if (element[1].DayOfDeath !== undefined) {
                    DayOfDeath = element[1].DayOfDeath
                }

                stringDOD = `${DayOfDeath}`
            } else {
                stringDOD = ''
            }

            let DayOfDiagnosis = ''
            let stringDODi = ''

            if (element[1].DayOfDiagnosis !== '' && element[1].DayOfDiagnosis !== undefined) {
                if (element[1].DayOfDiagnosis !== undefined) {
                    DayOfDiagnosis= element[1].DayOfDiagnosis
                }

                stringDODi = `${DayOfDiagnosis}`
            } else {
                stringDODi = ''
            }

            let DiagnosisBasis = ''
            let stringDiBasis = ''

            if (element[1].DiagnosisBasis !== '' && element[1].DiagnosisBasis !== undefined) {
                if (element[1].DiagnosisBasis !== undefined) {
                    DiagnosisBasis= element[1].DiagnosisBasis
                }

                stringDiBasis = `${DiagnosisBasis}`
            } else {
                stringDiBasis = ''
            }

            let EndMonitoringDay = ''
            let stringEMD = ''

            if (element[1].EndMonitoringDay !== '' && element[1].EndMonitoringDay !== undefined) {
                if (element[1].EndMonitoringDay !== undefined) {
                    EndMonitoringDay= element[1].EndMonitoringDay
                }

                stringEMD = `${EndMonitoringDay}`
            } else {
                stringEMD = ''
            }

            let EndMonitoringMonth= ''
            let stringEMM = ''

            if (element[1].EndMonitoringMonth !== '' && element[1].EndMonitoringMonth !== undefined) {
                if (element[1].EndMonitoringMonth !== undefined) {
                    EndMonitoringMonth= element[1].EndMonitoringMonth
                }

                stringEMM = `${EndMonitoringMonth}`
            } else {
                stringEMM = ''
            }

            let EndMonitoringYear= ''
            let stringEMY = ''

            if (element[1].EndMonitoringYear !== '' && element[1].EndMonitoringYear !== undefined) {
                if (element[1].EndMonitoringYear !== undefined) {
                    EndMonitoringYear= element[1].EndMonitoringYear
                }

                stringEMY = `${EndMonitoringYear}`
            } else {
                stringEMY = ''
            }

            let Grade= ''
            let stringGrade = ''

            if (element[1].Grade !== '' && element[1].Grade !== undefined) {
                if (element[1].Grade !== undefined) {
                    Grade= element[1].Grade
                }

                stringGrade = `${Grade}`
            } else {
                stringGrade = ''
            }

            let IARCflag= ''
            let stringIARC = ''

            if (element[1].IARCflag !== '' && element[1].IARCflag !== undefined) {
                if (element[1].IARCflag !== undefined) {
                    IARCflag= element[1].IARCflag
                }

                stringIARC = `${IARCflag}`
            } else {
                stringIARC = ''
            }

            let ICDEdition= ''
            let stringICDE = ''

            if (element[1].ICDEdition !== '' && element[1].ICDEdition !== undefined) {
                if (element[1].ICDEdition !== undefined) {
                    ICDEdition= element[1].ICDEdition
                }

                stringICDE = `${ICDEdition}`
            } else {
                stringICDE = ''
            }

            let MTNM= ''
            let stringMTNM = ''

            if (element[1].MTNM !== '' && element[1].MTNM !== undefined) {
                if (element[1].MTNM !== undefined) {
                    MTNM= element[1].MTNM
                }

                stringMTNM = `${MTNM}`
            } else {
                stringMTNM = ''
            }

            let NTNM= ''
            let stringNTNM = ''

            if (element[1].NTNM !== '' && element[1].NTNM !== undefined) {
                if (element[1].NTNM !== undefined) {
                    NTNM= element[1].NTNM
                }

                stringNTNM = `${NTNM}`
            } else {
                stringNTNM = ''
            }

            let TTNM= ''
            let stringTTNM = ''

            if (element[1].TTNM !== '' && element[1].TTNM !== undefined) {
                if (element[1].TTNM !== undefined) {
                    NTNM= element[1].TTNM
                }

                stringTTNM = `${TTNM}`
            } else {
                stringTTNM = ''
            }

            let MonthOfBirth= ''
            let stringMOB = ''

            if (element[1].MonthOfBirth !== '' && element[1].MonthOfBirth !== undefined) {
                if (element[1].MonthOfBirth !== undefined) {
                    MonthOfBirth= element[1].MonthOfBirth
                }

                stringMOB = `${MonthOfBirth}`
            } else {
                stringMOB = ''
            }

            let MonthOfDeath= ''
            let stringMOD = ''

            if (element[1].MonthOfDeath !== '' && element[1].MonthOfDeath !== undefined) {
                if (element[1].MonthOfDeath !== undefined) {
                    MonthOfDeath= element[1].MonthOfDeath
                }

                stringMOD = `${MonthOfDeath}`
            } else {
                stringMOD = ''
            }

            let MonthOfDiagnosis= ''
            let stringMODi = ''

            if (element[1].MonthOfDiagnosis !== '' && element[1].MonthOfDiagnosis !== undefined) {
                if (element[1].MonthOfDiagnosis !== undefined) {
                    MonthOfDiagnosis= element[1].MonthOfDiagnosis
                }

                stringMODi = `${MonthOfDiagnosis}`
            } else {
                stringMODi = ''
            }

            let Morphology= ''
            let stringMorph = ''

            if (element[1].Morphology !== '' && element[1].Morphology !== undefined) {
                if (element[1].Morphology !== undefined) {
                    Morphology= element[1].Morphology
                }

                stringMorph = `${Morphology}`
            } else {
                stringMorph = ''
            }

            let NumberOfTumours= ''
            let stringNOT = ''

            if (element[1].NumberOfTumours !== '' && element[1].NumberOfTumours !== undefined) {
                if (element[1].NumberOfTumours !== undefined) {
                    NumberOfTumours= element[1].NumberOfTumours
                }

                stringNOT = `${NumberOfTumours}`
            } else {
                stringNOT = ''
            }

            let ProvinceCode= ''
            let stringPCode = ''

            if (element[1].ProvinceCode !== '' && element[1].ProvinceCode !== undefined) {
                if (element[1].ProvinceCode !== undefined) {
                    ProvinceCode= element[1].ProvinceCode
                }

                stringPCode = `${ProvinceCode}`
            } else {
                stringPCode = ''
            }

            let RegistryYear= ''
            let stringRY = ''

            if (element[1].RegistryYear !== '' && element[1].RegistryYear !== undefined) {
                if (element[1].RegistryYear !== undefined) {
                    RegistryYear= element[1].RegistryYear
                }

                stringRY = `${RegistryYear}`
            } else {
                stringRY = ''
            }

            let SexAtBirth= ''
            let stringSAB = ''

            if (element[1].SexAtBirth !== '' && element[1].SexAtBirth !== undefined) {
                if (element[1].SexAtBirth !== undefined) {
                    SexAtBirth= element[1].SexAtBirth
                }

                stringSAB = `${SexAtBirth}`
            } else {
                stringSAB = ''
            }

            let TNMEdition= ''
            let stringTNME = ''

            if (element[1].TNMEdition !== '' && element[1].TNMEdition !== undefined) {
                if (element[1].TNMEdition !== undefined) {
                    TNMEdition= element[1].TNMEdition
                }

                stringTNME = `${TNMEdition}`
            } else {
                stringTNME = ''
            }

            let TNMStage= ''
            let stringTNMS = ''

            if (element[1].TNMStage !== '' && element[1].TNMStage !== undefined) {
                if (element[1].TNMStage !== undefined) {
                    TNMStage= element[1].TNMStage
                }

                stringTNMS = `${TNMStage}`
            } else {
                stringTNMS = ''
            }

            let TopographyLocation= ''
            let stringTL = ''

            if (element[1].TopographyLocation !== '' && element[1].TopographyLocation !== undefined) {
                if (element[1].TopographyLocation !== undefined) {
                    TopographyLocation= element[1].TopographyLocation
                }

                stringTL = `${TopographyLocation}`
            } else {
                stringTL = ''
            }

            let TopographySublocation= ''
            let stringTS = ''

            if (element[1].TopographySublocation !== '' && element[1].TopographySublocation !== undefined) {
                if (element[1].TopographySublocation !== undefined) {
                    TopographySublocation= element[1].TopographySublocation
                }

                stringTS = `${TopographySublocation}`
            } else {
                stringTS = ''
            }

            let TumourSequenceNum= ''
            let stringTSN = ''

            if (element[1].TumourSequenceNum !== '' && element[1].TumourSequenceNum !== undefined) {
                if (element[1].TumourSequenceNum !== undefined) {
                    TumourSequenceNum= element[1].TumourSequenceNum
                }

                stringTSN = `${TumourSequenceNum}`
            } else {
                stringTSN = ''
            }

            let VitalStatus= ''
            let stringVS = ''

            if (element[1].VitalStatus !== '' && element[1].VitalStatus !== undefined) {
                if (element[1].VitalStatus !== undefined) {
                    VitalStatus= element[1].VitalStatus
                }

                stringVS = `${VitalStatus}`
            } else {
                stringVS = ''
            }

            let YearOfBirth= ''
            let stringYOB = ''

            if (element[1].YearOfBirth !== '' && element[1].YearOfBirth !== undefined) {
                if (element[1].YearOfBirth !== undefined) {
                    YearOfBirth= element[1].YearOfBirth
                }

                stringYOB = `${YearOfBirth}`
            } else {
                stringYOB = ''
            }

            let YearOfDeath= ''
            let stringYOD = ''

            if (element[1].YearOfDeath !== '' && element[1].YearOfDeath !== undefined) {
                if (element[1].YearOfDeath !== undefined) {
                    YearOfDeath= element[1].YearOfDeath
                }

                stringYOD = `${YearOfDeath}`
            } else {
                stringYOD = ''
            }

            let YearOfDiagnosis= ''
            let stringYODi = ''

            if (element[1].YearOfDiagnosis !== '' && element[1].YearOfDiagnosis !== undefined) {
                if (element[1].YearOfDiagnosis !== undefined) {
                    YearOfDiagnosis= element[1].YearOfDiagnosis
                }

                stringYODi = `${YearOfDiagnosis}`
            } else {
                stringYODi = ''
            }

            rows.push({ id: index, IndividualId: element[1].id, Beacon: element[0], age: stringAge, behaviour: stringBeh, causeofdeath: stringCOD, causeofdeathcode: stringCODe, dayofbirth: stringDOB, dayofdeath: stringDOD, dayofdiagnosis: stringDODi, diagnosisbasis: stringDiBasis, endmonitoringday: stringEMD, endmonitoringmonth: stringEMM, endmonitoringyear: stringEMY, grade: stringGrade, iarcflag: stringIARC, icdedition: stringICDE, mtnm: stringMTNM, monthofbirth: stringMOB, monthofdeath: stringMOD, monthofdiagnosis: stringMODi, morphology: stringMorph, ntnm: stringNTNM, numberoftumours: stringNOT, provincecode: stringPCode, registryyear: stringRY, sexatbirth: stringSAB, tnmedition: stringTNME, tnmstage: stringTNMS, ttnm: stringTTNM, topographylocation: stringTL, topographysublocation: stringTS, tumoursequencenum: stringTSN, vitalstatus: stringVS, yearofbirth: stringYOB, yearofdeath: stringYOD, yearofdiagnosis: stringYODi })

        }

    })


    return (
        <DataGrid getRowHeight={() => 'auto'}

            columns={columns}
            rows={rows}
            

        />
    )

}


export default TableResultsIndividuals;