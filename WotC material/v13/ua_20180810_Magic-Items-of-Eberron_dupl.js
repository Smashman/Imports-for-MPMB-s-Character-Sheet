var iFileName = "ua_20180810_Magic-Items-of-Eberron.js";
RequiredSheetVersion(13);
// This file adds the content from the Unearthed Arcana: Magic Items of Eberron to MPMB's Character Record Sheet
// Note that this content also appears in the script for Wayfinder's Guide to Eberron and thus both sources are included for all things here

// Define the sources
SourceList["UA:MIoE"] = {
	name : "Unearthed Arcana: Magic Items of Eberron",
	abbreviation : "UA:MIoE",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2018/dnd/downloads/UA_Magic_Items_of_Eberron.pdf",
	date : "2018/08/10"
};

if (!SourceList.WGtE) {
	MagicItemsList["imbued wood"] = {
		name : "Imbued Wood",
		source : [["WGtE", 114], ["UA:MIoE", 1]],
		type : "wondrous item",
		rarity : "common",
		description : "While holding a rod, wand, or staff made of imbued wood, spells I cast that deal the associated damage type add a +1 bonus to one of their damage rolls.",
		descriptionFull : "Powerful manifest zones can infuse local trees with planar energies. A gifted artificer can tap into this to create a wand, staff, or rod that is especially effective at channeling a particular type of energy.\n   When you cast a spell that deals damage of the type associated with the material your arcane focus is made from, the spell gains a +1 bonus to one damage roll of that spell. The materials and their associated damage types are listed here.\n \u2022 Fernian ash: Fire damage.\n \u2022 Irian rosewood: Radiant damage.\n \u2022 Kythrian manchineel: Acid or poison damage.\n \u2022 Lamannian oak: Lightning or thunder damage.\n \u2022 Mabaran ebony: Necrotic damage.\n \u2022 Quori beech, Xorian wenge: Psychic damage.\n \u2022 Risian pine: Cold damage.\n \u2022 Shavarran birch: Force damage.",
		attunement : true,
		allowDuplicates : true,
		choices : ["Fernian Ash (fire)", "Irian Rosewood (radiant)", "Kythrian Manchineel (acid and poison)", "Lamannian Oak (lightning and thunder)", "Mabaran Ebony (necrotic)", "Quori Beech (psychic)", "Risian Pine (cold)", "Shavarran Birch (force)", "Xorian Wenge (psychic)"],
		"fernian ash (fire)" : {
			name : "Fernian Ash Arcane Focus",
			description : "While holding a rod, wand, or staff made of Fernian ash, spells I cast that deal fire damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "fire", 1, true, true);
				},
				"Cantrips and spells that deal fire damage get a +1 bonus added to one of their damage rolls."
			]
		},
		"irian rosewood (radiant)" : {
			name : "Irian Rosewood Arcane Focus",
			description : "While holding a rod, wand, or staff made of Irian rosewood, spells I cast that deal radiant damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "radiant", 1, true, true);
				},
				"Cantrips and spells that deal radiant damage get a +1 bonus added to one of their damage rolls."
			]
		},
		"kythrian manchineel (acid and poison)" : {
			name : "Kythrian Manchineel Arcane Focus",
			description : "While holding a rod, wand, or staff made of Kythrian manchineel, spells I cast that deal acid or poison damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "acid|poison", 1, true, true);
				},
				"Cantrips and spells that deal acid or poison damage get a +1 bonus added to one of their damage rolls."
			]
		},
		"lamannian oak (lightning and thunder)" : {
			name : "Lamannian Oak Arcane Focus",
			description : "While holding a rod, wand, or staff made of Lamannian oak, spells I cast that deal lightning or thunder damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "lightning|thunder", 1, true, true);
				},
				"Cantrips and spells that deal lightning or thunder damage get a +1 bonus added to one of their damage rolls."
			]
		},
		"mabaran ebony (necrotic)" : {
			name : "Mabaran Ebony Arcane Focus",
			description : "While holding a rod, wand, or staff made of Mabaran ebony, spells I cast that deal necrotic damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "necrotic", 1, true, true);
				},
				"Cantrips and spells that deal necrotic damage get a +1 bonus added to one of their damage rolls."
			]
		},
		"quori beech (psychic)" : {
			name : "Quori Beech Arcane Focus",
			description : "While holding a rod, wand, or staff made of Quori beech, spells I cast that deal psychic damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "psychic", 1, true, true);
				},
				"Cantrips and spells that deal psychic damage get a +1 bonus added to one of their damage rolls."
			]
		},
		"risian pine (cold)" : {
			name : "Risian Pine Arcane Focus",
			description : "While holding a rod, wand, or staff made of Risian pine, spells I cast that deal cold damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "cold", 1, true, true);
				},
				"Cantrips and spells that deal cold damage get a +1 bonus added to one of their damage rolls."
			]
		},
		"shavarran birch (force)" : {
			name : "Shavarran Birch Arcane Focus",
			description : "While holding a rod, wand, or staff made of Shavarran birch, spells I cast that deal force damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "force", 1, true, true);
				},
				"Cantrips and spells that deal force damage get a +1 bonus added to one of their damage rolls."
			]
		},
		"xorian wenge (psychic)" : {
			name : "Xorian Wenge Arcane Focus",
			description : "While holding a rod, wand, or staff made of Xorian wenge, spells I cast that deal psychic damage add a +1 bonus to one of their damage rolls.",
			spellAdd : [
				function (spellKey, spellObj, spName) {
					if (!spellObj.psionic) return genericSpellDmgEdit(spellKey, spellObj, "psychic", 1, true, true);
				},
				"Cantrips and spells that deal psychic damage get a +1 bonus added to one of their damage rolls."
			]
		}
	}
	MagicItemsList["orb of shielding"] = {
		name : "Orb of Shielding",
		source : [["WGtE", 114], ["UA:MIoE", 1]],
		type : "wondrous item",
		rarity : "common",
		description : "An orb of shielding is made from crystal or stone aligned to one of the planes. While I am holding the orb and take damage of the type associated with the material the orb is made from, I can use my reaction to reduce the damage by 1d4.",
		descriptionFull : "An orb of shielding is made from crystal or stone aligned to one of the planes. While you are holding the orb and take damage of the type associated with the material your orb is made from, you can use your reaction to reduce the damage by 1d4. The materials and their associated damage types are listed below.\n" +
		"\n \u2022 Fernian basalt: Fire damage" +
		"\n \u2022 Irian quartz: Radiant damage" +
		"\n \u2022 Kythrian skarn: Acid or poison damage" +
		"\n \u2022 Lamannian flint: Lightning or thunder damage" +
		"\n \u2022 Mabaran obsidian: Necrotic damage" +
		"\n \u2022 Quori celestine, Xorian marble: Psychic damage" +
		"\n \u2022 Risian shale: Cold damage" +
		"\n \u2022 Shavaran chert: Force damage",
		attunement : true,
		weight : 3,
		action : [["reaction", ""]],
		choices : ["Fernian Basalt (fire)", "Irian Quartz (radiant)", "Kythrian Skarn (acid or poison)", "Lamannian Flint (lightning or thunder)", "Mabaran Obsidian (necrotic)", "Quori Celestine (psychic)", "Risian Shale (cold)", "Shavaran Chert (force)", "Xorian Marble (psychic)"],
		"fernian basalt (fire)" : {
			name : "Orb of Shielding [Fernian Basalt]",
			description : "This stone orb is made from fernian basalt. As a reaction while I am holding the orb and take fire damage, I can reduce the damage by 1d4."
		},
		"irian quartz (radiant)" : {
			name : "Orb of Shielding [Irian Quartz]",
			description : "This crystal orb is made from irian quartz. As a reaction while I am holding the orb and take radiant damage, I can reduce the damage by 1d4."
		},
		"kythrian skarn (acid or poison)" : {
			name : "Orb of Shielding [Kythrian Skarn]",
			description : "This stone orb is made from kythrian skarn. As a reaction while I am holding the orb and take acid or poison damage, I can reduce the damage by 1d4."
		},
		"lamannian flint (lightning or thunder)" : {
			name : "Orb of Shielding [Lamannian Flint]",
			description : "This stone orb is made from lamannian flint. As a reaction while I am holding the orb and take lightning or thunder damage, I can reduce the damage by 1d4."
		},
		"mabaran obsidian (necrotic)" : {
			name : "Orb of Shielding [Mabaran Obsidian]",
			description : "This crystal orb is made from mabaran obsidian. As a reaction while I am holding the orb and take necrotic damage, I can reduce the damage by 1d4."
		},
		"quori celestine (psychic)" : {
			name : "Orb of Shielding [Quori Celestine]",
			description : "This crystal orb is made from quori celestine. As a reaction while I am holding the orb and take psychic damage, I can reduce the damage by 1d4."
		},
		"risian shale (cold)" : {
			name : "Orb of Shielding [Risian Shale]",
			description : "This stone orb is made from risian shale. As a reaction while I am holding the orb and take cold damage, I can reduce the damage by 1d4."
		},
		"shavaran chert (force)" : {
			name : "Orb of Shielding [Shavaran Chert]",
			description : "This stone orb is made from shavaran chert. As a reaction while I am holding the orb and take force damage, I can reduce the damage by 1d4."
		},
		"xorian marble (psychic)" : {
			name : "Orb of Shielding [Xorian Marble]",
			description : "This stone orb is made from xorian marble. As a reaction while I am holding the orb and take psychic damage, I can reduce the damage by 1d4."
		}
	}
	MagicItemsList["band of loyalty"] = {
		name : "Band of Loyalty",
		source : [["WGtE", 115], ["UA:MIoE", 2]],
		type : "ring",
		rarity : "common",
		description : "If I'm reduced to zero hit points while attuned to this ring, I instantly die. These rings are favored by spies who can't afford to fall into enemy hands.",
		descriptionFull : "If you are reduced to zero hit points while attuned to a band of loyalty, you instantly die. These rings are favored by spies who can't afford to fall into enemy hands.",
		attunement : true
	}
	MagicItemsList["cleansing stone"] = {
		name : "Cleansing Stone",
		source : [["WGtE", 115], ["UA:MIoE", 2]],
		type : "wondrous item",
		rarity : "common",
		description : "This stone sphere is 1 ft in diameter and engraved with mystic sigils. As an action while touching it, I can activate it to remove dirt and grime from my garments and my person.",
		descriptionFull : "A cleansing stone is a stone sphere one foot in diameter, engraved with mystic sigils. When touching the stone, you can use an action to activate it and remove dirt and grime from your garments and your person. Cleansing stones are often embedded into pedestals in public squares in Aundair or found in high-end Ghallanda inns.",
		action : [["action", ""]]
	}
	MagicItemsList["everbright lantern"] = {
		name : "Everbright Lantern",
		source : [["WGtE", 115], ["UA:MIoE", 2]],
		type : "wondrous item",
		rarity : "common",
		description : "This bullseye lantern is powered by a dragonshard imbued with the effect of a Continual Flame spell. The light never goes out, but it can be shuttered off. It casts bright light in a 60-ft cone and dim light for an additional 60 ft.",
		descriptionFull : "An everbright lantern contains an Eberron dragonshard imbued with the effect of a continual flame spell. This bright light is mounted inside a normal bullseye lantern, allowing the light to be shuttered off. An everbright lantern provides clear illumination in a 60-foot cone and shadowy illumination in a 120-foot cone, just like a mundane bullseye lantern, but its flame never goes out."
	}
	MagicItemsList["feather token"] = {
		name : "Feather Token",
		source : [["WGtE", 115], ["UA:MIoE", 2]],
		type : "wondrous item",
		rarity : "common",
		description : "Once as a bonus action while the token is in my possession, I can use it to cast Feather Fall. This small metal disk is inscribed with the image of a feather and only holds sufficient charge for a single use, after which it loses its power.",
		descriptionFull : "This small metal disk is inscribed with the image of a feather. While the token is in your possession, you can cast feather fall as a bonus action. A feather token only holds sufficient charge for a single use, after which it loses its power. While it's an expensive form of insurance, frequent airship travelers and citizens of Sharn often appreciate the security it provides."
	}
	MagicItemsList["glamerweave"] = {
		name : "Glamerweave",
		source : [["WGtE", 115], ["UA:MIoE", 2]],
		type : "wondrous item",
		rarity : "common",
		description : "Glamerweave clothing is imbued with cosmetic illusions that have no impact on combat. Most of the time, these patterns are contained within the cloth, but higher-end glamerweave can have more dramatic effects. A gown could appear to be wreathed in flames, or a hat orbited by illusory butterflies.",
		descriptionFull : "Glamerweave clothing is imbued with cosmetic illusions. Traditionally, these patterns are contained within the cloth, but higher-end glamerweave can have more dramatic effects. You could have a gown that appears to be wreathed in flames, or a hat that's orbited by illusory butterflies. Regardless of the design, these are cosmetic effects and have no impact on combat.\n\n" + [
			toUni("1d8\tDescription"),
			"  1\tA hat orbited by the twelve moons",
			"  2\tLong gloves wreathed in cold flames",
			"  3\tA traveler’s cloak lined with glittering stars",
			"  4\tA scarlet gown that glows with inner radiance",
			"  5\tA cloth shirt that appears to be a chain shirt",
			"  6\tA silver gown surrounded by drifting snowflakes",
			"  7\tA robe with two dragons wrestling across the back",
			"  8\tA cloak that slowly and subtly shifts colors"
		].join("\n")
	}
	MagicItemsList["shiftweave"] = {
		name : "Shiftweave",
		source : [["WGtE", 115], ["UA:MIoE", 2]],
		type : "wondrous item",
		rarity : "common",
		description : "Up to five different outfits are embedded into these clothes that have transmutation magic woven into their fabric. As an action, I can speak a command word to transform the outfit into one of the other designs contained within.",
		descriptionFull : "Transmutation magic is woven into the fabric of shiftweave clothing. When a suit of shiftweave is created, up to five different outfits can be embedded into the cloth. By taking an action and uttering a command word, you can transform your shiftweave outfit into one of the other designs contained within it. To determine the price of a suit of shiftweave, combine the value of all of the outfits it contains and add 25 gp to that amount.",
		action : [["action", ""]]
	}
	MagicItemsList["spellshard"] = {
		name : "Spellshard",
		source : [["WGtE", 115], ["UA:MIoE", 3]],
		type : "wondrous item",
		description : "This dragonshard is imbued with a text. By concentrating while holding it, I can see its pages in my mind's eye and it will draw me to the right section if I think of a topic. I can add content to it with a simple ritual and can use it as a wizard's spellbook, costing 1 gp per \"page\" I add to the shard.",
		allowDuplicates : true,
		choices : ["normal", "advanced"],
		"normal" : {
			name : "Spellshard ",
			allowDuplicates : true,
			rarity : "common",
			description : "This dragonshard is imbued with a work of literature. By holding it and concentrating, I can see its pages in my mind's eye and it will draw me to the right section if I think of a topic. I can add content to it with a simple ritual and can use it as a wizard's spellbook, costing 1 gp per \"page\" I add to the shard.",
			descriptionLong : "This polished dragonshard fits into the palm of my hand. It is imbued with a particular work of literature. By holding it and concentrating, I can see its pages in my mind's eye. Thinking of a particular phrase or topic will draw me to the first section that addresses it. I can add content to it with a simple ritual, allowing me to use it as a wizard's spellbook costing 1 gp per \"page\" in the shard, but otherwise functions as a mundane spellbook. Spellshards can also be used as diaries or journals."
		},
		"advanced" : {
			name : "Advanced Spellshard",
			allowDuplicates : true,
			rarity : "uncommon",
			description : "This dragonshard is imbued with a text. By concentrating and speaking the passphrase, I can see its pages in my mind's eye and it will draw me to the right section if I think of a topic. I can add content to it with a simple ritual and can use it as a wizard's spellbook, costing 1 gp per \"page\" I add to the shard.",
			descriptionLong : "This polished dragonshard fits into the palm of my hand. It is imbued with a particular work of literature. By holding it, concentrating, and speaking its passphrase, I can see its pages in my mind's eye. Thinking of a particular phrase or topic will draw me to the first section that addresses it. I can add content to it with a simple ritual, allowing me to use it as a wizard's spellbook costing 1 gp per \"page\" in the shard, but otherwise functions as a mundane spellbook. Spellshards can also be used as diaries or journals."
		}
	}
	MagicItemsList["armblade"] = {
		name : "Armblade",
		source : [["WGtE", 120], ["UA:MIoE", 3]],
		type : "weapon (any one-handed melee weapon)",
		rarity : "common",
		description : "As a warforged, I can integrate this weapon in my forearm by attuning to it. While attached, it can't be disarmed or removed against my will, but I can't use that hand for other actions. I can spend one minute to end the attunement and remove the armblade. The weapon isn't inherently magical.",
		descriptionFull : "An armblade is a weapon designed to integrate with the forearm of a warforged. If you're a warforged, you can attach an armblade by attuning to it. An attached armblade cannot be disarmed or removed from you against your will, but while the weapon is attached you cannot use that hand for other actions. You can spend one minute to end the attunement and remove the armblade.\n   An armblade isn't inherently considered to be a magic weapon for purposes of overcoming damage resistance. However, any sort of magical melee weapon could be created as an armblade, so you could acquire a vicious armblade or a vorpal armblade.",
		attunement : true,
		prerequisite : "Requires attunement by a warforged",
		prereqeval : function (v) {
			return (/warforged/i).test(CurrentRace.known);
		},
		allowDuplicates : true,
		chooseGear : {
			type : "weapon",
			prefixOrSuffix : "brackets",
			descriptionChange : ["replace", "weapon"],
			excludeCheck : function (inObjKey, inObj) {
				return (!inObj.description || (/two.{0,3}handed/i).test(inObj.description)) || (!inObj.range || !(/melee/i).test(inObj.range));
			}
		}
	}
	MagicItemsList["wand sheath"] = {
		name : "Wand Sheath",
		source : [["WGtE", 115], ["UA:MIoE", 4]],
		type : "wondrous item",
		rarity : "common",
		description : "As a warforged, I can integrate this sheath in my forearm by attuning to it. It can only be removed if I spend a minute to end the attunement. As an action, I can insert a wand in it. The wand doesn't count to the number of items I can attune to. As a bonus action, I can then retract/extend it while keeping my hand free.",
		descriptionLong : "As a warforged, I can integrate this sheath in my forearm by attuning to it. It can only be removed if I spend a minute to end the attunement. As an action, I can insert a wand in it. I still need to attune to this wand if it requires me to do so, but the wand wand then doesn't count towards the number of items I can attune to. When I take the wand out of the sheath, I lose attunement with it. As a bonus action, I can retract or extend a wand in the sheath. While retracted, the wand can't be damaged. While extended, I can use the wand as if holding it, but my hand remains free for other actions.",
		descriptionFull : "A wand sheath is designed to integrate with the forearm of a warforged. If you're a warforged, you can attach a wand sheath by attuning to it. While the wand sheath is attached, it cannot be removed from you against your will. You can spend one minute to end the attunement and remove the wand sheath.\n   You can insert a wand into the sheath as an action. While the wand is sheathed, you gain the following benefits:\n \u2022 You can retract the wand into your forearm or extend it from your forearm as a bonus action. While it is retracted, it cannot be damaged or removed.\n \u2022 While the wand is extended, you can use it as if you were holding it, but your hand remains free for other actions.\n \u2022 If the sheathed wand requires attunement, you must attune to the wand before you can use it. However, the wand sheath and the attached wand only count as a single item for purposes of the maximum number of items you can be attuned to. If you remove the wand from the sheath, you immediately lose your attunement to the wand.",
		attunement : true,
		prerequisite : "Requires attunement by a warforged",
		prereqeval : function (v) {
			return (/warforged/i).test(CurrentRace.known);
		},
		action : [["action", " (insert)"], ["bonus action", " (extend/retract)"]]
	}
}
