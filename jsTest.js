const dataConverter = (res) =>{
    for(let chart in res.DATA  ){
        for(let chartData of res.DATA[chart]){
            let dt =chartData.dataTable;
            if(!dt[0]) continue;
            for(let i=1; i< dt.length;i++){
                for(let k =1; k< dt[0].length; k++){
                    dt[i][k] = parseInt(dt[i][k]);
                }
            }
        }
    }
    return res
}
let data ={
    "STATUS": "success",
    "STATUSCODE": "0000",
    "DESCRIPTION": "API Response Success",
    "DATA": {
        "PIECHART": [
            {
                "chartType": "PieChart",
                "chartTitle": "Total Model Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "Count"
                    ],
                    [
                        "ArchSD",
                        "61"
                    ],
                    [
                        "CEDD",
                        "10"
                    ],
                    [
                        "DSD",
                        "43"
                    ],
                    [
                        "EMSD",
                        "1"
                    ],
                    [
                        "HYD",
                        "92"
                    ],
                    [
                        "WSD",
                        "25"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total Revit Model Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "Count"
                    ],
                    [
                        "ArchSD",
                        "61"
                    ],
                    [
                        "CEDD",
                        "2"
                    ],
                    [
                        "DSD",
                        "32"
                    ],
                    [
                        "EMSD",
                        "0"
                    ],
                    [
                        "HYD",
                        "52"
                    ],
                    [
                        "WSD",
                        "6"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total Civil 3D Model Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "Count"
                    ],
                    [
                        "ArchSD",
                        "0"
                    ],
                    [
                        "CEDD",
                        "8"
                    ],
                    [
                        "DSD",
                        "11"
                    ],
                    [
                        "EMSD",
                        "1"
                    ],
                    [
                        "HYD",
                        "40"
                    ],
                    [
                        "WSD",
                        "19"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total IFC Model Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "Count"
                    ],
                    [
                        "ArchSD",
                        "34"
                    ],
                    [
                        "CEDD",
                        "9"
                    ],
                    [
                        "DSD",
                        "42"
                    ],
                    [
                        "EMSD",
                        "1"
                    ],
                    [
                        "HYD",
                        "73"
                    ],
                    [
                        "WSD",
                        "21"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total CityGML Model Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "Count"
                    ],
                    [
                        "ArchSD",
                        "0"
                    ],
                    [
                        "CEDD",
                        "6"
                    ],
                    [
                        "DSD",
                        "9"
                    ],
                    [
                        "EMSD",
                        "0"
                    ],
                    [
                        "HYD",
                        "31"
                    ],
                    [
                        "WSD",
                        "7"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total File Size Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "MB"
                    ],
                    [
                        "ArchSD",
                        "558"
                    ],
                    [
                        "CEDD",
                        "162"
                    ],
                    [
                        "DSD",
                        "465"
                    ],
                    [
                        "EMSD",
                        "7"
                    ],
                    [
                        "HYD",
                        "2549"
                    ],
                    [
                        "WSD",
                        "794"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total Revit File Size Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "MB"
                    ],
                    [
                        "ArchSD",
                        "558"
                    ],
                    [
                        "CEDD",
                        "24"
                    ],
                    [
                        "DSD",
                        "205"
                    ],
                    [
                        "EMSD",
                        "0"
                    ],
                    [
                        "HYD",
                        "1048"
                    ],
                    [
                        "WSD",
                        "78"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total Civil 3D File Size Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "MB"
                    ],
                    [
                        "ArchSD",
                        "0"
                    ],
                    [
                        "CEDD",
                        "137"
                    ],
                    [
                        "DSD",
                        "259"
                    ],
                    [
                        "EMSD",
                        "7"
                    ],
                    [
                        "HYD",
                        "1500"
                    ],
                    [
                        "WSD",
                        "715"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total IFC File Size Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "MB"
                    ],
                    [
                        "ArchSD",
                        "928"
                    ],
                    [
                        "CEDD",
                        "42"
                    ],
                    [
                        "DSD",
                        "301"
                    ],
                    [
                        "EMSD",
                        "24"
                    ],
                    [
                        "HYD",
                        "2168"
                    ],
                    [
                        "WSD",
                        "630"
                    ]
                ]
            },
            {
                "chartType": "PieChart",
                "chartTitle": "Total CityGML File Size Uploaded",
                "dataTable": [
                    [
                        "Bureau",
                        "MB"
                    ],
                    [
                        "ArchSD",
                        "0"
                    ],
                    [
                        "CEDD",
                        "56"
                    ],
                    [
                        "DSD",
                        "177"
                    ],
                    [
                        "EMSD",
                        "0"
                    ],
                    [
                        "HYD",
                        "3931"
                    ],
                    [
                        "WSD",
                        "228"
                    ]
                ]
            }
        ],
        "BARCHART": [
            {
                "chartType": "ColumnChart",
                "chartTitle": "Total File Uploaded",
                "dataTable": [
                    [
                        "YEAR",
                        "ArchSD",
                        "CEDD",
                        "DSD",
                        "EMSD",
                        "HYD",
                        "WSD"
                    ],
                    [
                        "2021-3",
                        "60",
                        "4",
                        "26",
                        "2",
                        "34",
                        "28"
                    ],
                    [
                        "2021-4",
                        "0",
                        "0",
                        "6",
                        "0",
                        "36",
                        "6"
                    ],
                    [
                        "2021-5",
                        "8",
                        "2",
                        "40",
                        "0",
                        "50",
                        "0"
                    ],
                    [
                        "2021-6",
                        "27",
                        "1",
                        "1",
                        "0",
                        "19",
                        "4"
                    ],
                    [
                        "2021-7",
                        "0",
                        "15",
                        "18",
                        "0",
                        "45",
                        "12"
                    ],
                    [
                        "2021-8",
                        "0",
                        "3",
                        "3",
                        "0",
                        "12",
                        "3"
                    ]
                ]
            }
        ],
        "TABLE": [
            {
                "chartType": "Table",
                "chartTitle": "Number of Model Uploaded",
                "dataTable": [
                    [
                        "",
                        "ArchSD",
                        "CEDD",
                        "DSD",
                        "EMSD",
                        "HYD",
                        "WSD"
                    ],
                    [
                        "Civil 3D",
                        "0",
                        "8",
                        "11",
                        "1",
                        "40",
                        "19"
                    ],
                    [
                        "Revit",
                        "61",
                        "2",
                        "32",
                        "0",
                        "52",
                        "6"
                    ],
                    [
                        "IFC",
                        "34",
                        "9",
                        "42",
                        "1",
                        "73",
                        "21"
                    ],
                    [
                        "CityGML",
                        "0",
                        "6",
                        "9",
                        "0",
                        "31",
                        "7"
                    ]
                ]
            },
            {
                "chartType": "Table",
                "chartTitle": "Number of Model Uploaded",
                "dataTable": [
                    [
                        "",
                        "ND/2019/01",
                        "ND/2019/02",
                        "ND/2019/03",
                        "ND/2019/04",
                        "ND/2019/05",
                        "ND/2019/06",
                        "ND/2019/07"
                    ],
                    [
                        "Civil 3D",
                        "20",
                        "10",
                        "5",
                        "18",
                        "11",
                        "6",
                        "9"
                    ],
                    [
                        "Revit",
                        "15",
                        "27",
                        "20",
                        "50",
                        "16",
                        "21",
                        "4"
                    ],
                    [
                        "IFC",
                        "31",
                        "36",
                        "6",
                        "54",
                        "20",
                        "21",
                        "12"
                    ],
                    [
                        "CityGML",
                        "0",
                        "11",
                        "6",
                        "16",
                        "10",
                        "0",
                        "10"
                    ]
                ]
            },
            {
                "chartType": "Table",
                "chartTitle": "Total file size (in MB) Uploaded",
                "dataTable": [
                    [
                        "",
                        "ArchSD",
                        "CEDD",
                        "DSD",
                        "EMSD",
                        "HYD",
                        "WSD"
                    ],
                    [
                        "Civil 3D",
                        "0",
                        "137",
                        "259",
                        "7",
                        "1500",
                        "715"
                    ],
                    [
                        "Revit",
                        "558",
                        "24",
                        "205",
                        "0",
                        "1048",
                        "78"
                    ],
                    [
                        "IFC",
                        "928",
                        "42",
                        "301",
                        "24",
                        "2168",
                        "630"
                    ],
                    [
                        "CityGML",
                        "0",
                        "56",
                        "177",
                        "0",
                        "3931",
                        "228"
                    ]
                ]
            }
        ]
    },
    "LASTUPDATETIMESTAMP": 1646999091168
}
console.log(dataConverter(data))