if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.3f1f215e.js",revision:null},{url:"assets/404.md.3f1f215e.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.de4d3683.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.de4d3683.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.0a4f807a.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.0a4f807a.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.45bcb897.js",revision:null},{url:"assets/animation-controllers_death-commands.md.45bcb897.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.0fc43a9e.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.0fc43a9e.lean.js",revision:null},{url:"assets/animation-controllers_index.md.a10b74f0.js",revision:null},{url:"assets/animation-controllers_index.md.a10b74f0.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.61312f3e.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.61312f3e.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.8c037f9e.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.8c037f9e.lean.js",revision:null},{url:"assets/app.c9e905db.js",revision:null},{url:"assets/blocks_applying-effects.md.31d52e41.js",revision:null},{url:"assets/blocks_applying-effects.md.31d52e41.lean.js",revision:null},{url:"assets/blocks_block-materials.md.37446042.js",revision:null},{url:"assets/blocks_block-materials.md.37446042.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.08abe922.js",revision:null},{url:"assets/blocks_block-shapes.md.08abe922.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.e9b03d45.js",revision:null},{url:"assets/blocks_block-sounds.md.e9b03d45.lean.js",revision:null},{url:"assets/blocks_block-tags.md.31c08a81.js",revision:null},{url:"assets/blocks_block-tags.md.31c08a81.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.f147f7e7.js",revision:null},{url:"assets/blocks_block-texture-variation.md.f147f7e7.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.0b3bb8ba.js",revision:null},{url:"assets/blocks_blocks-experimental.md.0b3bb8ba.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.25ad1407.js",revision:null},{url:"assets/blocks_blocks-intro.md.25ad1407.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.55dbf5a6.js",revision:null},{url:"assets/blocks_blocks-stable.md.55dbf5a6.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.9c667004.js",revision:null},{url:"assets/blocks_custom-crops.md.9c667004.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.d98005d9.js",revision:null},{url:"assets/blocks_custom-fluids.md.d98005d9.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.7ea599e7.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.7ea599e7.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.a4b88c95.js",revision:null},{url:"assets/blocks_custom-trees.md.a4b88c95.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.49f0f035.js",revision:null},{url:"assets/blocks_fake-blocks.md.49f0f035.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.dc56d65a.js",revision:null},{url:"assets/blocks_flipbook-textures.md.dc56d65a.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.416b3cce.js",revision:null},{url:"assets/blocks_head-like-rotation.md.416b3cce.lean.js",revision:null},{url:"assets/blocks_index.md.027460f7.js",revision:null},{url:"assets/blocks_index.md.027460f7.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.969ec774.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.969ec774.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.014ea31e.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.014ea31e.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.90ae1324.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.90ae1324.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.4398eee1.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.4398eee1.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.914c47c1.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.6e9b758a.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.153ccba9.js",revision:null},{url:"assets/commands_block-states.md.153ccba9.lean.js",revision:null},{url:"assets/commands_damage.md.f1907c68.js",revision:null},{url:"assets/commands_damage.md.f1907c68.lean.js",revision:null},{url:"assets/commands_entity-counter.md.1920f9a5.js",revision:null},{url:"assets/commands_entity-counter.md.1920f9a5.lean.js",revision:null},{url:"assets/commands_index.md.10e86e99.js",revision:null},{url:"assets/commands_index.md.10e86e99.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.a06f60a9.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.a06f60a9.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.2243ded7.js",revision:null},{url:"assets/commands_mcfunctions.md.2243ded7.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.e07fc33a.js",revision:null},{url:"assets/commands_nbt-commands.md.e07fc33a.lean.js",revision:null},{url:"assets/commands_new-execute.md.25e24871.js",revision:null},{url:"assets/commands_new-execute.md.25e24871.lean.js",revision:null},{url:"assets/commands_on-first-join.md.39a110f7.js",revision:null},{url:"assets/commands_on-first-join.md.39a110f7.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.85eb3b4d.js",revision:null},{url:"assets/commands_on-first-world-load.md.85eb3b4d.lean.js",revision:null},{url:"assets/commands_on-player-death.md.6b973850.js",revision:null},{url:"assets/commands_on-player-death.md.6b973850.lean.js",revision:null},{url:"assets/commands_on-player-join.md.0cb30613.js",revision:null},{url:"assets/commands_on-player-join.md.0cb30613.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.98dd3d38.js",revision:null},{url:"assets/commands_on-player-leave.md.98dd3d38.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.6675e093.js",revision:null},{url:"assets/commands_on-player-respawn.md.6675e093.lean.js",revision:null},{url:"assets/commands_playsound.md.c1dc6681.js",revision:null},{url:"assets/commands_playsound.md.c1dc6681.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.62866263.js",revision:null},{url:"assets/commands_relative-coordinates.md.62866263.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.4a36977c.js",revision:null},{url:"assets/commands_scoreboard-operations.md.4a36977c.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.de60efe3.js",revision:null},{url:"assets/commands_scoreboard-timers.md.de60efe3.lean.js",revision:null},{url:"assets/commands_selectors.md.0da8d991.js",revision:null},{url:"assets/commands_selectors.md.0da8d991.lean.js",revision:null},{url:"assets/commands_tellraw.md.22e468bb.js",revision:null},{url:"assets/commands_tellraw.md.22e468bb.lean.js",revision:null},{url:"assets/concepts_contents.md.4a16fdff.js",revision:null},{url:"assets/concepts_contents.md.4a16fdff.lean.js",revision:null},{url:"assets/concepts_emojis.md.16656ed0.js",revision:null},{url:"assets/concepts_emojis.md.16656ed0.lean.js",revision:null},{url:"assets/concepts_index.md.ce4dfbe1.js",revision:null},{url:"assets/concepts_index.md.ce4dfbe1.lean.js",revision:null},{url:"assets/concepts_molang.md.ad8d565c.js",revision:null},{url:"assets/concepts_molang.md.ad8d565c.lean.js",revision:null},{url:"assets/concepts_namespaces.md.87a644ab.js",revision:null},{url:"assets/concepts_namespaces.md.87a644ab.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.067990f3.js",revision:null},{url:"assets/concepts_overwriting-assets.md.067990f3.lean.js",revision:null},{url:"assets/concepts_shaders.md.05df29b1.js",revision:null},{url:"assets/concepts_shaders.md.05df29b1.lean.js",revision:null},{url:"assets/concepts_sounds.md.a74fc4a9.js",revision:null},{url:"assets/concepts_sounds.md.a74fc4a9.lean.js",revision:null},{url:"assets/concepts_subpacks.md.3435ef20.js",revision:null},{url:"assets/concepts_subpacks.md.3435ef20.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.54b5b37a.js",revision:null},{url:"assets/concepts_text-and-translations.md.54b5b37a.lean.js",revision:null},{url:"assets/concepts_textures-list.md.841fa26c.js",revision:null},{url:"assets/concepts_textures-list.md.841fa26c.lean.js",revision:null},{url:"assets/contribute-how-to.md.f28ef816.js",revision:null},{url:"assets/contribute-how-to.md.f28ef816.lean.js",revision:null},{url:"assets/contribute-style.md.669768c2.js",revision:null},{url:"assets/contribute-style.md.669768c2.lean.js",revision:null},{url:"assets/contribute.md.6977c1bf.js",revision:null},{url:"assets/contribute.md.6977c1bf.lean.js",revision:null},{url:"assets/discord.md.f77cacff.js",revision:null},{url:"assets/discord.md.f77cacff.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.8727c531.js",revision:null},{url:"assets/documentation_advanced-molang.md.8727c531.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.04932d44.js",revision:null},{url:"assets/documentation_creative-categories.md.04932d44.lean.js",revision:null},{url:"assets/documentation_file-types.md.0561c8a3.js",revision:null},{url:"assets/documentation_file-types.md.0561c8a3.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.ffa58869.js",revision:null},{url:"assets/documentation_fog-ids.md.ffa58869.lean.js",revision:null},{url:"assets/documentation_index.md.6b757ce3.js",revision:null},{url:"assets/documentation_index.md.6b757ce3.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.58434741.js",revision:null},{url:"assets/documentation_material-config-description.md.58434741.lean.js",revision:null},{url:"assets/documentation_materials.md.0716842e.js",revision:null},{url:"assets/documentation_materials.md.0716842e.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.0d5383df.js",revision:null},{url:"assets/documentation_pack-structure.md.0d5383df.lean.js",revision:null},{url:"assets/documentation_projectiles.md.53daa5df.js",revision:null},{url:"assets/documentation_projectiles.md.53daa5df.lean.js",revision:null},{url:"assets/documentation_queries.md.10251884.js",revision:null},{url:"assets/documentation_queries.md.10251884.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.09da49ad.js",revision:null},{url:"assets/documentation_shared-constructs.md.09da49ad.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.d2c8a737.js",revision:null},{url:"assets/documentation_sound-definitions.md.d2c8a737.lean.js",revision:null},{url:"assets/entities_boat-entities.md.8bd2a3fc.js",revision:null},{url:"assets/entities_boat-entities.md.8bd2a3fc.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.3eb95f01.js",revision:null},{url:"assets/entities_detecting-other-entities.md.3eb95f01.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.6b11cb8d.js",revision:null},{url:"assets/entities_disabling-team-damage.md.6b11cb8d.lean.js",revision:null},{url:"assets/entities_dummy-components.md.e0c5b562.js",revision:null},{url:"assets/entities_dummy-components.md.e0c5b562.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.55bdd908.js",revision:null},{url:"assets/entities_dummy-entities.md.55bdd908.lean.js",revision:null},{url:"assets/entities_entity-attack.md.51509f9b.js",revision:null},{url:"assets/entities_entity-attack.md.51509f9b.lean.js",revision:null},{url:"assets/entities_entity-events.md.566b2034.js",revision:null},{url:"assets/entities_entity-events.md.566b2034.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.316d0fbd.js",revision:null},{url:"assets/entities_entity-holds-item.md.316d0fbd.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.9ae5394e.js",revision:null},{url:"assets/entities_entity-intro-bp.md.9ae5394e.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.56e5ce31.js",revision:null},{url:"assets/entities_entity-intro-rp.md.56e5ce31.lean.js",revision:null},{url:"assets/entities_entity-movement.md.bde24845.js",revision:null},{url:"assets/entities_entity-movement.md.bde24845.lean.js",revision:null},{url:"assets/entities_entity-properties.md.2c5d88a4.js",revision:null},{url:"assets/entities_entity-properties.md.2c5d88a4.lean.js",revision:null},{url:"assets/entities_flying-entities.md.be910bd3.js",revision:null},{url:"assets/entities_flying-entities.md.be910bd3.lean.js",revision:null},{url:"assets/entities_index.md.6f79ff00.js",revision:null},{url:"assets/entities_index.md.6f79ff00.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.ac5a716f.js",revision:null},{url:"assets/entities_introduction-to-aec.md.ac5a716f.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.f7d5a176.js",revision:null},{url:"assets/entities_invulnerable-entities.md.f7d5a176.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.bf5d2168.js",revision:null},{url:"assets/entities_look-at-entity.md.bf5d2168.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.49b0fc59.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.49b0fc59.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.deebcfef.js",revision:null},{url:"assets/entities_npc-dialogs.md.deebcfef.lean.js",revision:null},{url:"assets/entities_render-controllers.md.294e94c0.js",revision:null},{url:"assets/entities_render-controllers.md.294e94c0.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.11476d3f.js",revision:null},{url:"assets/entities_runtime-identifier.md.11476d3f.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.0e742380.js",revision:null},{url:"assets/entities_sleeping-entities.md.0e742380.lean.js",revision:null},{url:"assets/entities_solid-entities.md.ad64d11d.js",revision:null},{url:"assets/entities_solid-entities.md.ad64d11d.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.27d56cb5.js",revision:null},{url:"assets/entities_spawn-rules.md.27d56cb5.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.29cbcc82.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.29cbcc82.lean.js",revision:null},{url:"assets/entities_timers.md.2b4eab93.js",revision:null},{url:"assets/entities_timers.md.2b4eab93.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.81090bc3.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.81090bc3.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.48a5ac8b.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.48a5ac8b.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.c168e833.js",revision:null},{url:"assets/entities_village-mechanic.md.c168e833.lean.js",revision:null},{url:"assets/entities_vuc-full.md.f988afce.lean.js",revision:null},{url:"assets/entities_vusr-full.md.8b6b35a9.js",revision:null},{url:"assets/entities_vusr-full.md.8b6b35a9.lean.js",revision:null},{url:"assets/graph-test.md.953c63ed.js",revision:null},{url:"assets/graph-test.md.953c63ed.lean.js",revision:null},{url:"assets/guide_addons.md.f941b92d.js",revision:null},{url:"assets/guide_addons.md.f941b92d.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.02419408.js",revision:null},{url:"assets/guide_advancedmanifest.md.02419408.lean.js",revision:null},{url:"assets/guide_blockbench.md.0c959345.js",revision:null},{url:"assets/guide_blockbench.md.0c959345.lean.js",revision:null},{url:"assets/guide_custom-entity.md.a242c3ff.js",revision:null},{url:"assets/guide_custom-entity.md.a242c3ff.lean.js",revision:null},{url:"assets/guide_custom-item.md.6aeb281e.js",revision:null},{url:"assets/guide_custom-item.md.6aeb281e.lean.js",revision:null},{url:"assets/guide_download-packs.md.a49214e3.js",revision:null},{url:"assets/guide_download-packs.md.a49214e3.lean.js",revision:null},{url:"assets/guide_format-version.md.0aa0c3b3.js",revision:null},{url:"assets/guide_format-version.md.0aa0c3b3.lean.js",revision:null},{url:"assets/guide_index.md.48a252f7.js",revision:null},{url:"assets/guide_index.md.48a252f7.lean.js",revision:null},{url:"assets/guide_introduction.md.31258ddf.js",revision:null},{url:"assets/guide_introduction.md.31258ddf.lean.js",revision:null},{url:"assets/guide_loot-table.md.b6e058d9.js",revision:null},{url:"assets/guide_loot-table.md.b6e058d9.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.6c2ccfd6.js",revision:null},{url:"assets/guide_project-setup-android.md.6c2ccfd6.lean.js",revision:null},{url:"assets/guide_project-setup.md.100bc625.js",revision:null},{url:"assets/guide_project-setup.md.100bc625.lean.js",revision:null},{url:"assets/guide_software-preparation.md.c9209cae.js",revision:null},{url:"assets/guide_software-preparation.md.c9209cae.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.b2e18401.js",revision:null},{url:"assets/guide_troubleshooting.md.b2e18401.lean.js",revision:null},{url:"assets/guide_understanding-json.md.9efaac85.js",revision:null},{url:"assets/guide_understanding-json.md.9efaac85.lean.js",revision:null},{url:"assets/hacktoberfest.md.ac6289f5.js",revision:null},{url:"assets/hacktoberfest.md.ac6289f5.lean.js",revision:null},{url:"assets/index.md.834821c3.js",revision:null},{url:"assets/index.md.834821c3.lean.js",revision:null},{url:"assets/items_attachables.md.d97050dd.js",revision:null},{url:"assets/items_attachables.md.d97050dd.lean.js",revision:null},{url:"assets/items_custom-armor.md.237c85f1.js",revision:null},{url:"assets/items_custom-armor.md.237c85f1.lean.js",revision:null},{url:"assets/items_custom-weapon.md.519a1a9e.js",revision:null},{url:"assets/items_custom-weapon.md.519a1a9e.lean.js",revision:null},{url:"assets/items_enchantments.md.da3b9358.js",revision:null},{url:"assets/items_enchantments.md.da3b9358.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.0c120f5a.js",revision:null},{url:"assets/items_equipped-item-commands.md.0c120f5a.lean.js",revision:null},{url:"assets/items_index.md.e4db831a.js",revision:null},{url:"assets/items_index.md.e4db831a.lean.js",revision:null},{url:"assets/items_item-identifiers.md.ed79326c.js",revision:null},{url:"assets/items_item-identifiers.md.ed79326c.lean.js",revision:null},{url:"assets/items_items-16.md.eb44e824.js",revision:null},{url:"assets/items_items-16.md.eb44e824.lean.js",revision:null},{url:"assets/items_items-intro.md.6f791748.js",revision:null},{url:"assets/items_items-intro.md.6f791748.lean.js",revision:null},{url:"assets/items_spawning-items.md.0c9fbaca.js",revision:null},{url:"assets/items_spawning-items.md.0c9fbaca.lean.js",revision:null},{url:"assets/items_spear.md.93420514.js",revision:null},{url:"assets/items_spear.md.93420514.lean.js",revision:null},{url:"assets/items_throwable.md.923a8586.js",revision:null},{url:"assets/items_throwable.md.923a8586.lean.js",revision:null},{url:"assets/items_tool-durability.md.8dfb4513.js",revision:null},{url:"assets/items_tool-durability.md.8dfb4513.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.4392732e.js",revision:null},{url:"assets/items_troubleshooting-items.md.4392732e.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.f9f4aab1.js",revision:null},{url:"assets/items_vanilla-usage-items.md.f9f4aab1.lean.js",revision:null},{url:"assets/items_vui-full.md.6470be47.js",revision:null},{url:"assets/items_vui-full.md.6470be47.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.12451d4f.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.12451d4f.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.0d13bf9f.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.0d13bf9f.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.606932dc.js",revision:null},{url:"assets/json-ui_best-practices.md.606932dc.lean.js",revision:null},{url:"assets/json-ui_index.md.2a340834.js",revision:null},{url:"assets/json-ui_index.md.2a340834.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.3c656bb5.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.3c656bb5.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.6b9d31b4.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.6b9d31b4.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.a48531c6.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.a48531c6.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.044268be.js",revision:null},{url:"assets/json-ui_string-to-number.md.044268be.lean.js",revision:null},{url:"assets/loot_index.md.8da3ca08.js",revision:null},{url:"assets/loot_index.md.8da3ca08.lean.js",revision:null},{url:"assets/loot_item-functions.md.32b0872c.js",revision:null},{url:"assets/loot_item-functions.md.32b0872c.lean.js",revision:null},{url:"assets/loot_loot-tables.md.e3a6c11f.js",revision:null},{url:"assets/loot_loot-tables.md.e3a6c11f.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.8317cb0c.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.8317cb0c.lean.js",revision:null},{url:"assets/loot_recipes.md.c8231e7e.js",revision:null},{url:"assets/loot_recipes.md.c8231e7e.lean.js",revision:null},{url:"assets/loot_trade-tables.md.b7814a8d.js",revision:null},{url:"assets/loot_trade-tables.md.b7814a8d.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.abf5cb3a.js",revision:null},{url:"assets/loot_trading-behavior.md.abf5cb3a.lean.js",revision:null},{url:"assets/meta_addon-performance.md.57c77a7f.js",revision:null},{url:"assets/meta_addon-performance.md.57c77a7f.lean.js",revision:null},{url:"assets/meta_index.md.f0c8b2ac.js",revision:null},{url:"assets/meta_index.md.f0c8b2ac.lean.js",revision:null},{url:"assets/meta_jq.md.bcc5e81d.js",revision:null},{url:"assets/meta_jq.md.bcc5e81d.lean.js",revision:null},{url:"assets/meta_style-guide.md.f374e703.js",revision:null},{url:"assets/meta_style-guide.md.f374e703.lean.js",revision:null},{url:"assets/meta_useful-links.md.682857c3.js",revision:null},{url:"assets/meta_useful-links.md.682857c3.lean.js",revision:null},{url:"assets/meta_using-schemas.md.f5891acc.js",revision:null},{url:"assets/meta_using-schemas.md.f5891acc.lean.js",revision:null},{url:"assets/meta_version-control.md.4c84dc6c.js",revision:null},{url:"assets/meta_version-control.md.4c84dc6c.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.23b60143.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.23b60143.lean.js",revision:null},{url:"assets/nbt_index.md.51eaa1e2.js",revision:null},{url:"assets/nbt_index.md.51eaa1e2.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.f3bd6bea.js",revision:null},{url:"assets/nbt_mcstructure.md.f3bd6bea.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.6a846f9b.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.6a846f9b.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.aaa6f71b.js",revision:null},{url:"assets/nbt_step-by-step-example.md.aaa6f71b.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.6ebd19d0.js",revision:null},{url:"assets/nbt_structure-limits.md.6ebd19d0.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.8b388519.js",revision:null},{url:"assets/particles_disabling-particles.md.8b388519.lean.js",revision:null},{url:"assets/particles_index.md.6af27515.js",revision:null},{url:"assets/particles_index.md.6af27515.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.62fe93c5.js",revision:null},{url:"assets/particles_particles-and-sounds.md.62fe93c5.lean.js",revision:null},{url:"assets/particles_particles.md.ca4a0a7d.js",revision:null},{url:"assets/particles_particles.md.ca4a0a7d.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.fea4a80e.js",revision:null},{url:"assets/particles_vanilla-particles.md.fea4a80e.lean.js",revision:null},{url:"assets/privacy.md.7fc85c74.js",revision:null},{url:"assets/privacy.md.7fc85c74.lean.js",revision:null},{url:"assets/scripting_api-environment.md.a359cd56.js",revision:null},{url:"assets/scripting_api-environment.md.a359cd56.lean.js",revision:null},{url:"assets/scripting_custom-command.md.4b882c8c.js",revision:null},{url:"assets/scripting_custom-command.md.4b882c8c.lean.js",revision:null},{url:"assets/scripting_game-tests.md.13c82559.js",revision:null},{url:"assets/scripting_game-tests.md.13c82559.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.cce14294.js",revision:null},{url:"assets/scripting_gametest-form.md.cce14294.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.5d82281b.js",revision:null},{url:"assets/scripting_gametest-qna.md.5d82281b.lean.js",revision:null},{url:"assets/scripting_index.md.c697743a.js",revision:null},{url:"assets/scripting_index.md.c697743a.lean.js",revision:null},{url:"assets/scripting_resources.md.4fb4a494.js",revision:null},{url:"assets/scripting_resources.md.4fb4a494.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.2a865c7a.js",revision:null},{url:"assets/scripting_saving-loading.md.2a865c7a.lean.js",revision:null},{url:"assets/scripting_script-modules.md.268418fe.js",revision:null},{url:"assets/scripting_script-modules.md.268418fe.lean.js",revision:null},{url:"assets/scripting_script-net.md.a2658520.js",revision:null},{url:"assets/scripting_script-net.md.a2658520.lean.js",revision:null},{url:"assets/scripting_script-server.md.bc21f8b0.js",revision:null},{url:"assets/scripting_script-server.md.bc21f8b0.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.9bb0f05e.js",revision:null},{url:"assets/scripting_script-watchdog.md.9bb0f05e.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.fb881946.js",revision:null},{url:"assets/scripting_scripting-intro.md.fb881946.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.ea3a34bd.js",revision:null},{url:"assets/scripting_starting-scripts.md.ea3a34bd.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.7f4da0d8.js",revision:null},{url:"assets/scripting_troubleshooting.md.7f4da0d8.lean.js",revision:null},{url:"assets/scripting_typescript.md.32a45577.js",revision:null},{url:"assets/scripting_typescript.md.32a45577.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.8724a9ad.js",revision:null},{url:"assets/scripting_what-is-script.md.8724a9ad.lean.js",revision:null},{url:"assets/servers_index.md.11da969d.js",revision:null},{url:"assets/servers_index.md.11da969d.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.2ee6e18e.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.2ee6e18e.lean.js",revision:null},{url:"assets/servers_server-software.md.22ae79e1.js",revision:null},{url:"assets/servers_server-software.md.22ae79e1.lean.js",revision:null},{url:"assets/style.4f0fb741.css",revision:null},{url:"assets/test.md.548adbd2.js",revision:null},{url:"assets/test.md.548adbd2.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.2adab04c.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.2adab04c.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.002d7b6e.js",revision:null},{url:"assets/visuals_animation-effects.md.002d7b6e.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.329e759b.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.329e759b.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.9991ad1f.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.9991ad1f.lean.js",revision:null},{url:"assets/visuals_death-animations.md.4bad47c4.js",revision:null},{url:"assets/visuals_death-animations.md.4bad47c4.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.e8bc5c51.js",revision:null},{url:"assets/visuals_glowing-texture.md.e8bc5c51.lean.js",revision:null},{url:"assets/visuals_index.md.6c22ec9a.js",revision:null},{url:"assets/visuals_index.md.6c22ec9a.lean.js",revision:null},{url:"assets/visuals_introduction.md.ebffac29.js",revision:null},{url:"assets/visuals_introduction.md.ebffac29.lean.js",revision:null},{url:"assets/visuals_leash-position.md.57c019a8.js",revision:null},{url:"assets/visuals_leash-position.md.57c019a8.lean.js",revision:null},{url:"assets/visuals_material-creations.md.03392d1e.js",revision:null},{url:"assets/visuals_material-creations.md.03392d1e.lean.js",revision:null},{url:"assets/visuals_materials.md.12603cd7.js",revision:null},{url:"assets/visuals_materials.md.12603cd7.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.e45ca6fc.js",revision:null},{url:"assets/visuals_math-based-animations.md.e45ca6fc.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.9e25f6c8.js",revision:null},{url:"assets/visuals_player-geometry.md.9e25f6c8.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.bb69da14.js",revision:null},{url:"assets/visuals_remove-shadows.md.bb69da14.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.0610dfbd.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.0610dfbd.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.2395e2bc.js",revision:null},{url:"assets/visuals_structure-presentation.md.2395e2bc.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.292cfc97.js",revision:null},{url:"assets/vr_editing-your-first-model.md.292cfc97.lean.js",revision:null},{url:"assets/vr_index.md.d05a5062.js",revision:null},{url:"assets/vr_index.md.d05a5062.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.7ccc67a5.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.7ccc67a5.lean.js",revision:null},{url:"assets/vr_pack_setup.md.a6cf1e11.js",revision:null},{url:"assets/vr_pack_setup.md.a6cf1e11.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.7c1df103.js",revision:null},{url:"assets/world-generation_biome-tags.md.7c1df103.lean.js",revision:null},{url:"assets/world-generation_biomes.md.764c00e4.js",revision:null},{url:"assets/world-generation_biomes.md.764c00e4.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.ebcc34f5.js",revision:null},{url:"assets/world-generation_custom-ores.md.ebcc34f5.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.c8f2b199.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.c8f2b199.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.4e222966.js",revision:null},{url:"assets/world-generation_feature-types.md.4e222966.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.24c040b3.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.24c040b3.lean.js",revision:null},{url:"assets/world-generation_index.md.5cc92623.js",revision:null},{url:"assets/world-generation_index.md.5cc92623.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.40beb172.js",revision:null},{url:"assets/world-generation_structure-features.md.40beb172.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.78c2d080.js",revision:null},{url:"assets/world-generation_surface-builder.md.78c2d080.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.1719e47c.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.1719e47c.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
