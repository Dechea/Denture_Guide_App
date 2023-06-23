export const collectionsWithFields = [{"name":"PatientFile","fields":[{"name":"id","type":"string"},{"name":"ts","type":"object","fields":[{"name":"isoString","type":"string"}]},{"name":"patient","type":"Patient"},{"name":"teeth","type":"Tooth[]"}]},{"name":"Patient","fields":[{"name":"name","type":"string"},{"name":"avatar","type":"string"},{"name":"status","type":"string"}]},{"name":"Tooth","fields":[{"name":"name","type":"string"},{"name":"root","type":"object","fields":[{"name":"findings","type":"Finding[]"},{"name":"treatmentDoc","type":"TreatmentDoc"},{"name":"addon","type":"BodyPartLeaf"},{"name":"leftRoot","type":"BodyPartLeaf"},{"name":"middleRoot","type":"BodyPartLeaf"},{"name":"rightRoot","type":"BodyPartLeaf"}]},{"name":"crown","type":"object","fields":[{"name":"findings","type":"Finding[]"},{"name":"treatmentDoc","type":"TreatmentDoc"},{"name":"addon","type":"BodyPartLeaf"},{"name":"toothNeck","type":"BodyPartLeaf"},{"name":"left","type":"BodyPartLeaf"},{"name":"right","type":"BodyPartLeaf"},{"name":"center","type":"BodyPartLeaf"},{"name":"outside","type":"BodyPartLeaf"},{"name":"inside","type":"BodyPartLeaf"}]}]},{"name":"BodyPartLeaf","fields":[{"name":"findings","type":"Finding[]"},{"name":"treatmentDocs","type":"TreatmentDoc[]"}]},{"name":"Finding","fields":[{"name":"name","type":"string"},{"name":"value","type":"string"},{"name":"areas","type":"Area[]"},{"name":"localizations","type":"TreatmentLocalization[]"}]},{"name":"TreatmentDoc","fields":[{"name":"treatment","type":"Treatment"},{"name":"selectedProducts","type":"SelectedProduct[]"}]},{"name":"SelectedProduct","fields":[{"name":"selectedProduct","type":"Product"},{"name":"quantity","type":"number"}]},{"name":"ProductLocalization","fields":[{"name":"name","type":"string"},{"name":"locale","type":"string"},{"name":"description","type":"string"},{"name":"price","type":"object","fields":[{"name":"amount","type":"number"},{"name":"currency","type":"string"}]}]},{"name":"Product","fields":[{"name":"id","type":"string"},{"name":"manufacturerProductId","type":"string"},{"name":"manufacturer","type":"object","fields":[{"name":"name","type":"string"}]},{"name":"localizations","type":"ProductLocalization[]"},{"name":"implant","type":"object","fields":[{"name":"implantLine","type":"string"},{"name":"material","type":"string"},{"name":"level","type":"string"},{"name":"engaging","type":"boolean"},{"name":"platformSwitch","type":"boolean"},{"name":"guided","type":"boolean"},{"name":"insertionPost","type":"string"},{"name":"sterile","type":"boolean"},{"name":"length","type":"number"},{"name":"lengthNeck","type":"number"},{"name":"diameterPlatform","type":"number"},{"name":"singleUse","type":"boolean"}]},{"name":"abutment","type":"object","fields":[{"name":"implantLine","type":"string"},{"name":"abutmentLine","type":"string"},{"name":"guided","type":"string"},{"name":"platformSwitch","type":"boolean"},{"name":"workflow","type":"string[]"},{"name":"retention","type":"string"},{"name":"material","type":"string"},{"name":"sterile","type":"boolean"},{"name":"connectionType","type":"string"},{"name":"heightProsthetic","type":"number"},{"name":"maxTorque","type":"number"},{"name":"angle","type":"string"},{"name":"diameterPlatform","type":"number"},{"name":"gingivaHeight","type":"number"},{"name":"indication","type":"string"},{"name":"singleUse","type":"boolean"}]},{"name":"healingAbutment","type":"object","fields":[{"name":"implantLine","type":"string"},{"name":"abutmentLine","type":"string"},{"name":"shape","type":"string"},{"name":"platformSwitch","type":"boolean"},{"name":"material","type":"string"},{"name":"sterile","type":"boolean"},{"name":"maxTorque","type":"number"},{"name":"diameterPlatform","type":"number"},{"name":"gingivaHeight","type":"number"},{"name":"singleUse","type":"boolean"}]},{"name":"temporaryAbutment","type":"object","fields":[{"name":"implantLine","type":"string"},{"name":"abutmentLine","type":"string"},{"name":"guided","type":"string"},{"name":"platformSwitch","type":"boolean"},{"name":"retention","type":"string"},{"name":"material","type":"string"},{"name":"sterile","type":"boolean"},{"name":"connectionType","type":"string"},{"name":"heightProsthetic","type":"number"},{"name":"maxTorque","type":"number"},{"name":"angle","type":"string"},{"name":"diameterPlatform","type":"number"},{"name":"gingivaHeight","type":"number"},{"name":"indication","type":"string"},{"name":"singleUse","type":"boolean"}]},{"name":"impression","type":"object","fields":[{"name":"type","type":"string"},{"name":"implantLine","type":"string"},{"name":"abutmentLine","type":"string"},{"name":"diameterPlatform","type":"number"}]}]},{"name":"TreatmentGroup","fields":[{"name":"name","type":"string"},{"name":"treatments","type":"Treatment[]"},{"name":"localizations","type":"TreatmentLocalization[]"}]},{"name":"Treatment","fields":[{"name":"name","type":"string"},{"name":"areas","type":"Area[]"},{"name":"localizations","type":"TreatmentLocalization[]"}]},{"name":"Area","fields":[{"name":"name","type":"string"}]},{"name":"TreatmentLocalization","fields":[{"name":"name","type":"string"},{"name":"synonyms","type":"string[]"},{"name":"locale","type":"string"}]}]