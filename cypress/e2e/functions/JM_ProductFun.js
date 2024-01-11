import JM_ProductsPage from "../pages/JM_ProductsPage";

class JM_ProductFun extends JM_ProductsPage {
  clickadaptorsOrLinkers() {
    let clickadaptorsorlinkers = this.adaptorsOrLinkers();
    clickadaptorsorlinkers.click({ force: true });
    cy.get("h4").contains("Adaptors or linkers").should("exist");
  }

  clickCompressionBandages() {
    let clickcompressionbandages = this.CompressionBandages();
    clickcompressionbandages.click({ force: true });
    cy.get("h4").contains("Compression bandages").should("exist");
  }
  clickAircompressors() {
    this.Aircompressors().click({ force: true });
    cy.get("h4").contains("Air compressors").should("exist");
  }

  clickBenchprotectorsorliners() {
    this.Benchprotectorsorliners().click({ force: true });
    cy.get("h4").contains("Bench protectors or liners").should("exist");
  }

  clickBenchscales() {
    this.Benchscales().click({ force: true });
    cy.get("h4").contains("Bench scales").should("exist");
  }

  clickBenchtopcentrifuges() {
    this.Benchtopcentrifuges().click({ force: true });
    cy.get("h4").contains("Benchtop centrifuges").should("exist");
  }

  clickBinocularlightcompoundmicroscopes() {
    this.Binocularlightcompoundmicroscopes().click({ force: true });
    cy.get("h4")
      .contains("Binocular light compound microscopes")
      .should("exist");
  }
  clickBiologicalsafetycabinet() {
    this.Biologicalsafetycabinet().click({ force: true });
    cy.get("h4").contains("Biological safety cabinet").should("exist");
  }

  clickBlottingmembranes() {
    this.Blottingmembranes().click({ force: true });
    cy.get("h4").contains("Blotting membranes").should("exist");
  }
  clickBottlecappers() {
    this.Bottlecappers().click({ force: true });
    cy.get("h4")
      .contains("Bottle cappers or cotton inserters or safety seal applicators")
      .should("exist");
  }
  clickBottletopdispensers() {
    this.Bottletopdispensers().click({ force: true });
    cy.get("h4").contains("Bottle top dispensers").should("exist");
  }
  clickBottletopsorfiltrationcups() {
    this.Bottletopsorfiltrationcups().click({ force: true });
    cy.get("h4").contains("Bottletops or filtration cups").should("exist");
  }
  clickCabinetdesiccators() {
    this.Cabinetdesiccators().click({ force: true });
    cy.get("h4").contains("Cabinet desiccators").should("exist");
  }
  clickAluminumfoil() {
    this.Aluminumfoil().click({ force: true });
    cy.get("h4").contains("Aluminum foil").should("exist");
  }
  clickAnaerobicenvironmental() {
    this.Anaerobicenvironmental().click({ force: true });
    cy.get("h4")
      .contains("Anaerobic environmental culture systems or supplies")
      .should("exist");
  }

  clickAnalyticalbalances() {
    this.Analyticalbalances().click({ force: true });
    cy.get("h4").contains("Analytical balances").should("exist");
  }
  clickAnemometers() {
    this.Anemometers().click({ force: true });
    cy.get("h4").contains("Anemometers").should("exist");
  }
  clickCalibrationsources() {
    this.Calibrationsources().click({ force: true });
    cy.get("h4").contains("Calibration sources").should("exist");
  }
  clickCalibrationweightsorweightsets() {
    this.Calibrationweightsorweightsets().click({ force: true });
    cy.get("h4").contains("Calibration weights or weight sets").should("exist");
  }
  clickCalorimeters() {
    this.Calorimeters().click({ force: true });
    cy.get("h4").contains("Calorimeters").should("exist");
  }
  clickCapillariesorcartridges() {
    this.Capillariesorcartridges().click({ force: true });
    cy.get("h4").contains("Capillaries or cartridges").should("exist");
  }
  clickBallmills() {
    this.Ballmills().click({ force: true });
    cy.get("h4").contains("Ball mills").should("exist");
  }

