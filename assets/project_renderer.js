// Functions.

function render_project(project_name,
                        figure_path,
                        title_name,
                        author_list,
                        material_list,
                        award_name=null) {
    var list = document.getElementsByName(project_name);
    for (var proj_idx = 0; proj_idx < list.length; proj_idx++) {
        var img = document.createElement('img');
        img.src = figure_path;
        img.setAttribute('style',
                        'width: 100%; max-height: 120px; object-fit: cover;');

        var title = document.createElement('div');
        title.setAttribute('class', 'title');
        title.innerHTML = title_name;

        var author = document.createElement('div');
        author.setAttribute('class', 'author');
        author.innerHTML = '';
        for (var idx = 0; idx < author_list.length; idx++) {
            if (idx < author_list.length - 1 &&
                (author_list[idx + 1] === 'equal' ||
                author_list[idx + 1] === 'corresponding')) {
                author.innerHTML += (
                    '<span name="' +
                    author_list[idx] +
                    '" title="' +
                    author_list[idx + 1] +
                    '"></span>');
                idx++
            } else {
                author.innerHTML += (
                    '<span name="' +
                    author_list[idx] +
                    '" title="' +
                    '"></span>');
            }
            if (idx < author_list.length - 1) {
                author.innerHTML += ', ';
            }
        }

        var material = document.createElement('div');
        material.setAttribute('class', 'material');
        material_list.innerHTML = '';
        for (var idx = 0; idx < material_list.length; idx++) {
            material.innerHTML += (
                '<a href="' +
                material_list[idx][1] +
                '" target="_blank">' +
                material_list[idx][0] +
                '</a>');
            if (idx < material_list.length - 1) {
                material.innerHTML += ' / ';
            }
        }

        if (award_name) {
            var award = document.createElement('div');
            award.setAttribute('class', 'award');
            award.innerHTML = award_name;
        }

        var row = document.getElementsByName(project_name)[proj_idx];
        var cell = row.insertCell(0);
        cell.setAttribute('width', '25%');
        cell.appendChild(img);
        cell = row.insertCell(1);
        cell.appendChild(title);
        cell.appendChild(author);
        cell.appendChild(material);
        if (award_name) {
            cell.appendChild(award);
        }
    }
};

function render_author(author_name, link=null, alias=null) {
    var list = document.getElementsByName(author_name);
    for (var idx = 0; idx < list.length; idx++) {
        var contribution = list[idx].title;
        var tailing = '';
        if (contribution === 'equal') {
            tailing = '*';
        } else if (contribution === 'corresponding') {
            tailing = '<sup>+<sup>';
        }

        var context = '';
        if (alias) {
            context = alias + tailing;
        } else {
            context = author_name.replace(' ', '&nbsp;') + tailing;
        }

        if (link) {
            list[idx].innerHTML = (
                '<a href="' +
                link +
                '" target="_blank">' +
                '<span style="white-space:nowrap">' + context + '</span>' +
                '</a>');
        } else {
            list[idx].innerHTML = context;
        }

        if (author_name === 'Hongjia Zhai') {
            list[idx].setAttribute('class', 'me');
        }
    }
};



// Template.

render_project(
    project_name='template',
    figure_path='./assets/projects/',
    title_name='',
    author_list=[
        '',
    ],
    material_list=[
        ['Paper', ''],
        ['Project', ''],
        ['Code', ''],
        ['Demo', ''],
    ],
    award_name=null,
);


// Projects.

render_project(
    project_name='PanoGS',
    figure_path='./assets/projects/panogs.png',
    title_name='PanoGS: Gaussian-based Panoptic Segmentation for 3D Open Vocabulary Scene Understanding',
    author_list=[
        'Hongjia Zhai',
        'Hai Li',
        'Zhenzhe Li',
        'Xiaokun Pan',
        'Yijia He',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['CVPR 2025', ''],
    ],
    award_name=null,
);

render_project(
    project_name='SplatLoc',
    figure_path='./assets/projects/splatloc.png',
    title_name='SplatLoc: 3D Gaussian Splatting-based Visual Localization for Augmented Reality',
    author_list=[
        'Hongjia Zhai',
        'Xiyu Zhang',
        'Boming Zhao',
        'Hai Li',
        'Yijia He',
        'Zhaopeng Cui',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['TVCG 2025', 'https://arxiv.org/abs/2409.14067'],
        ['Project', 'https://zju3dv.github.io/splatloc/'],
        ['Code', 'https://github.com/zhaihongjia/SplatLoc'],
    ],
    award_name=null,
);

