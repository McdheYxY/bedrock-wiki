if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.13135c17.js",revision:null},{url:"assets/404.md.13135c17.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.b300ff75.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.b300ff75.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.9f16bc23.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.9f16bc23.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.612a35e1.js",revision:null},{url:"assets/animation-controllers_death-commands.md.612a35e1.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.f804cea7.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.f804cea7.lean.js",revision:null},{url:"assets/animation-controllers_index.md.4820808a.js",revision:null},{url:"assets/animation-controllers_index.md.4820808a.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.a827c7af.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.a827c7af.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.79b6576f.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.79b6576f.lean.js",revision:null},{url:"assets/app.f79c3849.js",revision:null},{url:"assets/blocks_applying-effects.md.1e07bb9a.js",revision:null},{url:"assets/blocks_applying-effects.md.1e07bb9a.lean.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.0e9b0b1a.js",revision:null},{url:"assets/blocks_avoiding-state-limit.md.0e9b0b1a.lean.js",revision:null},{url:"assets/blocks_block-components.md.a9d70fb6.js",revision:null},{url:"assets/blocks_block-components.md.a9d70fb6.lean.js",revision:null},{url:"assets/blocks_block-culling.md.af6c949d.js",revision:null},{url:"assets/blocks_block-culling.md.af6c949d.lean.js",revision:null},{url:"assets/blocks_block-events.md.f0a52392.js",revision:null},{url:"assets/blocks_block-events.md.f0a52392.lean.js",revision:null},{url:"assets/blocks_block-models.md.bc82962c.js",revision:null},{url:"assets/blocks_block-models.md.bc82962c.lean.js",revision:null},{url:"assets/blocks_block-permutations.md.7135bc08.js",revision:null},{url:"assets/blocks_block-permutations.md.7135bc08.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.116fd92a.js",revision:null},{url:"assets/blocks_block-shapes.md.116fd92a.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.e375b212.js",revision:null},{url:"assets/blocks_block-sounds.md.e375b212.lean.js",revision:null},{url:"assets/blocks_block-states.md.67e8dbaf.js",revision:null},{url:"assets/blocks_block-states.md.67e8dbaf.lean.js",revision:null},{url:"assets/blocks_block-tags.md.ec286eef.js",revision:null},{url:"assets/blocks_block-tags.md.ec286eef.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.13d1e695.js",revision:null},{url:"assets/blocks_block-texture-variation.md.13d1e695.lean.js",revision:null},{url:"assets/blocks_block-traits.md.01d6deaf.js",revision:null},{url:"assets/blocks_block-traits.md.01d6deaf.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.c93572c5.js",revision:null},{url:"assets/blocks_blocks-intro.md.c93572c5.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.1f9949b6.js",revision:null},{url:"assets/blocks_custom-crops.md.1f9949b6.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.75da8231.js",revision:null},{url:"assets/blocks_custom-fluids.md.75da8231.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.4be4be47.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.4be4be47.lean.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.79e6cbe4.js",revision:null},{url:"assets/blocks_custom-glazed-terracotta.md.79e6cbe4.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.9bd190b7.js",revision:null},{url:"assets/blocks_custom-slabs.md.9bd190b7.lean.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.aa3de2cd.js",revision:null},{url:"assets/blocks_custom-trapdoors.md.aa3de2cd.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.ce13bc1d.js",revision:null},{url:"assets/blocks_custom-trees.md.ce13bc1d.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.928e7f96.js",revision:null},{url:"assets/blocks_fake-blocks.md.928e7f96.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.925c9b9f.js",revision:null},{url:"assets/blocks_flipbook-textures.md.925c9b9f.lean.js",revision:null},{url:"assets/blocks_index.md.38d7f2ee.js",revision:null},{url:"assets/blocks_index.md.38d7f2ee.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.8cc04c98.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.8cc04c98.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.2618d812.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.2618d812.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.1e490d3a.js",revision:null},{url:"assets/blocks_precise-interaction.md.1e490d3a.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.0fd6626a.js",revision:null},{url:"assets/blocks_precise-rotation.md.0fd6626a.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.5326df1c.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.5326df1c.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.fe3716be.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.fe3716be.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/6.07d6a5aa.js",revision:null},{url:"assets/chunks/AlgoliaSearch.4a6b1fd2.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.cee6adb2.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-entities.md.fbb7d345.js",revision:null},{url:"assets/commands_block-entities.md.fbb7d345.lean.js",revision:null},{url:"assets/commands_block-states.md.821f40b5.js",revision:null},{url:"assets/commands_block-states.md.821f40b5.lean.js",revision:null},{url:"assets/commands_damage.md.8091ee91.js",revision:null},{url:"assets/commands_damage.md.8091ee91.lean.js",revision:null},{url:"assets/commands_entity-counter.md.edcc3722.js",revision:null},{url:"assets/commands_entity-counter.md.edcc3722.lean.js",revision:null},{url:"assets/commands_index.md.663c8710.js",revision:null},{url:"assets/commands_index.md.663c8710.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.3c104d8d.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.3c104d8d.lean.js",revision:null},{url:"assets/commands_logic-gates.md.5d167e7f.js",revision:null},{url:"assets/commands_logic-gates.md.5d167e7f.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.591c0b3f.js",revision:null},{url:"assets/commands_mcfunctions.md.591c0b3f.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.c046f40d.js",revision:null},{url:"assets/commands_nbt-commands.md.c046f40d.lean.js",revision:null},{url:"assets/commands_new-execute.md.6a213706.js",revision:null},{url:"assets/commands_new-execute.md.6a213706.lean.js",revision:null},{url:"assets/commands_on-first-join.md.4231e5cf.js",revision:null},{url:"assets/commands_on-first-join.md.4231e5cf.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.ed5f98a4.js",revision:null},{url:"assets/commands_on-first-world-load.md.ed5f98a4.lean.js",revision:null},{url:"assets/commands_on-player-death.md.f54118d0.js",revision:null},{url:"assets/commands_on-player-death.md.f54118d0.lean.js",revision:null},{url:"assets/commands_on-player-join.md.8029b185.js",revision:null},{url:"assets/commands_on-player-join.md.8029b185.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.d96d6672.js",revision:null},{url:"assets/commands_on-player-leave.md.d96d6672.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.2483ca88.js",revision:null},{url:"assets/commands_on-player-respawn.md.2483ca88.lean.js",revision:null},{url:"assets/commands_orbital-camera.md.3ab65c38.js",revision:null},{url:"assets/commands_orbital-camera.md.3ab65c38.lean.js",revision:null},{url:"assets/commands_playsound.md.71257ffe.js",revision:null},{url:"assets/commands_playsound.md.71257ffe.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.049ab560.js",revision:null},{url:"assets/commands_relative-coordinates.md.049ab560.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.fef6e14c.js",revision:null},{url:"assets/commands_scoreboard-operations.md.fef6e14c.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.b868b727.js",revision:null},{url:"assets/commands_scoreboard-timers.md.b868b727.lean.js",revision:null},{url:"assets/commands_selectors.md.3dffff7f.js",revision:null},{url:"assets/commands_selectors.md.3dffff7f.lean.js",revision:null},{url:"assets/commands_tellraw.md.020722c6.js",revision:null},{url:"assets/commands_tellraw.md.020722c6.lean.js",revision:null},{url:"assets/concepts_contents.md.44dda3b5.js",revision:null},{url:"assets/concepts_contents.md.44dda3b5.lean.js",revision:null},{url:"assets/concepts_emojis.md.1e82af67.js",revision:null},{url:"assets/concepts_emojis.md.1e82af67.lean.js",revision:null},{url:"assets/concepts_index.md.cf5680ba.js",revision:null},{url:"assets/concepts_index.md.cf5680ba.lean.js",revision:null},{url:"assets/concepts_molang.md.a2e06fb8.js",revision:null},{url:"assets/concepts_molang.md.a2e06fb8.lean.js",revision:null},{url:"assets/concepts_namespaces.md.cac1542b.js",revision:null},{url:"assets/concepts_namespaces.md.cac1542b.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.bc611cc8.js",revision:null},{url:"assets/concepts_overwriting-assets.md.bc611cc8.lean.js",revision:null},{url:"assets/concepts_shaders.md.1179a4c4.js",revision:null},{url:"assets/concepts_shaders.md.1179a4c4.lean.js",revision:null},{url:"assets/concepts_sounds.md.0a82dbc7.js",revision:null},{url:"assets/concepts_sounds.md.0a82dbc7.lean.js",revision:null},{url:"assets/concepts_subpacks.md.38f28bbc.js",revision:null},{url:"assets/concepts_subpacks.md.38f28bbc.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.789534bf.js",revision:null},{url:"assets/concepts_text-and-translations.md.789534bf.lean.js",revision:null},{url:"assets/concepts_textures-list.md.561c1b09.js",revision:null},{url:"assets/concepts_textures-list.md.561c1b09.lean.js",revision:null},{url:"assets/contribute-how-to.md.ccf21cce.js",revision:null},{url:"assets/contribute-how-to.md.ccf21cce.lean.js",revision:null},{url:"assets/contribute-style.md.73d41611.js",revision:null},{url:"assets/contribute-style.md.73d41611.lean.js",revision:null},{url:"assets/contribute.md.48b49fb2.js",revision:null},{url:"assets/contribute.md.48b49fb2.lean.js",revision:null},{url:"assets/discord.md.4122fcfa.js",revision:null},{url:"assets/discord.md.4122fcfa.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.a53f5231.js",revision:null},{url:"assets/documentation_advanced-molang.md.a53f5231.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.f0d39cec.js",revision:null},{url:"assets/documentation_creative-categories.md.f0d39cec.lean.js",revision:null},{url:"assets/documentation_file-types.md.76035ab3.js",revision:null},{url:"assets/documentation_file-types.md.76035ab3.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.5bf29509.js",revision:null},{url:"assets/documentation_fog-ids.md.5bf29509.lean.js",revision:null},{url:"assets/documentation_index.md.c053cb3e.js",revision:null},{url:"assets/documentation_index.md.c053cb3e.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.a1449747.js",revision:null},{url:"assets/documentation_material-config-description.md.a1449747.lean.js",revision:null},{url:"assets/documentation_materials.md.373ab15e.js",revision:null},{url:"assets/documentation_materials.md.373ab15e.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.92265a8e.js",revision:null},{url:"assets/documentation_pack-structure.md.92265a8e.lean.js",revision:null},{url:"assets/documentation_projectiles.md.1536d78f.js",revision:null},{url:"assets/documentation_projectiles.md.1536d78f.lean.js",revision:null},{url:"assets/documentation_queries.md.4a7e3435.js",revision:null},{url:"assets/documentation_queries.md.4a7e3435.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.74d47ecd.js",revision:null},{url:"assets/documentation_shared-constructs.md.74d47ecd.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.3e28aac0.js",revision:null},{url:"assets/documentation_sound-definitions.md.3e28aac0.lean.js",revision:null},{url:"assets/entities_boat-entities.md.1f9f7da5.js",revision:null},{url:"assets/entities_boat-entities.md.1f9f7da5.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.e9b67e37.js",revision:null},{url:"assets/entities_detecting-other-entities.md.e9b67e37.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.eeef8d3c.js",revision:null},{url:"assets/entities_disabling-team-damage.md.eeef8d3c.lean.js",revision:null},{url:"assets/entities_dummy-components.md.40aac650.js",revision:null},{url:"assets/entities_dummy-components.md.40aac650.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.2a12a737.js",revision:null},{url:"assets/entities_dummy-entities.md.2a12a737.lean.js",revision:null},{url:"assets/entities_entity-attack.md.643fcca0.js",revision:null},{url:"assets/entities_entity-attack.md.643fcca0.lean.js",revision:null},{url:"assets/entities_entity-events.md.48d07a4e.js",revision:null},{url:"assets/entities_entity-events.md.48d07a4e.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.a948cf4d.js",revision:null},{url:"assets/entities_entity-holds-item.md.a948cf4d.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.33774251.js",revision:null},{url:"assets/entities_entity-intro-bp.md.33774251.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.8e616257.js",revision:null},{url:"assets/entities_entity-intro-rp.md.8e616257.lean.js",revision:null},{url:"assets/entities_entity-movement.md.5e1359c9.js",revision:null},{url:"assets/entities_entity-movement.md.5e1359c9.lean.js",revision:null},{url:"assets/entities_entity-properties.md.a1a9ee1c.js",revision:null},{url:"assets/entities_entity-properties.md.a1a9ee1c.lean.js",revision:null},{url:"assets/entities_entity-transforms.md.e906c7e6.js",revision:null},{url:"assets/entities_entity-transforms.md.e906c7e6.lean.js",revision:null},{url:"assets/entities_flying-entities.md.adc96212.js",revision:null},{url:"assets/entities_flying-entities.md.adc96212.lean.js",revision:null},{url:"assets/entities_index.md.2d319c7a.js",revision:null},{url:"assets/entities_index.md.2d319c7a.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.dd54d95f.js",revision:null},{url:"assets/entities_introduction-to-aec.md.dd54d95f.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1b45687c.js",revision:null},{url:"assets/entities_invulnerable-entities.md.1b45687c.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.c385a05c.js",revision:null},{url:"assets/entities_look-at-entity.md.c385a05c.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.00599b1c.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.00599b1c.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.d488166f.js",revision:null},{url:"assets/entities_npc-dialogs.md.d488166f.lean.js",revision:null},{url:"assets/entities_render-controllers.md.77de3ddb.js",revision:null},{url:"assets/entities_render-controllers.md.77de3ddb.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.9a37de57.js",revision:null},{url:"assets/entities_runtime-identifier.md.9a37de57.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.23c15394.js",revision:null},{url:"assets/entities_sleeping-entities.md.23c15394.lean.js",revision:null},{url:"assets/entities_solid-entities.md.b2f6da74.js",revision:null},{url:"assets/entities_solid-entities.md.b2f6da74.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.cb52e78a.js",revision:null},{url:"assets/entities_spawn-rules.md.cb52e78a.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.f190f257.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.f190f257.lean.js",revision:null},{url:"assets/entities_timers.md.deafc802.js",revision:null},{url:"assets/entities_timers.md.deafc802.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.7a237180.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.7a237180.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.bcf979ee.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.bcf979ee.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.9cd90c42.js",revision:null},{url:"assets/entities_village-mechanic.md.9cd90c42.lean.js",revision:null},{url:"assets/entities_vuc-full.md.4a527d0f.lean.js",revision:null},{url:"assets/entities_vusr-full.md.b2fe6d03.js",revision:null},{url:"assets/entities_vusr-full.md.b2fe6d03.lean.js",revision:null},{url:"assets/graph-test.md.8d50354d.js",revision:null},{url:"assets/graph-test.md.8d50354d.lean.js",revision:null},{url:"assets/guide_addons.md.d643f319.js",revision:null},{url:"assets/guide_addons.md.d643f319.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.d17750d0.js",revision:null},{url:"assets/guide_advancedmanifest.md.d17750d0.lean.js",revision:null},{url:"assets/guide_blockbench.md.d2554027.js",revision:null},{url:"assets/guide_blockbench.md.d2554027.lean.js",revision:null},{url:"assets/guide_custom-entity.md.21d05374.js",revision:null},{url:"assets/guide_custom-entity.md.21d05374.lean.js",revision:null},{url:"assets/guide_custom-item.md.baaac646.js",revision:null},{url:"assets/guide_custom-item.md.baaac646.lean.js",revision:null},{url:"assets/guide_download-packs.md.8b7b6a4a.js",revision:null},{url:"assets/guide_download-packs.md.8b7b6a4a.lean.js",revision:null},{url:"assets/guide_format-version.md.881b131f.js",revision:null},{url:"assets/guide_format-version.md.881b131f.lean.js",revision:null},{url:"assets/guide_index.md.516a5366.js",revision:null},{url:"assets/guide_index.md.516a5366.lean.js",revision:null},{url:"assets/guide_introduction.md.9226868f.js",revision:null},{url:"assets/guide_introduction.md.9226868f.lean.js",revision:null},{url:"assets/guide_loot-table.md.56240eef.js",revision:null},{url:"assets/guide_loot-table.md.56240eef.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.a8cdfc3a.js",revision:null},{url:"assets/guide_project-setup-android.md.a8cdfc3a.lean.js",revision:null},{url:"assets/guide_project-setup.md.9a126311.js",revision:null},{url:"assets/guide_project-setup.md.9a126311.lean.js",revision:null},{url:"assets/guide_software-preparation.md.8f928af2.js",revision:null},{url:"assets/guide_software-preparation.md.8f928af2.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.a9b35ae1.js",revision:null},{url:"assets/guide_troubleshooting.md.a9b35ae1.lean.js",revision:null},{url:"assets/guide_understanding-json.md.119c92db.js",revision:null},{url:"assets/guide_understanding-json.md.119c92db.lean.js",revision:null},{url:"assets/hacktoberfest.md.ecb486ed.js",revision:null},{url:"assets/hacktoberfest.md.ecb486ed.lean.js",revision:null},{url:"assets/index.md.ec51c2dc.js",revision:null},{url:"assets/index.md.ec51c2dc.lean.js",revision:null},{url:"assets/items_attachables.md.eba95354.js",revision:null},{url:"assets/items_attachables.md.eba95354.lean.js",revision:null},{url:"assets/items_custom-armor.md.4cf079f2.js",revision:null},{url:"assets/items_custom-armor.md.4cf079f2.lean.js",revision:null},{url:"assets/items_custom-weapon.md.e4e8e2ec.js",revision:null},{url:"assets/items_custom-weapon.md.e4e8e2ec.lean.js",revision:null},{url:"assets/items_enchantments.md.cff94c7f.js",revision:null},{url:"assets/items_enchantments.md.cff94c7f.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.a445d18c.js",revision:null},{url:"assets/items_equipped-item-commands.md.a445d18c.lean.js",revision:null},{url:"assets/items_high-resolution-items.md.9ea168be.js",revision:null},{url:"assets/items_high-resolution-items.md.9ea168be.lean.js",revision:null},{url:"assets/items_index.md.a0a61da3.js",revision:null},{url:"assets/items_index.md.a0a61da3.lean.js",revision:null},{url:"assets/items_item-components.md.2f4a40ec.js",revision:null},{url:"assets/items_item-components.md.2f4a40ec.lean.js",revision:null},{url:"assets/items_item-identifiers.md.30cfd00d.js",revision:null},{url:"assets/items_item-identifiers.md.30cfd00d.lean.js",revision:null},{url:"assets/items_item-tags.md.c8d5741b.js",revision:null},{url:"assets/items_item-tags.md.c8d5741b.lean.js",revision:null},{url:"assets/items_items-intro.md.82793ad1.js",revision:null},{url:"assets/items_items-intro.md.82793ad1.lean.js",revision:null},{url:"assets/items_numerical-item-ids.md.9e2af877.js",revision:null},{url:"assets/items_numerical-item-ids.md.9e2af877.lean.js",revision:null},{url:"assets/items_spawning-items.md.f45bcfa1.js",revision:null},{url:"assets/items_spawning-items.md.f45bcfa1.lean.js",revision:null},{url:"assets/items_spear.md.76156728.js",revision:null},{url:"assets/items_spear.md.76156728.lean.js",revision:null},{url:"assets/items_throwable.md.457501a0.js",revision:null},{url:"assets/items_throwable.md.457501a0.lean.js",revision:null},{url:"assets/items_tool-durability.md.63fe93b0.js",revision:null},{url:"assets/items_tool-durability.md.63fe93b0.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.0f8367bf.js",revision:null},{url:"assets/items_troubleshooting-items.md.0f8367bf.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.e997eb04.js",revision:null},{url:"assets/items_vanilla-usage-items.md.e997eb04.lean.js",revision:null},{url:"assets/items_vui-full.md.b3e535fa.js",revision:null},{url:"assets/items_vui-full.md.b3e535fa.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.315dfae8.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.315dfae8.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.303edff3.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.303edff3.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.99c4d3f3.js",revision:null},{url:"assets/json-ui_best-practices.md.99c4d3f3.lean.js",revision:null},{url:"assets/json-ui_custom-buttons.md.b31fba5a.js",revision:null},{url:"assets/json-ui_custom-buttons.md.b31fba5a.lean.js",revision:null},{url:"assets/json-ui_index.md.8c5d653c.js",revision:null},{url:"assets/json-ui_index.md.8c5d653c.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.2f37cfc7.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.2f37cfc7.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.faa79de2.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.faa79de2.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.4ab5138b.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.4ab5138b.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.3be89c4d.js",revision:null},{url:"assets/json-ui_string-to-number.md.3be89c4d.lean.js",revision:null},{url:"assets/loot_index.md.dd7d8707.js",revision:null},{url:"assets/loot_index.md.dd7d8707.lean.js",revision:null},{url:"assets/loot_item-functions.md.ea808f75.js",revision:null},{url:"assets/loot_item-functions.md.ea808f75.lean.js",revision:null},{url:"assets/loot_loot-tables.md.2120310a.js",revision:null},{url:"assets/loot_loot-tables.md.2120310a.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.708689fe.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.708689fe.lean.js",revision:null},{url:"assets/loot_recipes.md.f2904dbe.js",revision:null},{url:"assets/loot_recipes.md.f2904dbe.lean.js",revision:null},{url:"assets/loot_trade-tables.md.9618e589.js",revision:null},{url:"assets/loot_trade-tables.md.9618e589.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.42324e03.js",revision:null},{url:"assets/loot_trading-behavior.md.42324e03.lean.js",revision:null},{url:"assets/meta_addon-performance.md.6212d8ca.js",revision:null},{url:"assets/meta_addon-performance.md.6212d8ca.lean.js",revision:null},{url:"assets/meta_index.md.9f5c9cff.js",revision:null},{url:"assets/meta_index.md.9f5c9cff.lean.js",revision:null},{url:"assets/meta_jq.md.a8629644.js",revision:null},{url:"assets/meta_jq.md.a8629644.lean.js",revision:null},{url:"assets/meta_style-guide.md.42e8df26.js",revision:null},{url:"assets/meta_style-guide.md.42e8df26.lean.js",revision:null},{url:"assets/meta_useful-links.md.d0e44415.js",revision:null},{url:"assets/meta_useful-links.md.d0e44415.lean.js",revision:null},{url:"assets/meta_using-schemas.md.fab4111d.js",revision:null},{url:"assets/meta_using-schemas.md.fab4111d.lean.js",revision:null},{url:"assets/meta_version-control.md.4ffb6c25.js",revision:null},{url:"assets/meta_version-control.md.4ffb6c25.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.b2a13e74.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.b2a13e74.lean.js",revision:null},{url:"assets/nbt_index.md.4ada365c.js",revision:null},{url:"assets/nbt_index.md.4ada365c.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.7bf2d203.js",revision:null},{url:"assets/nbt_mcstructure.md.7bf2d203.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.b91d968a.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.b91d968a.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.b535960a.js",revision:null},{url:"assets/nbt_step-by-step-example.md.b535960a.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.525de75e.js",revision:null},{url:"assets/nbt_structure-limits.md.525de75e.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.86945b3a.js",revision:null},{url:"assets/particles_disabling-particles.md.86945b3a.lean.js",revision:null},{url:"assets/particles_index.md.b9f3f8f7.js",revision:null},{url:"assets/particles_index.md.b9f3f8f7.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.6dde81e9.js",revision:null},{url:"assets/particles_particles-and-sounds.md.6dde81e9.lean.js",revision:null},{url:"assets/particles_particles.md.dcebe4ba.js",revision:null},{url:"assets/particles_particles.md.dcebe4ba.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.5e400e6a.js",revision:null},{url:"assets/particles_vanilla-particles.md.5e400e6a.lean.js",revision:null},{url:"assets/privacy.md.ca425d6b.js",revision:null},{url:"assets/privacy.md.ca425d6b.lean.js",revision:null},{url:"assets/scripting_api-environment.md.c86d4d29.js",revision:null},{url:"assets/scripting_api-environment.md.c86d4d29.lean.js",revision:null},{url:"assets/scripting_custom-command.md.9e3361a7.js",revision:null},{url:"assets/scripting_custom-command.md.9e3361a7.lean.js",revision:null},{url:"assets/scripting_game-tests.md.c86d3e40.js",revision:null},{url:"assets/scripting_game-tests.md.c86d3e40.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.8454af32.js",revision:null},{url:"assets/scripting_gametest-form.md.8454af32.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.771b35db.js",revision:null},{url:"assets/scripting_gametest-qna.md.771b35db.lean.js",revision:null},{url:"assets/scripting_index.md.156a118e.js",revision:null},{url:"assets/scripting_index.md.156a118e.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.29249859.js",revision:null},{url:"assets/scripting_placement-prevention.md.29249859.lean.js",revision:null},{url:"assets/scripting_resources.md.0941bbdd.js",revision:null},{url:"assets/scripting_resources.md.0941bbdd.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.1b214cd6.js",revision:null},{url:"assets/scripting_saving-loading.md.1b214cd6.lean.js",revision:null},{url:"assets/scripting_script-modules.md.19b6ded4.js",revision:null},{url:"assets/scripting_script-modules.md.19b6ded4.lean.js",revision:null},{url:"assets/scripting_script-net.md.ae867c48.js",revision:null},{url:"assets/scripting_script-net.md.ae867c48.lean.js",revision:null},{url:"assets/scripting_script-server.md.233b4f8d.js",revision:null},{url:"assets/scripting_script-server.md.233b4f8d.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.e4dd88ba.js",revision:null},{url:"assets/scripting_script-watchdog.md.e4dd88ba.lean.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.d78dc223.js",revision:null},{url:"assets/scripting_scripting-editor-qna.md.d78dc223.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.32e24472.js",revision:null},{url:"assets/scripting_scripting-intro.md.32e24472.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.d2ef5ded.js",revision:null},{url:"assets/scripting_starting-scripts.md.d2ef5ded.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.7545e957.js",revision:null},{url:"assets/scripting_troubleshooting.md.7545e957.lean.js",revision:null},{url:"assets/scripting_typescript.md.9109a2bb.js",revision:null},{url:"assets/scripting_typescript.md.9109a2bb.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.645f2cb5.js",revision:null},{url:"assets/scripting_what-is-script.md.645f2cb5.lean.js",revision:null},{url:"assets/servers_index.md.f60712af.js",revision:null},{url:"assets/servers_index.md.f60712af.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.110ca824.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.110ca824.lean.js",revision:null},{url:"assets/servers_server-software.md.906d1362.js",revision:null},{url:"assets/servers_server-software.md.906d1362.lean.js",revision:null},{url:"assets/style.4753e9c0.css",revision:null},{url:"assets/test.md.01397378.js",revision:null},{url:"assets/test.md.01397378.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.2b12aa22.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.2b12aa22.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.1612005d.js",revision:null},{url:"assets/visuals_animation-effects.md.1612005d.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.de28e743.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.de28e743.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.a464d9aa.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.a464d9aa.lean.js",revision:null},{url:"assets/visuals_death-animations.md.e417a1d7.js",revision:null},{url:"assets/visuals_death-animations.md.e417a1d7.lean.js",revision:null},{url:"assets/visuals_deferred-qna.md.b8c947c9.js",revision:null},{url:"assets/visuals_deferred-qna.md.b8c947c9.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.a8ad04a1.js",revision:null},{url:"assets/visuals_glowing-texture.md.a8ad04a1.lean.js",revision:null},{url:"assets/visuals_index.md.7822c1c6.js",revision:null},{url:"assets/visuals_index.md.7822c1c6.lean.js",revision:null},{url:"assets/visuals_introduction.md.3a49928b.js",revision:null},{url:"assets/visuals_introduction.md.3a49928b.lean.js",revision:null},{url:"assets/visuals_leash-position.md.4a42d567.js",revision:null},{url:"assets/visuals_leash-position.md.4a42d567.lean.js",revision:null},{url:"assets/visuals_material-creations.md.f5fbce02.js",revision:null},{url:"assets/visuals_material-creations.md.f5fbce02.lean.js",revision:null},{url:"assets/visuals_materials.md.54392098.js",revision:null},{url:"assets/visuals_materials.md.54392098.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.f3957e74.js",revision:null},{url:"assets/visuals_math-based-animations.md.f3957e74.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.607c2b54.js",revision:null},{url:"assets/visuals_player-geometry.md.607c2b54.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.d3614715.js",revision:null},{url:"assets/visuals_remove-shadows.md.d3614715.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.863a2c1e.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.863a2c1e.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.1ffa3d14.js",revision:null},{url:"assets/visuals_structure-presentation.md.1ffa3d14.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.78ff37f2.js",revision:null},{url:"assets/vr_editing-your-first-model.md.78ff37f2.lean.js",revision:null},{url:"assets/vr_index.md.eb250743.js",revision:null},{url:"assets/vr_index.md.eb250743.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.f9e276ac.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.f9e276ac.lean.js",revision:null},{url:"assets/vr_pack_setup.md.61553d18.js",revision:null},{url:"assets/vr_pack_setup.md.61553d18.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.58de02a5.js",revision:null},{url:"assets/world-generation_biome-tags.md.58de02a5.lean.js",revision:null},{url:"assets/world-generation_biomes.md.675cb83a.js",revision:null},{url:"assets/world-generation_biomes.md.675cb83a.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.ce4cd4f8.js",revision:null},{url:"assets/world-generation_custom-ores.md.ce4cd4f8.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.8a0dcaff.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.8a0dcaff.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.2f488f9c.js",revision:null},{url:"assets/world-generation_feature-types.md.2f488f9c.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.04838237.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.04838237.lean.js",revision:null},{url:"assets/world-generation_index.md.48b4c5ae.js",revision:null},{url:"assets/world-generation_index.md.48b4c5ae.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.65c75511.js",revision:null},{url:"assets/world-generation_structure-features.md.65c75511.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.5084c116.js",revision:null},{url:"assets/world-generation_surface-builder.md.5084c116.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.b3414ca8.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.b3414ca8.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