  clickCapillaryorhematocrittubes() {
    this.Capillaryorhematocrittubes().click({ force: true });
    cy.get("h4").contains("Capillary or hematocrit tubes").should("exist");
  }

  clickCapsortops() {
    this.Capsortops().click({ force: true });
    cy.get("h4").contains("Caps or tops").should("exist");
  }
  clickCentrifugebuckets() {
    this.Centrifugebuckets().click({ force: true });
    cy.get("h4").contains("Centrifuge buckets").should("exist");
  }

  clickCapsulesfilters() {
    this.Capsulesfilters().click({ force: true });
    cy.get("h4").contains("Capsules filters").should("exist");
  }

  clickCarbondioxideincubator() {
    this.Carbondioxideincubator().click({ force: true });
    cy.get("h4").contains("Carbon dioxide incubator").should("exist");
  }

  clickCarts() {
    this.Carts().click({ force: true });
    cy.get("h4").contains("Carts").should("exist");
  }
  clickCellcultureglasscapillarytube() {
    this.Cellcultureglasscapillarytube().click({ force: true });
    cy.get("h4").contains("Cell culture glass capillary tube").should("exist");
  }

  clickCellscrapers() {
    this.Cellscrapers().click({ force: true });
    cy.get("h4").contains("Cell scrapers").should("exist");
  }
  clickCentrifugalfilters() {
    this.Centrifugalfilters().click({ force: true });
    cy.get("h4").contains("Centrifugal filters").should("exist");
  }

  clickCentrifugeadapters() {
    this.Centrifugeadapters().click({ force: true });
    cy.get("h4").contains("Centrifuge adapters").should("exist");
  }
  clickCentrifugerotors() {
    this.Centrifugerotors().click({ force: true });
    cy.get("h4").contains("Centrifuge rotors").should("exist");
  }

