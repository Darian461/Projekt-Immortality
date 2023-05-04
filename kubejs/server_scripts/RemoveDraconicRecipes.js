// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	//remove wyvern tools
	event.remove({output: 'draconicevolution:wyvern_shovel'})
	event.remove({output: 'draconicevolution:wyvern_hoe'})
	event.remove({output: 'draconicevolution:wyvern_pickaxe'})
	event.remove({output: 'draconicevolution:wyvern_sword'})
	event.remove({output: 'draconicevolution:wyvern_axe'})
	event.remove({output: 'draconicevolution:wyvern_bow'})
	event.remove({output: 'draconicevolution:wyvern_chestpiece'})
	//remove draconic tools
	event.remove({output: 'draconicevolution:draconic_shovel'})
	event.remove({output: 'draconicevolution:draconic_hoe'})
	event.remove({output: 'draconicevolution:draconic_pickaxe'})
	event.remove({output: 'draconicevolution:draconic_sword'})
	event.remove({output: 'draconicevolution:draconic_axe'})
	event.remove({output: 'draconicevolution:draconic_bow'})
	event.remove({output: 'draconicevolution:draconic_chestpiece'})
	event.remove({output: 'draconicevolution:draconic_staff'})
	//remove chaotic tools
	event.remove({output: 'draconicevolution:chaotic_shovel'})
	event.remove({output: 'draconicevolution:chaotic_hoe'})
	event.remove({output: 'draconicevolution:chaotic_pickaxe'})
	event.remove({output: 'draconicevolution:chaotic_sword'})
	event.remove({output: 'draconicevolution:chaotic_axe'})
	event.remove({output: 'draconicevolution:chaotic_bow'})
	event.remove({output: 'draconicevolution:chaotic_chestpiece'})
	event.remove({output: 'draconicevolution:chaotic_staff'})
	// Change recipes here
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})