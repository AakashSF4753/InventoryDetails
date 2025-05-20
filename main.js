ej.treegrid.TreeGrid.Inject(ej.treegrid.DetailRow, ej.treegrid.Page, ej.treegrid.Filter, ej.treegrid.Toolbar, ej.treegrid.Edit, ej.treegrid.Sort, ej.treegrid.CommandColumn);
let inventoryTreeData = [
    {
        ItemID: 'Section1',
        ItemName: 'Apple Phones',
        Image: 'Apple_Phones',
        Category: 'Mobile Phones',
        Children: [
            {
                ItemID: 'Product1',
                ItemName: 'iPhone 14',
                Image: 'iPhone_14',
                Category: 'Apple',
                CurrentStock: 35,
                UnitPrice: 79999,
                Unit: 'pcs',
                ReorderLevel: 10,
                Status: 'Available',
                LastRestocked: new Date('2024-04-10'),
                NextRestockDue: new Date('2024-05-10'),
                Description: 'iPhone 14 with A15 Bionic chip and 5G support.',
            },
            {
                ItemID: 'Product2',
                ItemName: 'iPhone 15',
                Image: 'iPhone_15',
                Category: 'Apple',
                CurrentStock: 18,
                UnitPrice: 64999,
                Unit: 'pcs',
                ReorderLevel: 10,
                Status: 'Available',
                LastRestocked: new Date('2024-04-01'),
                NextRestockDue: new Date('2024-05-01'),
                Description: 'Compact iPhone 15 with powerful performance.',
            }
        ]
    },
    {
        ItemID: 'Section2',
        ItemName: 'Samsung Phones',
        Image: 'Samsung_Phones',
        Category: 'Mobile Phones',
        Children: [
            {
                ItemID: 'Product3',
                ItemName: 'Samsung Galaxy S22',
                Image: 'Samsung_Galaxy_S22',
                Category: 'Samsung',
                CurrentStock: 15,
                UnitPrice: 69999,
                Unit: 'pcs',
                ReorderLevel: 8,
                Status: 'Low Stock',
                LastRestocked: new Date('2024-03-28'),
                NextRestockDue: new Date('2024-04-28'),
                Description: 'Samsung flagship phone with AMOLED display.',
            },
            {
                ItemID: 'Product4',
                ItemName: 'Samsung Galaxy A54',
                Image: 'Samsung_Galaxy_A54',
                Category: 'Samsung',
                CurrentStock: 0,
                UnitPrice: 28999,
                Unit: 'pcs',
                ReorderLevel: 10,
                Status: 'Out of Stock',
                LastRestocked: new Date('2024-03-20'),
                NextRestockDue: new Date('2024-04-20'),
                Description: 'Mid-range Galaxy phone with great battery life.',
            }
        ]
    },
    {
        ItemID: 'Section3',
        ItemName: 'MI Phones',
        Image: 'MI_Phones',
        Category: 'Mobile Phones',
        Children: [
            {
                ItemID: 'Product5',
                ItemName: 'Redmi Note 12 Pro',
                Image: 'Redmi_Note_12_Pro',
                Category: 'MI',
                CurrentStock: 60,
                UnitPrice: 23999,
                Unit: 'pcs',
                ReorderLevel: 15,
                Status: 'Available',
                LastRestocked: new Date('2024-04-05'),
                NextRestockDue: new Date('2024-05-05'),
                Description: 'High-value Redmi phone with 108MP camera.',
            },
            {
                ItemID: 'Product6',
                ItemName: 'MI 11X',
                Image: 'MI_11X',
                Category: 'MI',
                CurrentStock: 22,
                UnitPrice: 27999,
                Unit: 'pcs',
                ReorderLevel: 10,
                Status: 'Available',
                LastRestocked: new Date('2024-03-30'),
                NextRestockDue: new Date('2024-04-30'),
                Description: 'Powerful MI 11X with Snapdragon 870 processor.',
            }
        ]
    },
    {
        ItemID: 'Section4',
        ItemName: 'Nothing Phones',
        Image: 'Nothing_Phones',
        Category: 'Mobile Phones',
        Children: [
            {
                ItemID: 'Product7',
                ItemName: 'Nothing Phone 1',
                Image: 'Nothing_Phone_1',
                Category: 'Nothing',
                CurrentStock: 10,
                UnitPrice: 31999,
                Unit: 'pcs',
                ReorderLevel: 5,
                Status: 'Low Stock',
                LastRestocked: new Date('2024-04-03'),
                NextRestockDue: new Date('2024-05-03'),
                Description: 'Unique design with Glyph interface.',
            },
            {
                ItemID: 'Product8',
                ItemName: 'Nothing Phone 2a',
                Image: 'Nothing_Phone_2a',
                Category: 'Nothing',
                CurrentStock: 1,
                UnitPrice: 39999,
                Unit: 'pcs',
                ReorderLevel: 8,
                Status: 'Low Stock',
                LastRestocked: new Date('2024-03-15'),
                NextRestockDue: new Date('2024-04-15'),
                Description: 'Next-gen budget phone with improved performance and design.',
            }
        ]
    }
];