  clickCentrifugetubes() {
    this.Centrifugetubes().click({ force: true });
    cy.get("h4").contains("Centrifuge tubes").should("exist");
  }
  clickCentrifuges() {
    this.Centrifuges().click({ force: true });
    cy.get("h4").contains("Centrifuges").should("exist");
  }
  clickCeramiccrucibles() {
    this.Ceramiccrucibles().click({ force: true });
    cy.get("h4").contains("Ceramic crucibles").should("exist");
  }
  clickChartrecorders() {
    this.Chartrecorders().click({ force: true });
    cy.get("h4").contains("Chart recorders").should("exist");
  }
  clickChemiluminescence() {
    this.Chemiluminescence().click({ force: true });
    cy.get("h4")
      .contains("Chemiluminescence or bioluminescence analyzers")
      .should("exist");
  }
  clickChemistryanalyzers() {
    this.Chemistryanalyzers().click({ force: true });
    cy.get("h4").contains("Chemistry analyzers").should("exist");
  }
  clickChemistryquality() {
    this.Chemistryquality().click({ force: true });
    cy.get("h4")
      .contains("Chemistry quality controls or calibrators or standards")
      .should("exist");
  }
  clickChemistryreagents() {
    this.Chemistryreagents().click({ force: true });
    cy.get("h4").contains("Chemistry reagents or solutions").should("exist");
  }
  clickChemistrytest() {
    this.Chemistrytest().click({ force: true });
    cy.get("h4").contains("Chemistry test kits or supplies").should("exist");
  }
  clickChestfreezers() {
    this.Chestfreezers().click({ force: true });
    cy.get("h4").contains("Chest freezers").should("exist");
  }
  clickChillingunits() {
    this.Chillingunits().click({ force: true });
    cy.get("h4")
      .contains("Chilling units or cold water circulators")
      .should("exist");
  }
  clickChromatographicdetectors() {
    this.Chromatographicdetectors().click({ force: true });
    cy.get("h4").contains("Chromatographic detectors").should("exist");
  }
  clickChromatographycolumns() {
    this.Chromatographycolumns().click({ force: true });
    cy.get("h4").contains("Chromatography columns").should("exist");
  }
  clickChromatographysyringes() {
    this.Chromatographysyringes().click({ force: true });
    cy.get("h4").contains("Chromatography syringes").should("exist");
  }
  clickCirculatingbaths() {
    this.Circulatingbaths().click({ force: true });
    cy.get("h4").contains("Circulating baths").should("exist");
  }
  clickCleanbenches() {
    this.Cleanbenches().click({ force: true });
    cy.get("h4").contains("Clean benches").should("exist");
  }
  clickColdtraps() {
    this.Coldtraps().click({ force: true });
    cy.get("h4").contains("Cold traps").should("exist");
  }
  clickColonycounter() {
    this.Colonycounter().click({ force: true });
    cy.get("h4").contains("Colony counter").should("exist");
  }
  clickColorcodingtape() {
    this.Colorcodingtape().click({ force: true });
    cy.get("h4").contains("Color coding tape").should("exist");
  }
  clickColorimeters() {
    this.Colorimeters().click({ force: true });
    cy.get("h4").contains("Colorimeters").should("exist");
  }
  clickCompressionbandages() {
    this.Compressionbandages().click({ force: true });
    cy.get("h4").contains("Compression bandages").should("exist");
  }
  clickConductivitycells() {
    this.Conductivitycells().click({ force: true });
    cy.get("h4").contains("Conductivity cells").should("exist");
  }
  clickConductivitymeters() {
    this.Conductivitymeters().click({ force: true });
    cy.get("h4").contains("Conductivity meters").should("exist");
  }
  clickCoolcontainers() {
    this.Coolcontainers().click({ force: true });
    cy.get("h4").contains("Cool containers").should("exist");
  }
  clickCooltransport() {
    this.Cooltransport().click({ force: true });
    cy.get("h4").contains("Cool transport or storage").should("exist");
  }
  clickCotton() {
    this.Cotton().click({ force: true });
    cy.get("h4").contains("Cotton").should("exist");
  }
  clickCounters() {
    this.Counters().click({ force: true });
    cy.get("h4").contains("Counters").should("exist");
  }
  clickCryogenic() {
    this.Cryogenic().click({ force: true });
    cy.get("h4")
      .contains("Cryogenic or liquid nitrogen freezers")
      .should("exist");
  }
  clickCryogenicstorageboxes() {
    this.Cryogenicstorageboxes().click({ force: true });
    cy.get("h4").contains("Cryogenic storage boxes").should("exist");
  }
  clickCryogenictubes() {
    this.Cryogenictubes().click({ force: true });
    cy.get("h4").contains("Cryogenic tubes").should("exist");
  }
  clickCryoracks() {
    this.Cryoracks().click({ force: true });
    cy.get("h4").contains("Cryoracks").should("exist");
  }
  clickCryostats() {
    this.Cryostats().click({ force: true });
    cy.get("h4").contains("Cryostats").should("exist");
  }
  clickCulturetubes() {
    this.Culturetubes().click({ force: true });
    cy.get("h4").contains("Culture tubes").should("exist");
  }
  clickCuvettes() {
    this.Cuvettes().click({ force: true });
    cy.get("h4").contains("Cuvettes").should("exist");
  }

