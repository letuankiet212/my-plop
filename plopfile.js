const promptDirectory = require('inquirer-directory');

let list_prompts_general = {
    'select_project': {
        type: "directory",
        name: 'select_project',
        message: 'Chọn Thư Mục(Hãy ghi lại vị trí folder để chạy các câu lệnh sau) :',
        basePath: './..'
    },
};

module.exports = function (plop) {
    plop.setPrompt('directory', promptDirectory);

	plop.setGenerator('test', {
        description: "Tạo môi trường auto",
        prompts: [
            list_prompts_general.select_project,
        ],
        actions:[
            {
                type: 'add',
                path: `{{select_project}}/khoi2.txt`,
            }
        ]
    });
    plop.setGenerator('Tạo môi trường auto', {
        description: "Tạo môi trường auto",
        prompts: [
            list_prompts_general.select_project,
        ],
        actions: [
            {
                type: "append",
                pattern: "",
                path: `{{${list_prompts_general.select_project.name}}}/assets/scss/optional/library/atom/helper-grid.scss`,
                template: "//PLOP_COMMENT",
            },
            {
                type: "append",
                pattern: "",
                path: `{{${list_prompts_general.select_project.name}}}/assets/scss/setting/variables.scss`,
                template: "//PLOP_COMMENT",
            },
             {
                type: "append",
                pattern: "",
                path: `{{${list_prompts_general.select_project.name}}}/assets/scss/base/fonts.scss`,
                template: "//PLOP_COMMENT",
            }
        ]
    });
    //Thêm fonts
    plop.setGenerator('add-fonts', {
        description: 'Thêm fonts chữ',
        prompts: [
           list_prompts_general.select_project,
            {
                type: 'input',
                name: 'font',
                message: 'Nhập fonts (ví dụ "AdriannaExtendedLt","AdriannaExtendedRg" ):'
            },
            {
                type: 'input',
                name: 'font_primary',
                message: 'Chọn font chủ đạo:'
            }, 
        ],
        actions: [
            {
                type: "append",
                path: `{{${list_prompts_general.select_project.name}}}/assets/scss/base/fonts.scss`,
                pattern: `//PLOP_COMMENT`,
                template: `$fonts: {{font}};`
            }
            ,{
                type: "append",
                path: `{{${list_prompts_general.select_project.name}}}/assets/scss/setting/variables.scss`,
                pattern: `//PLOP_COMMENT`,
                template: `$base-font-family: "{{font_primary}}";`,
            }
        ]
    })
    //Text Color
    plop.setGenerator('text-color', {
        description: 'text color',
        prompts: [
           list_prompts_general.select_project,
            {
                type: 'input',
                name: 'color',
                message: 'Nhập màu chữ ? :'
            }, 
        ],
        actions: [
            {
                type: "append",
                path: `{{${list_prompts_general.select_project.name}}}/assets/scss/setting/variables.scss`,
                pattern: `//PLOP_COMMENT`,
                template: `$color-base-text: #{{color}};`,
            }
        ]
    })
    //Bg color
     plop.setGenerator('bg-color', {
        description: 'background color',
        prompts: [
           list_prompts_general.select_project,
            {
                type: 'input',
                name: 'color',
                message: 'Nhập background color ? :'
            }, 
        ],
        actions: [{
            type: "append",
            path: `{{${list_prompts_general.select_project.name}}}/assets/scss/setting/variables.scss`,
            pattern: `//PLOP_COMMENT`,
            template: `$color-base-background: #{{color}};`,
        }]
    })
    //Câu Lệnh Container
    plop.setGenerator('container', {
        description: 'Thêm witdh container',
        prompts: [
           list_prompts_general.select_project,
            {
                type: 'input',
                name: 'width',
                message: 'Nhập Width của container ? :'
            }, 
        ],
        actions: [{
            type: "append",
            path: `{{${list_prompts_general.select_project.name}}}/assets/scss/setting/variables.scss`,
            pattern: `//PLOP_COMMENT`,
            template: `$width-container:{{width}}rem;`,
        }]
    })
    //Câu Lệnh Grid
    plop.setGenerator('grid-cols-custom', {
        description: 'grid-colums',
        prompts: [
            list_prompts_general.select_project,
            {
                type: 'input',
                name: 'grid_name',
                message: 'Nhập tên class grid custom'
            },
            {
                type: 'input',
                name: 'grid_value',
                message: 'Nhập giá trị của class đó/ repeat(16, minmax(0, 1fr)) / 200px minmax(900px, 1fr) 100px'
            },
        ],
        actions: [{
            type: "append",
            path: `{{${list_prompts_general.select_project.name}}}/assets/scss/optional/library/atom/helper-grid.scss`,
            pattern: `//PLOP_COMMENT`,
            templateFile: 'plop-templates/grid/grid-cols-custom.hbs'
        }]
    })
    plop.setGenerator('grid-rows-custom', {
        description: 'grid-rows',
        prompts: [
            list_prompts_general.select_project,
            {
                type: 'input',
                name: 'grid_name',
                message: 'Nhập tên class grid custom'
            },
            {
                type: 'input',
                name: 'grid_value',
                message: 'Nhập giá trị của class đó/ repeat(16, minmax(0, 1fr)) / 200px minmax(900px, 1fr) 100px'
            },
        ],
        actions: [{
            type: "append",
            path: `{{${list_prompts_general.select_project.name}}}/assets/scss/optional/library/atom/helper-grid.scss`,
            pattern: `//PLOP_COMMENT`,
            templateFile: 'plop-templates/grid/grid-rows-custom.hbs'
        }]
    })
  };