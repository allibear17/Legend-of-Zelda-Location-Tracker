# Legend-of-Zelda-Location-Tracker

This z1 tracker is designed for the open source z1 randomizer
found at http://z1r.tetra.ly

Current functionality is very basic.  Each map tab has a grid 
corresponding to the screens seen in gameplay.  Clicking on one 
piece of the grid, will toggle it's marker type. 

To the right of the Lv 9 button, is a color picker, to change 
the background color. If you're using an addon to alter the css, 
it may have minor conflicts with this color picker.

The button "OW+" toggles an overlay on the oeverworld.  This overlay
chas many icons showing what the locations contain:
- Bombs for bomb spots
- Fires for burn bush locations
- Potions for potion shops
- Hearts for the "Take Any" locations
- "$" followed by a number to show each shop location and shop type.
- Rupees for secrets.  1 rupee for small secrets (10), 2 rupees for
medium secrets (30), and 3 for large secrets (100)

Dungeon Markers:
- Green Star means the room has a floor item, or an item inside a single
enemy.  The item should be visible soon as you enter.
- Red Circle means you need to kill all enemies for the item to appear.
- Staircase icons show that the room has an item inside a staircase 
accessed from that room.
- Letters (such as A) indicate stairway connections.
- Note that lv 3 is the only Lv that shows a staircase item room.  This is
the staircase item and the floor item are able to be tracked separately. All
other dungeons have a staircase marker instead.

Have suggestions?  Please feel free to post them on the github page at:
https://github.com/allibear17/Legend-of-Zelda-Location-Tracker/

Thanks to:

- Tetraly (creating the open source z1 rando and tons of feedback)
- z1 rando community (lots of great info helped make this)
- Ian Albert for maps (http://ian-albert.com/games/legend_of_zelda_maps/)
- Everyone who has been giving feedback.  It's been very helpful!

Changelog

Alpha 3.5a
- Added some lines to show the segmented sections of 5-9.  Blue lines 
are solid, green lines (just one in lv9) are one way doors.

Alpha 3.5
- Added two more marker types: Triforce, Magical Sword, Map, and Compass.
- Changed the map for lv 3.  Added the staircase item room, so it can be 
	marked separately from the room that contains the staircase.

Alpha 3
- Added more map icons to overworld and dungeons.
- Added "OW+" button to toggle the icons showing on the Overworld section.
- Fixed item staircase rooms in 7 and 8 to now be markable.
- A few overworld locations can no longer be marked:  fairy fountains, 
door repairs, hints, and money-making game.
- Minor css tweaks.
- Added "Info" button which links to github files.

Alpha 2
- Tweaked the displays per tab to automatically mark screens without items (these
screens have their outlines removed also)
- Adding markers to OW map to indicate bomb/burn/armos spots
- Minor image tweaks
- Added more marker types: blank, checked, and question mark.

Alpha 1
- Initial release
- Most basic working version