  clickCytologyreagents() {
    this.Cytologyreagents().click({ force: true });
    cy.get("h4")
      .contains("Cytology reagents or solutions or stains")
      .should("exist");
  }
  clickCytologytestkits() {
    this.Cytologytestkits().click({ force: true });
    cy.get("h4").contains("Cytology test kits or supplies").should("exist");
  }
  clickDeionization() {
    this.Deionization().click({ force: true });
    cy.get("h4")
      .contains("Deionization or demineralization equipment")
      .should("exist");
  }
  clickDensitometers() {
    this.Densitometers().click({ force: true });
    cy.get("h4").contains("Densitometers").should("exist");
  }
  clickDesking() {
    this.Desking().click({ force: true });
    cy.get("h4").contains("Desking").should("exist");
  }
  clickDichroicfilter() {
    this.Dichroicfilter().click({ force: true });
    cy.get("h4").contains("Dichroic filter").should("exist");
  }
  clickDigestionsystems() {
    this.Digestionsystems().click({ force: true });
    cy.get("h4").contains("Digestion systems").should("exist");
  }
  clickDigitalcameras() {
    this.Digitalcameras().click({ force: true });
    cy.get("h4").contains("Digital cameras").should("exist");
  }
  clickDigitalreadoutrecorders() {
    this.Digitalreadoutrecorders().click({ force: true });
    cy.get("h4").contains("Digital readout recorders").should("exist");
  }
  clickDissolvedoxygenmeters() {
    this.Dissolvedoxygenmeters().click({ force: true });
    cy.get("h4").contains("Dissolved oxygen meters").should("exist");
  }
  clickDissolvedoxygenprobes() {
    this.Dissolvedoxygenprobes().click({ force: true });
    cy.get("h4").contains("Dissolved oxygen probes").should("exist");
  }
  clickDivertingmanifolds() {
    this.Divertingmanifolds().click({ force: true });
    cy.get("h4").contains("Diverting manifolds").should("exist");
  }
  clickDollies() {
    this.Dollies().click({ force: true });
    cy.get("h4").contains("Dollies").should("exist");
  }
  clickDosingspoons() {
    this.Dosingspoons().click({ force: true });
    cy.get("h4").contains("Dosing spoons").should("exist");
  }
  clickDouncehomogenizers() {
    this.Douncehomogenizers().click({ force: true });
    cy.get("h4").contains("Dounce homogenizers").should("exist");
  }

  clickDroppingpipettes() {
    this.Droppingpipettes().click({ force: true });
    cy.get("h4").contains("Dropping pipettes").should("exist");
  }
  clickDrybaths() {
    this.Drybaths().click({ force: true });
    cy.get("h4").contains("Dry baths or heating blocks").should("exist");
  }

  clickDryingcabinets() {
    this.Dryingcabinets().click({ force: true });
    cy.get("h4").contains("Drying cabinets or ovens").should("exist");
  }
  clickDryingracks() {
    this.Dryingracks().click({ force: true });
    cy.get("h4").contains("Drying racks").should("exist");
  }
  clickEducational() {
    this.Educational().click({ force: true });
    cy.get("h4")
      .contains("Educational or vocational textbooks")
      .should("exist");
  }
  clickElectrodeholder() {
    this.Electrodeholder().click({ force: true });
    cy.get("h4").contains("Electrode holder").should("exist");
  }

  clickElectroniccounters() {
    this.Electroniccounters().click({ force: true });
    cy.get("h4").contains("Electronic counters").should("exist");
  }
  clickElectronicmeasuring() {
    this.Electronicmeasuring().click({ force: true });
    cy.get("h4").contains("Electronic measuring probes").should("exist");
  }
  clickElectronicmultichannel() {
    this.Electronicmultichannel().click({ force: true });
    cy.get("h4").contains("Electronic multichannel pipetters").should("exist");
  }
  clickElectronicsingle() {
    this.Electronicsingle().click({ force: true });
    cy.get("h4")
      .contains("Electronic single channel pipetters")
      .should("exist");
  }
  clickElectronictoploading() {
    this.Electronictoploading().click({ force: true });
    cy.get("h4").contains("Electronic toploading balances").should("exist");
  }
  clickElectrophoresissystem() {
    this.Electrophoresissystem().click({ force: true });
    cy.get("h4").contains("Electrophoresis system accessories").should("exist");
  }
  clickEnvironmentaltest() {
    this.Environmentaltest().click({ force: true });
    cy.get("h4")
      .contains("Environmental test kits or supplies")
      .should("exist");
  }
  clickEquipmenttransportation() {
    this.Equipmenttransportation().click({ force: true });
    cy.get("h4").contains("Equipment transportation case").should("exist");
  }
}

export default JM_ProductFun;
