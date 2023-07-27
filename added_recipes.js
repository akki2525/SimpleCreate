
onEvent('recipes', event=> {
    event.recipes.createsifterSifting([Item.of('create:crushed_raw_osmium').withChance(0.25),Item.of('create:crushed_raw_silver').withChance(0.15),Item.of('create:crushed_raw_tin').withChance(0.3),Item.of('create:crushed_raw_lead').withChance(0.2),Item.of('create:crushed_raw_aluminum').withChance(0.25),Item.of('create:crushed_raw_uranium').withChance(0.1),Item.of('create:crushed_raw_nickel').withChance(0.1),Item.of('minecraft:coal').withChance(0.25),Item.of('minecraft:flint').withChance(0.1),Item.of('create:experience_nugget').withChance(0.15)], ['minecraft:gravel','createsifter:custom_mesh'])
    event.shapeless("createsifter:custom_mesh", ["stick", "stick", "stick", "stick", "mekanism:ingot_osmium", "stick", "stick", "stick", "stick" ])
    event.shapeless("createaddition:electric_motor", ["create:brass_sheet", "create:shaft", "create:brass_sheet", "createaddition:copper_spool", "#forge:rods/iron", "createaddition:copper_spool", "create:brass_sheet", "createaddition:capacitor", "create:brass_sheet"])
    event.shapeless("createaddition:alternator", ["create:iron_sheet", "create:shaft", "create:iron_sheet", "createaddition:copper_spool", "#forge:rods/iron", "createaddition:copper_spool", "create:iron_sheet", "createaddition:capacitor", "create:iron_sheet"])
    event.remove({output:'create_sa:vault_component'})
    event.remove({output:'create_sa:block_picker'})
    event.remove({output:'create_sa:copper_magnet'})
    event.recipes.createCrushing(['gunpowder', Item.of('gunpowder').withChance(0.1)], 'flint') 
    event.remove({output:'mekanism:energy_tablet'})
    event.shapeless("mekanism:energy_tablet",["redstone", "#forge:plates/copper", "redstone", "mekanism:alloy_infused", "#forge:plates/copper", "mekanism:alloy_infused", "redstone", "#forge:plates/copper", "redstone"])
    event.shapeless("create:precision_mechanism",["create:cogwheel", "create:large_cogwheel", "create:cogwheel", "create:large_cogwheel", "#forge:plates/gold", "create:large_cogwheel", "create:cogwheel", "create:large_cogwheel", "create:cogwheel"])
    
})