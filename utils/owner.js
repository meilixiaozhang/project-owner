var stages = [{
    "name": "项目安装",
    "id": "110000"
}, {
    "name": "项目调试",
    "id": "120000"
}, {
    "name": "项目磨合运行运行",
    "id": "130000"
}, {
    "name": "项目商务问题跟踪",
    "id": "140000"
}, {
    "name": "质检",
    "id": "150000"
}]

var catogories = {
    "110000": [
        {
            "stage": "项目安装",
            "name": "机械",
            "id": "110100"
        },
        {
            "stage": "项目安装",
            "name": "电气",
            "id": "110200"
        },
        {
            "stage": "项目安装",
            "name": "堆垛机",
            "id": "110300"
        },
        {
            "stage": "项目安装",
            "name": "外协施工",
            "id": "110400"
        }
    ],
    "120000": [
        {
            "stage": "项目调试",
            "name": "上位机",
            "id": "120100"
        },
        {
            "stage": "项目调试",
            "name": "PLC",
            "id": "120200"
        },
        {
            "stage": "项目调试",
            "name": "穿梭机",
            "id": "120300"
        },
        {
            "stage": "项目调试",
            "name": "堆垛机",
            "id": "120400"
        },
        {
            "stage": "项目调试",
            "name": "电气支持",
            "id": "120500"
        },
        {
            "stage": "项目调试",
            "name": "机械支持",
            "id": "120600"
        },
        {
            "stage": "项目调试",
            "name": "UAT",
            "id": "120700"
        }
    ],
    "130000": [
        {
            "stage": "项目磨合运行",
            "name": "多穿系统磨合",
            "id": "130100"
        },
        {
            "stage": "项目磨合运行",
            "name": "堆垛机磨合",
            "id": "130200"
        },
        {
            "stage": "项目磨合运行",
            "name": "折叠机及输送磨合",
            "id": "130300"
        }
    ],
    "140000": [
        {
            "stage": "项目商务问题跟踪",
            "name": "各部门问题解决",
            "id": "140100"
        }
    ],
    "150000": [
        {
            "stage": "质检",
            "name": "质检负责",
            "id": "150100"
        }
    ]
}

var owners = {
    "110100": [
        {
            "category": "机械",
            "name": "刘金涛",
            "id": "110101"
        }
    ],
    "110200": [
        {
            "category": "电气",
            "name": "张吉祥",
            "id": "110201"
        }
    ],
    "110300": [
        {
            "category": "堆垛机",
            "name": "宋计瑞",
            "id": "110301"
        }
    ],
    "110400": [
        {
            "category": "外协施工",
            "name": "唐涛",
            "id": "110401"
        }
    ],
    "120100": [
        {
            "category": "上位机",
            "name": "谢遵磊",
            "id": "120101"
        }
    ],
    "120200": [
     {   "category": "PLC",
        "name": "袁居瀛",
        "id": "120201"
     }
    ],
    "120300": [
        {
            "category": "穿梭机",
            "name": "刘建杨",
            "id": "120301"
        }
    ],
    "120400": [
        {
            "category": "堆垛机",
            "name": "刘式杨",
            "id": "120401"
        }
    ],
    "120500": [
        {
            "category": "电气支持",
            "name": "蒋海峰",
            "id": "120501"
        }
    ],
    "120600": [
        {
            "category": "机械支持",
            "name": "邵奇",
            "id": "120601"
        }
    ],
    "120700": [
        {
            "category": "UAT",
            "name": "李扬",
            "id": "120701"
        }
    ],
    "130100": [
        {
            "category": "多穿系统磨合",
            "name": "邵奇",
            "id": "130101"
        }
    ],
    "130200": [
        {
            "category": "堆垛机磨合",
            "name": "邵奇",
            "id": "130201"
        }
    ],
    "130300": [
        {
            "category": "折叠机及输送磨合",
            "name": "邵奇",
            "id": "130401"
        }
    ],
    "140100": [
        {
            "category": "各部门问题解决",
            "name": "解鸿玥",
            "id": "140101"
        }
    ],
    "150100": [
        {
            "category": "质检负责",
            "name": "王绍蒙",
            "id": "150101"
        }
    ],
}

module.exports = {
    catogories,
    stages,
    owners,
}