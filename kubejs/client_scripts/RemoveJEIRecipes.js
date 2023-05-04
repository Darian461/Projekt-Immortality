// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	//hide wyvern tools
	event.hide('draconicevolution:wyvern_shovel')
	event.hide('draconicevolution:wyvern_hoe')
	event.hide('draconicevolution:wyvern_pickaxe')
	event.hide('draconicevolution:wyvern_sword')
	event.hide('draconicevolution:wyvern_axe')
	event.hide('draconicevolution:wyvern_bow')
	event.hide('draconicevolution:wyvern_chestpiece')
	//hide draconic tools
	event.hide('draconicevolution:draconic_shovel')
	event.hide('draconicevolution:draconic_hoe')
	event.hide('draconicevolution:draconic_pickaxe')
	event.hide('draconicevolution:draconic_sword')
	event.hide('draconicevolution:draconic_axe')
	event.hide('draconicevolution:draconic_bow')
	event.hide('draconicevolution:draconic_chestpiece')
	event.hide('draconicevolution:draconic_staff')
	//hide chaotic tools
	event.hide('draconicevolution:chaotic_shovel')
	event.hide('draconicevolution:chaotic_hoe')
	event.hide('draconicevolution:chaotic_pickaxe')
	event.hide('draconicevolution:chaotic_sword')
	event.hide('draconicevolution:chaotic_axe')
	event.hide('draconicevolution:chaotic_bow')
	event.hide('draconicevolution:chaotic_chestpiece')
	event.hide('draconicevolution:chaotic_staff')
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})