let tree = new ej.treegrid.TreeGrid(
    {
        dataSource: inventoryTreeData,
        childMapping: 'Children',
        treeColumnIndex: 0,
        detailTemplate: function (data) {
            var isSegmentOrSection = data.CurrentStock === null || data.CurrentStock === undefined;
            if (isSegmentOrSection) {
                return `
                    <div class="newclass"></div>
                    <style>.e-detailcell:has(.newclass) 
                        {display: none;}
                    </style>
                `;
            }
            return `
                <div class="detail-container">
                    <!-- Left: Image + Info -->
                    <div class="left-block">
                        <img src="./images/${data.Image}.jpg" alt="${data.ItemName}" />
                        <div>
                        <div class="left-info-title">${data.ItemName}</div>
                        <div class="left-info-description">${data.Description || 'No description available.'}</div>
                        </div>
                    </div>

                    <!-- Right: Info blocks -->
                    <div class="info-grid">

                        <div class="info-card">
                            <div class="label">Currently Available</div>
                            <div class="value-dark">${data.CurrentStock} ${data.Unit}</div>
                        </div>

                        <div class="info-card">
                            <div class="label">Unit Price</div>
                            <div class="value-green">₹${data.UnitPrice}</div>
                        </div>

                        <div class="info-card">
                            <div class="label">Status</div>
                            <div class="value-status" style="color: ${data.Status === 'Available'
                                    ? '#10b981'
                                    : data.Status === 'Low Stock'
                                        ? '#f59e0b'
                                        : '#ef4444'
                                };">${data.Status}</div>
                        </div>

                        <div class="info-card">
                            <div class="label">Reorder Level</div>
                            <div class="value-dark">${data.ReorderLevel}</div>
                        </div>

                        <div class="info-card">
                            <div class="label">Last Restocked</div>
                            <div class="value-muted">${new Date(data.LastRestocked).toLocaleDateString()}</div>
                        </div>

                        <div class="info-card">
                            <div class="label">Next Restock Due</div>
                            <div class="value-muted">${new Date(data.NextRestockDue).toLocaleDateString()}</div>
                        </div>

                    </div>
                </div>
            `;
        },
        gridLines: 'Both',
        height: 500,
        allowSorting: true,
        allowPaging: true,
        pageSettings: { pageSize: 6, pageCount: 2, pageSizes: true },
        allowFiltering: true,
        filterSettings: { type: 'Menu' },
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' },
        toolbar: ['Search', 'Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        columns: [
            { field: 'ItemID', headerText: 'Item ID', width: 100, isPrimaryKey: true },
            { field: 'ItemName', headerText: 'Item Name', width: 100 },
            { field: 'CurrentStock', headerText: 'Stock', width: 100, textAlign: 'Right' },
            {
                headerText: 'Manage Records', width: 130,
                commands: [
                    { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
                    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
                    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
                    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
                ]
            },
        ]
    });
tree.appendTo('#TreeGrid');

tree.actionBegin = (args) => {
    if (args.requestType === 'beginEdit' || args.requestType === 'cellEdit') {
        const isSegmentOrSection = args.rowData.CurrentStock === null || args.rowData.CurrentStock === undefined;
        if (isSegmentOrSection) {
            args.cancel = true;
        }
    }
    if (args.requestType === 'save' && args.data) {
        const currentStock = args.data.CurrentStock;
        if (currentStock > 15) {
            args.data.Status = 'Available';
        } else if (currentStock > 0 && currentStock <= 15) {
            args.data.Status = 'Low Stock';
        } else {
            args.data.Status = 'Out of Stock';
        }
    }
};

tree.actionComplete = function (args) {
    if (args.requestType === 'save' || args.requestType === 'cancel') {
        tree.refresh();
    }
};