render_project(
    project_name='NeuraLoc',
    figure_path='./assets/projects/neuraloc.png',
    title_name='NeuraLoc: Visual Localization in Neural Implicit Map with Dual Complementary Features',
    author_list=[
        'Hongjia Zhai',
        'Boming Zhao',
        'Hai Li',
        'Xiaokun Pan',
        'Yijia He',
        'Zhaopeng Cui',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['ICRA 2025', ''],
    ],
    award_name=null,
);

render_project(
    project_name='MS-SLAM',
    figure_path='./assets/projects/ms_slam.png',
    title_name='Scalable Multi-Session Visual SLAM in Large-Scale Scenes with Dyanmic Subgraph Optimization',
    author_list=[
        'Xiaokun Pan',
        'Zhenzhe Li',
        'Tianxing Fan',
        'Hongjia Zhai',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['ICRA 2025', ''],
    ],
    award_name=null,
);

render_project(
    project_name='NIS-SLAM',
    figure_path='./assets/projects/nis_slam.png',
    title_name='NIS-SLAM: Neural Implicit Semantic RGB-D SLAM for 3D Consistent Scene Understanding',
    author_list=[
        'Hongjia Zhai',
        'Xiyu Zhang',
        'Boming Zhao',
        'Hai Li',
        'Yijia He',
        'Zhaopeng Cui',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['TVCG 2024', 'https://arxiv.org/pdf/2407.20853'],
        ['Project', 'https://zju3dv.github.io/nis_slam/'],
    ],
    award_name=null,
);

render_project(
    project_name='Vox-Fusion++',
    figure_path='./assets/projects/vox_fusion++.png',
    title_name='Vox-Fusion++: Voxel-based Neural Implicit Dense Tracking and Mapping with Multi-maps',
    author_list=[
        'Hongjia Zhai', 'equal',
        'Hai Li', 'equal',
        'Xingrui Yang', 'equal',
        'Gan Huang',
        'Yuhang Ming',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['arXiv', 'https://arxiv.org/abs/2403.12536'],
    ],
    award_name=null,
);

render_project(
    project_name='SeDH',
    figure_path='./assets/projects/sedh.png',
    title_name='Self-Distillation Hashing for Efficient Hamming Space Retrieval',
    author_list=[
        'Hongjia Zhai',
        'Hai Li',
        'Hanzhi Zhang',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['ICASSP 2023', 'https://ieeexplore.ieee.org/abstract/document/10095251/'],
    ],
    award_name=null,
);

render_project(
    project_name='ImTooth',
    figure_path='./assets/projects/imtooth.png',
    title_name='ImTooth: Neural Implicit Tooth for Dental Augmented Reality',
    author_list=[
        'Hai Li', 'equal',
        'Hongjia Zhai', 'equal',
        'Xingrui Yang',
        'Zhirong Wu',
        'Yihao Zheng',
        'Haofan Wang',
        'Jianchao Wu', 'corresponding',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['TVCG 2023', 'https://ieeexplore.ieee.org/abstract/document/10051634'],
    ],
    award_name=null,
);

render_project(
    project_name='Vox-Surf',
    figure_path='./assets/projects/vox_surf.png',
    title_name='Vox-Surf: Voxel-based Implicit Surface Representation',
    author_list=[
        'Hai Li', 'equal',
        'Xingrui Yang', 'equal',
        'Hongjia Zhai',
        'Yuqian Liu',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['TVCG 2023', 'https://ieeexplore.ieee.org/abstract/document/9969571'],
        ['Code', 'https://github.com/zju3dv/Vox-Surf'],
    ],
    award_name=null,
);

render_project(
    project_name='Vox-Fusion',
    figure_path='./assets/projects/vox_fusion.png',
    title_name='Vox-Fusion: Dense Tracking and Mapping with Voxel-based Neural Implicit Representation',
    author_list=[
        'Xingrui Yang', 'equal',
        'Hai Li', 'equal',
        'Hongjia Zhai',
        'Yuhang Ming',
        'Yuqian Liu',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['ISMAR 2022', 'https://ieeexplore.ieee.org/abstract/document/9969571'],
        ['Code', 'https://github.com/zju3dv/Vox-Fusion'],
        ['Project', 'https://zju3dv.github.io/Vox-Fusion/'],
    ],
    award_name=null,
);

