const queries = {
  getBasicInfo:
    '  select  ACSEmpresaFormData.IdACSEmpresaFormData as [KeyId],' +
    '                t0.DataValue as [ChkActive],' +
    '                t1.DataValue as [Code],' +
    '                t2.DataValue as [NamePays],' +
    '                t3.DataValue as [TPhoto],' +
    '                t4.DataValue as [Resumen] ' +
    'from            ACSEmpresaFormData ' +
    'left outer join ACSEmpresaFormDataVal1 t0   on t0.IdACSEmpresaFormData=ACSEmpresaFormData.IdACSEmpresaFormData ' +
    "                                           and t0.FieldName='ChkActive'" +
    'left outer join ACSEmpresaFormDataVal1 t1   on t1.IdACSEmpresaFormData=ACSEmpresaFormData.IdACSEmpresaFormData ' +
    "                                           and t1.FieldName='Code' " +
    'left outer join ACSEmpresaFormDataVal1 t2   on t2.IdACSEmpresaFormData=ACSEmpresaFormData.IdACSEmpresaFormData ' +
    "                                           and t2.FieldName='NamePays'" +
    'left outer join ACSEmpresaFormDataVal1 t3   on t3.IdACSEmpresaFormData=ACSEmpresaFormData.IdACSEmpresaFormData ' +
    "                                           and t3.FieldName='Photo' " +
    'left outer join ACSEmpresaFormDataVal1 t4   on t4.IdACSEmpresaFormData=ACSEmpresaFormData.IdACSEmpresaFormData ' +
    "                                           and t4.FieldName='Resumen' " +
    " where ACSEmpresaFormData.IdACSEmpresaForm = 12935 and convert(varchar(1),t0.DataValue) ='1'" +
    ' Order by t2.DataValue',
  updateRecords:
    "update [SkyIrAcubaHTML].[dbo].[ACSEmpresaFormDataVal1] set [DataValue]='219989' WHERE [IdACSEmpresaFormData]=@ID and [FieldName]='StatusTrans';" +
    "update [SkyIrAcubaHTML].[dbo].[ACSEmpresaFormDataVal1] set [DataValue]='Payé' WHERE [IdACSEmpresaFormData]=@ID and [FieldName]='Status';" +
    "update [SkyIrAcubaHTML].[dbo].[ACSEmpresaFormDataVal1] set [DataValue]=@IdPago WHERE [IdACSEmpresaFormData]=@ID and [FieldName]='IdPago';" +
    "update [SkyIrAcubaHTML].[dbo].[ACSEmpresaFormDataVal1] set [DataValue]=@EmailPago WHERE [IdACSEmpresaFormData]=@ID and [FieldName]='EmailPago';" +
    "update [SkyIrAcubaHTML].[dbo].[ACSEmpresaFormDataVal1] set [DataValue]=@DatePago WHERE [IdACSEmpresaFormData]=@ID and [FieldName]='DatePago';",
}

module.exports = { queries }
