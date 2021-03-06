// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    var bootstrapImages = false;
    if ((Anatomy.find().count() === 0) && bootstrapImages) {
        console.log('No records in Anatomy collection.  Bootstrapping some files.')
        var data = [
            {title: "abdominalArteries",     image: 'images/grays.anatomy.thumbnails/abdominalArteries.png'},
            {title: "abdominalArteriesAndVeins",     image: 'images/grays.anatomy.thumbnails/abdominalArteriesAndVeins.png'},
            {title: "abdominalOverview",     image: 'images/grays.anatomy.thumbnails/abdominalOverview.png'},
            {title: "arteresAndVeinsOfUterus",     image: 'images/grays.anatomy.thumbnails/arteresAndVeinsOfUterus.png'},
            {title: "arteriesAndVeinsOfNeck",     image: 'images/grays.anatomy.thumbnails/arteriesAndVeinsOfNeck.png'},
            {title: "arteriesAndVeinsOfUpperExtremities",     image: 'images/grays.anatomy.thumbnails/arteriesAndVeinsOfUpperExtremities.png'},
            {title: "arteriesAndViensOfLowerExtremities",     image: 'images/grays.anatomy.thumbnails/arteriesAndViensOfLowerExtremities.png'},
            {title: "arteriesOfLowerExtremities1",     image: 'images/grays.anatomy.thumbnails/arteriesOfLowerExtremities1.png'},
            {title: "arteriesOfLowerExtremities2",     image: 'images/grays.anatomy.thumbnails/arteriesOfLowerExtremities2.png'},
            {title: "arteriesOfTheColon",     image: 'images/grays.anatomy.thumbnails/arteriesOfTheColon.png'},
            {title: "arteriesOfTheHead",     image: 'images/grays.anatomy.thumbnails/arteriesOfTheHead.png'},
            {title: "arteriesOfTheStomach",     image: 'images/grays.anatomy.thumbnails/arteriesOfTheStomach.png'},
            {title: "arteriesOfUpperExtremities2",     image: 'images/grays.anatomy.thumbnails/arteriesOfUpperExtremities2.png'},
            {title: "baseOfSkull",     image: 'images/grays.anatomy.thumbnails/baseOfSkull.png'},
            {title: "bloodcells",     image: 'images/grays.anatomy.thumbnails/bloodcells.png'},
            {title: "boneGrowth",     image: 'images/grays.anatomy.thumbnails/boneGrowth.png'},
            {title: "brain1",     image: 'images/grays.anatomy.thumbnails/brain1.png'},
            {title: "brain2",     image: 'images/grays.anatomy.thumbnails/brain2.png'},
            {title: "brain3",     image: 'images/grays.anatomy.thumbnails/brain3.png'},
            {title: "brain4",     image: 'images/grays.anatomy.thumbnails/brain4.png'},
            {title: "brain5",     image: 'images/grays.anatomy.thumbnails/brain5.png'},
            {title: "bridgeOfNose",     image: 'images/grays.anatomy.thumbnails/bridgeOfNose.png'},
            {title: "cardiac-system",     image: 'images/grays.anatomy.thumbnails/cardiac-system.png'},
            {title: "cerabelloCortex1",     image: 'images/grays.anatomy.thumbnails/cerabelloCortex1.png'},
            {title: "chestArteries",     image: 'images/grays.anatomy.thumbnails/chestArteries.png'},
            {title: "circleOfWillis",     image: 'images/grays.anatomy.thumbnails/circleOfWillis.png'},
            {title: "dental",     image: 'images/grays.anatomy.thumbnails/dental.png'},
            {title: "digestiveGlands",     image: 'images/grays.anatomy.thumbnails/digestiveGlands.png'},
            {title: "digestiveSystemArteriesAndVeins",     image: 'images/grays.anatomy.thumbnails/digestiveSystemArteriesAndVeins.png'},
            {title: "digestiveTrack",     image: 'images/grays.anatomy.thumbnails/digestiveTrack.png'},
            {title: "ear1",     image: 'images/grays.anatomy.thumbnails/ear1.png'},
            {title: "ear2",     image: 'images/grays.anatomy.thumbnails/ear2.png'},
            {title: "ear3",     image: 'images/grays.anatomy.thumbnails/ear3.png'},
            {title: "ear4",     image: 'images/grays.anatomy.thumbnails/ear4.png'},
            {title: "earCanalBones",     image: 'images/grays.anatomy.thumbnails/earCanalBones.jpg'},
            {title: "extremetesCartilidge",     image: 'images/grays.anatomy.thumbnails/extremetesCartilidge.png'},
            {title: "eye1",     image: 'images/grays.anatomy.thumbnails/eye1.png'},
            {title: "eye2",     image: 'images/grays.anatomy.thumbnails/eye2.png'},
            {title: "eye3",     image: 'images/grays.anatomy.thumbnails/eye3.png'},
            {title: "facialOpticArteriesAndVeins",     image: 'images/grays.anatomy.thumbnails/facialOpticArteriesAndVeins.png'},
            {title: "feet",     image: 'images/grays.anatomy.thumbnails/feet.png'},
            {title: "femaleSexualOrgans",     image: 'images/grays.anatomy.thumbnails/femaleSexualOrgans.png'},
            {title: "femoralStressAngles",     image: 'images/grays.anatomy.thumbnails/femoralStressAngles.png'},
            {title: "femoralVeinsAndArteries",     image: 'images/grays.anatomy.thumbnails/femoralVeinsAndArteries.png'},
            {title: "foramenMagnum",     image: 'images/grays.anatomy.thumbnails/foramenMagnum.png'},
            {title: "fornix",     image: 'images/grays.anatomy.thumbnails/fornix.png'},
            {title: "gastricEmbryology",     image: 'images/grays.anatomy.thumbnails/gastricEmbryology.png'},
            {title: "generalGlandsOfExtremities",     image: 'images/grays.anatomy.thumbnails/generalGlandsOfExtremities.png'},
            {title: "hands",     image: 'images/grays.anatomy.thumbnails/hands.png'},
            {title: "headNeckMuscles",     image: 'images/grays.anatomy.thumbnails/headNeckMuscles.png'},
            {title: "heart1",     image: 'images/grays.anatomy.thumbnails/heart1.png'},
            {title: "heart2",     image: 'images/grays.anatomy.thumbnails/heart2.png'},
            {title: "hipJoint",     image: 'images/grays.anatomy.thumbnails/hipJoint.png'},
            {title: "hypothalmus",     image: 'images/grays.anatomy.thumbnails/hypothalmus.png'},
            {title: "kidneys",     image: 'images/grays.anatomy.thumbnails/kidneys.png'},
            {title: "knee",     image: 'images/grays.anatomy.thumbnails/knee.png'},
            {title: "larynx1",     image: 'images/grays.anatomy.thumbnails/larynx1.png'},
            {title: "larynx2",     image: 'images/grays.anatomy.thumbnails/larynx2.png'},
            {title: "lateralFeet",     image: 'images/grays.anatomy.thumbnails/lateralFeet.png'},
            {title: "legMuscles",     image: 'images/grays.anatomy.thumbnails/legMuscles.png'},
            {title: "liver",     image: 'images/grays.anatomy.thumbnails/liver.png'},
            {title: "lowerExtremityBones",     image: 'images/grays.anatomy.thumbnails/lowerExtremityBones.png'},
            {title: "lungs1",     image: 'images/grays.anatomy.thumbnails/lungs1.png'},
            {title: "lungs2",     image: 'images/grays.anatomy.thumbnails/lungs2.png'},
            {title: "lungs3",     image: 'images/grays.anatomy.thumbnails/lungs3.png'},
            {title: "lymphNodesOfTheHead",     image: 'images/grays.anatomy.thumbnails/lymphNodesOfTheHead.png'},
            {title: "maleSexualOrgans",     image: 'images/grays.anatomy.thumbnails/maleSexualOrgans.png'},
            {title: "mandible",     image: 'images/grays.anatomy.thumbnails/mandible.jpg'},
            {title: "mandibleLigiments",     image: 'images/grays.anatomy.thumbnails/mandibleLigiments.png'},
            {title: "maxillaryFaceBones",     image: 'images/grays.anatomy.thumbnails/maxillaryFaceBones.png'},
            {title: "medullaOblongata1",     image: 'images/grays.anatomy.thumbnails/medullaOblongata1.png'},
            {title: "medullaOblongata2",     image: 'images/grays.anatomy.thumbnails/medullaOblongata2.png'},
            {title: "musclesOfLowerLeg",     image: 'images/grays.anatomy.thumbnails/musclesOfLowerLeg.png'},
            {title: "musclesOfTheHand",     image: 'images/grays.anatomy.thumbnails/musclesOfTheHand.png'},
            {title: "nasalFacialNerves",     image: 'images/grays.anatomy.thumbnails/nasalFacialNerves.png'},
            {title: "neckArteries",     image: 'images/grays.anatomy.thumbnails/neckArteries.png'},
            {title: "neckLigiments",     image: 'images/grays.anatomy.thumbnails/neckLigiments.png'},
            {title: "neckVeinsAndArteries",     image: 'images/grays.anatomy.thumbnails/neckVeinsAndArteries.png'},
            {title: "nerveDiagram1",     image: 'images/grays.anatomy.thumbnails/nerveDiagram1.png'},
            {title: "nerveDiagram2",     image: 'images/grays.anatomy.thumbnails/nerveDiagram2.png'},
            {title: "nerveOverview",     image: 'images/grays.anatomy.thumbnails/nerveOverview.png'},
            {title: "nervesOfTheFaceAndMandible",     image: 'images/grays.anatomy.thumbnails/nervesOfTheFaceAndMandible.png'},
            {title: "nervesOfTheGut",     image: 'images/grays.anatomy.thumbnails/nervesOfTheGut.png'},
            {title: "nervesOfTheLowerExtremities",     image: 'images/grays.anatomy.thumbnails/nervesOfTheLowerExtremities.png'},
            {title: "nervesOfTheLowerExtremities2",     image: 'images/grays.anatomy.thumbnails/nervesOfTheLowerExtremities2.png'},
            {title: "nervesOfTheNeck2",     image: 'images/grays.anatomy.thumbnails/nervesOfTheNeck2.png'},
            {title: "nervesOfThePelvis",     image: 'images/grays.anatomy.thumbnails/nervesOfThePelvis.png'},
            {title: "nervesOfTheShoulder",     image: 'images/grays.anatomy.thumbnails/nervesOfTheShoulder.png'},
            {title: "nervesOfTheTorso",     image: 'images/grays.anatomy.thumbnails/nervesOfTheTorso.png'},
            {title: "nervesOfTheUpperExtremities",     image: 'images/grays.anatomy.thumbnails/nervesOfTheUpperExtremities.png'},
            {title: "nose",     image: 'images/grays.anatomy.thumbnails/nose.png'},
            {title: "noseBones",     image: 'images/grays.anatomy.thumbnails/noseBones.png'},
            {title: "opticRecess",     image: 'images/grays.anatomy.thumbnails/opticRecess.png'},
            {title: "opticSystem",     image: 'images/grays.anatomy.thumbnails/opticSystem.png'},
            {title: "orbits",     image: 'images/grays.anatomy.thumbnails/orbits.png'},
            {title: "parotidGlandAndDucts",     image: 'images/grays.anatomy.thumbnails/parotidGlandAndDucts.png'},
            {title: "pelvicBone",     image: 'images/grays.anatomy.thumbnails/pelvicBone.png'},
            {title: "pelvicGlands",     image: 'images/grays.anatomy.thumbnails/pelvicGlands.png'},
            {title: "pharynx",     image: 'images/grays.anatomy.thumbnails/pharynx.png'},
            {title: "prostate",     image: 'images/grays.anatomy.thumbnails/prostate.png'},
            {title: "rectum",     image: 'images/grays.anatomy.thumbnails/rectum.png'},
            {title: "rib",     image: 'images/grays.anatomy.thumbnails/rib.png'},
            {title: "ribcage",     image: 'images/grays.anatomy.thumbnails/ribcage.png'},
            {title: "ribLigiments",     image: 'images/grays.anatomy.thumbnails/ribLigiments.png'},
            {title: "ribMuscles",     image: 'images/grays.anatomy.thumbnails/ribMuscles.png'},
            {title: "ribsLungs",     image: 'images/grays.anatomy.thumbnails/ribsLungs.png'},
            {title: "scapulaeClavical",     image: 'images/grays.anatomy.thumbnails/scapulaeClavical.png'},
            {title: "sexMuscles",     image: 'images/grays.anatomy.thumbnails/sexMuscles.png'},
            {title: "sexualDevelopment",     image: 'images/grays.anatomy.thumbnails/sexualDevelopment.png'},
            {title: "sexualDevelopment2",     image: 'images/grays.anatomy.thumbnails/sexualDevelopment2.png'},
            {title: "skin",     image: 'images/grays.anatomy.thumbnails/skin.png'},
            {title: "skull",     image: 'images/grays.anatomy.thumbnails/skull.jpg'},
            {title: "skullPlates",     image: 'images/grays.anatomy.thumbnails/skullPlates.png'},
            {title: "spinalNerves1",     image: 'images/grays.anatomy.thumbnails/spinalNerves1.png'},
            {title: "spinalNerves2",     image: 'images/grays.anatomy.thumbnails/spinalNerves2.png'},
            {title: "sternum",     image: 'images/grays.anatomy.thumbnails/sternum.png'},
            {title: "stomachAndSmallIntestines",     image: 'images/grays.anatomy.thumbnails/stomachAndSmallIntestines.png'},
            {title: "tailbone",     image: 'images/grays.anatomy.thumbnails/tailbone.png'},
            {title: "testes",     image: 'images/grays.anatomy.thumbnails/testes.png'},
            {title: "thyroid",     image: 'images/grays.anatomy.thumbnails/thyroid.png'},
            {title: "tongue2",     image: 'images/grays.anatomy.thumbnails/tongue2.png'},
            {title: "torsoMuscles",     image: 'images/grays.anatomy.thumbnails/torsoMuscles.png'},
            {title: "torsoOverview",     image: 'images/grays.anatomy.thumbnails/torsoOverview.png'},
            {title: "tosoGlands",     image: 'images/grays.anatomy.thumbnails/tosoGlands.png'},
            {title: "tounge",     image: 'images/grays.anatomy.thumbnails/tounge.png'},
            {title: "tympanicDevelopment",     image: 'images/grays.anatomy.thumbnails/tympanicDevelopment.png'},
            {title: "upperArmMuscles",     image: 'images/grays.anatomy.thumbnails/upperArmMuscles.png'},
            {title: "upperExtremityBones",     image: 'images/grays.anatomy.thumbnails/upperExtremityBones.png'},
            {title: "veinsOfHead",     image: 'images/grays.anatomy.thumbnails/veinsOfHead.png'},
            {title: "veinsOfTheNeck",     image: 'images/grays.anatomy.thumbnails/veinsOfTheNeck.png'},
            {title: "vertebrae",     image: 'images/grays.anatomy.thumbnails/vertebrae.png'},
            {title: "vertebralVeins",     image: 'images/grays.anatomy.thumbnails/vertebralVeins.png'},
            {title: "vocalCords",     image: 'images/grays.anatomy.thumbnails/vocalCords.png'}
        ];

        console.log('Adding records to Anatomy collection.')
        for (var i = 0; i < data.length; i++) {
            Anatomy.insert({
                title:   data[i].title,
                image:  data[i].image
            });
        }
        console.log('Records successfully added to Anatomy collection.')
    }
});