render_project(
    project_name='ARCargo',
    figure_path='./assets/projects/arcargo.png',
    title_name='ARCargo: Multi-Device Integrated Cargo Loading Management System with Augmented Reality',
    author_list=[
        'Tianxiang Zhang',  'equal',
        'Chong Bao',  'equal',
        'Hongjia Zhai',  'equal',
        'Jiazhen Xia',
        'Weicai Ye',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['CyberSciTech 2021', 'https://ieeexplore.ieee.org/abstract/document/9730267'],
    ],
    award_name=null,
);

render_project(
    project_name='BDLoc',
    figure_path='./assets/projects/bdloc.png',
    title_name='BDLoc: Global Localization from 2.5D Building Map',
    author_list=[
        'Hai Li',
        'Tianxing Fan',
        'Hongjia Zhai',
        'Zhaopeng Cui',
        'Hujun Bao',
        'Guofeng Zhang', 'corresponding',
    ],
    material_list=[
        ['ISMAR 2021', 'https://ieeexplore.ieee.org/abstract/document/9583806/'],
    ],
    award_name=null,
);

render_project(
    project_name='DTH',
    figure_path='./assets/projects/dth.png',
    title_name='Deep Transfer Hashing for Image Retrieval',
    author_list=[
        'Hongjia Zhai',  'equal',
        'Shenqi Lai',  'equal',
        'Hanyang Jin', 'equal',
        'Xueming Qian', 'corresponding',
        'Tao Mei',
    ],
    material_list=[
        ['TCSVT 2021', 'https://ieeexplore.ieee.org/abstract/document/9082051'],
    ],
    award_name=null,
);

// Authors.
render_author('Hongjia Zhai');

// when i in XJTU
render_author('Shenqi Lai', 'https://scholar.google.com/citations?user=CgadbL8AAAAJ&hl=zh-CN');
render_author('Hanyang Jin');
render_author('Xueming Qian', 'https://scholar.google.com/citations?user=skQCiQQAAAAJ&hl=en');
render_author('Tao Mei', 'https://scholar.google.com.hk/citations?user=7Yq4wf4AAAAJ&hl=en');

// when i in ZJU & sensetime & rayneo
render_author('Hai Li', 'https://scholar.google.com/citations?user=vn89ztQAAAAJ&hl=zh-CN');
render_author('Tianxing Fan', 'https://scholar.google.com/citations?user=siv1RXUAAAAJ&hl=zh-CN');
render_author('Zhaopeng Cui', 'https://scholar.google.com/citations?user=vwIRwDUAAAAJ&hl=zh-CN');
render_author('Hujun Bao', 'http://www.cad.zju.edu.cn/home/bao/');
render_author('Guofeng Zhang', 'https://scholar.google.com/citations?user=F0xfpXAAAAAJ&hl=en');
render_author('Tianxiang Zhang');
render_author('Chong Bao', 'https://scholar.google.com/citations?user=HRHCYq0AAAAJ&hl=en');
render_author('Jiazhen Xia');
render_author('Weicai Ye', 'https://scholar.google.com/citations?user=qsMRsnsAAAAJ&hl=zh-CN');
render_author('Xingrui Yang', 'https://scholar.google.com/citations?user=FyrG7D0AAAAJ&hl=en');
render_author('Yuhang Ming', 'https://scholar.google.com/citations?user=Q91BzegAAAAJ&hl=en');
render_author('Yuqian Liu');
render_author('Zhirong Wu');
render_author('Yihao Zheng');
render_author('Haofan Wang');
render_author('Jianchao Wu');
render_author('Hanzhi Zhang');
render_author('Gan Huang');
render_author('Qirui Hu');
render_author('Guanglin Li', 'https://scholar.google.com/citations?user=oKiVEIUAAAAJ&hl=zh-CN');
render_author('Xiyu Zhang', 'https://scholar.google.com/citations?user=4daSiAwAAAAJ&hl=zh-CN');
render_author('Boming Zhao', 'https://scholar.google.com/citations?user=krMWXqMAAAAJ&hl=en');
render_author('Xiaokun Pan');
render_author('Zhenzhe Li');
render_author('Yijia He', 'https://scholar.google.com/citations?user=_0lKGnkAAAAJ&hl=en');


