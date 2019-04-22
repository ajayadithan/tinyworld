var oModel = new sap.ui.model.odata.ODataModel("/euro.xsodata", true);
var oTable = new sap.ui.table.Table({
	title: "European Countries"
});
oTable.addColumn(new sap.ui.table.Column({
	label: "Country Name",
	template: "name"
}));
oTable.setModel(oModel);
oTable.bindRows("/euro");
oTable.placeAt("content");