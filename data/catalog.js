/* Datenbestand 0.1 — eigene Kurzbeschreibungen, keine Buchabschriften. */
window.CATALOG = (() => {
const sources = {
 PHB: ['Player’s Handbook (2024)','https://www.dndbeyond.com/sources/dnd/phb-2024','2024'],
 MOTM: ['Monsters of the Multiverse','https://www.dndbeyond.com/sources/dnd/motm','2022'],
 SAIS: ['Spelljammer: Adventures in Space','https://www.dndbeyond.com/sources/dnd/sais','2022'],
 XGE: ['Xanathar’s Guide to Everything','https://www.dndbeyond.com/sources/dnd/xgte','2017'],
 TCE: ['Tasha’s Cauldron of Everything','https://www.dndbeyond.com/sources/dnd/tcoe','2020'],
 HCS: ['Humblewood Campaign Setting','https://www.dndbeyond.com/sources/dnd/hcs','Partnerinhalt'],
 H1: ['Heliana’s Guide to Monster Hunting: Part 1','https://www.dndbeyond.com/sources/dnd/hgtmh1','Ausgabe prüfen'],
 H2: ['Heliana’s Guide to Monster Hunting: Part 2','https://www.dndbeyond.com/sources/dnd/hgtmh2','Ausgabe prüfen'],
 DROP: ['D&D Beyond Drops','https://www.dndbeyond.com/en/library/subscriber-content','Abo prüfen'],
 COS: ['Curse of Strahd: Character Options','https://www.dndbeyond.com/backgrounds/34-haunted-one','2016'],
 RULES: ['D&D Beyond Basic Rules (2024)','https://www.dndbeyond.com/sources/dnd/br-2024','2024']
};
const species = [];
function add(source, data) {data.trim().split('\n').forEach(line=>{const [en,de,tag,desc,variants='']=line.split('|');species.push({en,de,tag,desc,variants,source,conditional:['H1','H2','DROP'].includes(source)});});}
add('PHB',`Aasimar|Aasimar|Magie|Himmlisches Erbe, heilende Kräfte und später eine leuchtende Verwandlung.
Dragonborn|Drachenblütige|Drachen|Elementarer Atem, passende Resistenz und später zeitweilige Flügel.|Schwarz, Blau, Messing, Bronze, Kupfer, Gold, Grün, Rot, Silber, Weiß
Dwarf|Zwerg|Klassisch|Robuste Abenteurer mit Giftschutz und besonders viel Ausdauer.
Elf|Elf|Elfen|Langlebig, mit Feenblut, Trance und angeborener Magie.|High Elf (Hochelf), Wood Elf (Waldelf), Drow (Dunkelelf)
Gnome|Gnom|Magie|Kleine Wesen mit geistiger Widerstandskraft und magischen Talenten.|Forest Gnome, Rock Gnome
Goliath|Goliath|Klassisch|Riesenerbe verleiht körperliche Kraft und besondere Gaben.|Cloud, Fire, Frost, Hill, Stone, Storm
Halfling|Halbling|Klassisch|Klein, mutig und außergewöhnlich glücklich.
Human|Mensch|Klassisch|Flexibel und mit zusätzlichen Möglichkeiten bei der Charaktererschaffung.
Orc|Ork|Klassisch|Zäh und schnell; kann sich auch in brenzligen Situationen behaupten.
Tiefling|Tiefling|Magie|Übernatürliche Abstammung bestimmt angeborene Magie und Schutz.|Abyssal, Chthonic, Infernal`);
add('MOTM',`Aarakocra|Vogelwesen|Tierwesen|Gefiederte Himmelsbewohner mit natürlicher Flugfähigkeit.
Bugbear|Bugbear|Klassisch|Große, behaarte Goblinoide mit überraschendem Geschick.
Centaur|Zentaur|Tierwesen|Pferdekörper und humanoider Oberkörper; bewegliche Abenteurer.
Changeling|Gestaltwandler|Magie|Kann das eigene Erscheinungsbild verändern.
Deep Gnome|Tiefengnom|Magie|Unterirdisch geprägte Gnome mit Tarn- und Schutzmagie.
Duergar|Tiefenzwerg|Magie|Zwerge mit magischem Wachstum und Unsichtbarkeit.
Eladrin|Jahreszeitenelf|Elfen|Feenelfen mit magischen Sprüngen und wechselnder Jahreszeitenstimmung.|Frühling, Sommer, Herbst, Winter
Fairy|Fee|Magie|Kleine geflügelte Feenwesen mit angeborener Magie.
Firbolg|Firbolg|Magie|Großgewachsene Naturverbundene mit unauffälliger Magie.
Air Genasi|Luft-Genasi|Elemente|Elementares Lufterbe mit magischen Gaben.
Earth Genasi|Erd-Genasi|Elemente|Elementares Erderbe mit magischen Gaben.
Fire Genasi|Feuer-Genasi|Elemente|Elementares Feuererbe mit Feuerresistenz und Magie.
Water Genasi|Wasser-Genasi|Elemente|Elementares Wassererbe und Leben an Land oder im Wasser.
Githyanki|Githyanki|Magie|Astrale Reisende mit geistig wirkender Magie.
Githzerai|Githzerai|Magie|Disziplinierte Ebenenwanderer mit mentalen Kräften.
Goblin|Goblin|Klassisch|Klein und beweglich, geschickt beim Ausweichen.
Harengon|Hasenwesen|Tierwesen|Schnelle Hasenartige mit kräftigen Sprüngen.
Hobgoblin|Hobgoblin|Klassisch|Goblinoide mit feenhaften Gaben für Zusammenarbeit.
Kenku|Krähenwesen|Tierwesen|Vogelartige ohne Flugfähigkeit, talentiert beim Nachahmen.
Kobold|Kobold|Drachen|Kleine drachenartige Wesen, deren Mut andere unterstützen kann.
Lizardfolk|Echsenwesen|Tierwesen|Reptilienartige mit Schuppen und kräftigem Biss.
Minotaur|Minotaurus|Tierwesen|Stierartige mit kräftigen Hörnern und Ansturm.
Satyr|Satyr|Magie|Feenwesen mit Ziegenbeinen und magischer Widerstandskraft.
Sea Elf|Meereself|Elfen|Elfen mit Anpassungen an das Leben unter Wasser.
Shadar-kai|Schattenelf|Elfen|Schattengeprägte Elfen mit magischer Teleportation.
Shifter|Tierwandler|Tierwesen|Humanoide, die vorübergehend tierische Eigenschaften annehmen.|Beasthide, Longtooth, Swiftstride, Wildhunt
Tabaxi|Katzenwesen|Tierwesen|Flinke Katzenartige mit ausgeprägter Beweglichkeit.
Tortle|Schildkrötenwesen|Tierwesen|Schützender Panzer und natürliche Waffen.
Triton|Triton|Elemente|Amphibische Meeresbewohner mit Wassermagie.
Yuan-ti|Schlangenwesen|Tierwesen|Schlangenartige mit magischen und giftbezogenen Schutzgaben.`);
add('SAIS',`Astral Elf|Astralelf|Elfen|Sternenverbundene Elfen mit Lichtmagie und kurzen Teleportationen.
Autognome|Autognom|Außergewöhnlich|Kleine mechanische Wesen mit eingebauten Talenten.
Giff|Giff|Tierwesen|Nilpferdartige, kräftige Reisende mit Gespür für Schusswaffen.
Hadozee|Hadozee|Tierwesen|Affenartige mit Gleithaut und geschickten Füßen.
Plasmoid|Plasmoid|Außergewöhnlich|Formbare Schleimwesen mit ungewöhnlicher Beweglichkeit.
Thri-kreen|Thri-kreen|Tierwesen|Insektenartige mit vier Armen und Telepathie.`);
add('TCE',`Custom Lineage|Individuelle Abstammung|Außergewöhnlich|Option zur eigenen Herkunft; keine festgelegte Spezies. Anpassung an 2024 mit der Spielleitung prüfen.`);
add('HCS',`Cervan|Hirschwesen|Tierwesen|Widerstandsfähige Waldbewohner.|Grove, Pronghorn
Corvum|Rabenvogelwesen|Tierwesen|Scharfsinnige gefiederte Humanoide.|Dusk, Kindled
Gallus|Hühnervogelwesen|Tierwesen|Vogelartige mit Sinn für Gemeinschaft.|Bright, Huden
Hedge|Igelwesen|Tierwesen|Stachelige Waldbewohner mit Naturbezug.
Jerbeen|Mäusewesen|Tierwesen|Klein, flink und stark im Team.
Luma|Taubenwesen|Tierwesen|Kleine gefiederte Wesen mit magischen Gaben.|Sable, Sera
Mapach|Waschbärenwesen|Tierwesen|Geschickte Bastler und Überlebenskünstler.
Raptor|Greifvogelwesen|Tierwesen|Aufmerksame Vogelartige mit scharfen Sinnen.|Mistral, Maran
Strig|Eulenwesen|Tierwesen|Kräftige Eulenartige.|Stout, Swift
Vulpin|Fuchswesen|Tierwesen|Fuchsartige mit Charme und magischem Geschick.`);
add('H1',`Cnidaran|Cnidaran|Außergewöhnlich|Quallenartige Wasserwesen.
Cyclopian|Cyclopian|Außergewöhnlich|Einäugige Wesen mit ungewöhnlichen Gaben.
Gobboc|Gobboc|Außergewöhnlich|Kleine goblinartige Wesen.
Golynn|Golynn|Außergewöhnlich|Ungewöhnliche Wesen aus Helianas Welt.
Rakin|Rakin|Tierwesen|Tierartige Abenteurer aus Helianas Welt.`);
add('H2',`Lotol|Lotol|Tierwesen|Amphibienartige Wesen.
Mycelian|Mycelian|Außergewöhnlich|Pilzartige Wesen.
Ombrask|Ombrask|Außergewöhnlich|Geheimnisvolle Wesen aus Helianas Welt.
Oozekin|Oozekin|Außergewöhnlich|Schleimartige Wesen.
Opteran|Opteran|Tierwesen|Insektenartige Wesen.`);
add('DROP',`Duskling|Duskling|Magie|Feenwildnisgeprägte Spezies mit magischen Gaben.
Bariaur|Bariaur|Tierwesen|Widderartige Ebenenwanderer.`);
const classes = `Barbarian|Barbar|ST|W12|Einfach|Kampf|Kämpft mit Wut und großer körperlicher Widerstandskraft.
Bard|Barde|CH|W8|Mittel|Magie, Unterstützung|Verbindet Kunst, Überzeugung und vielseitige Zauber.
Cleric|Kleriker|WE|W8|Mittel|Magie, Unterstützung|Wirkt göttliche Magie, schützt und heilt.
Druid|Druide|WE|W8|Anspruchsvoll|Magie, Natur|Verbindet Naturzauber mit Tiergestalten.
Fighter|Kämpfer|ST / GE|W10|Einfach|Kampf|Beherrscht Waffen und verschiedene Kampfstile.
Monk|Mönch|GE / WE|W8|Mittel|Kampf|Setzt Beweglichkeit und innere Kraft im Nahkampf ein.
Paladin|Paladin|ST / CH|W10|Mittel|Kampf, Unterstützung|Verbindet Waffen, Heilung und die Macht eines Schwurs.
Ranger|Waldläufer|GE / WE|W10|Mittel|Natur, Kampf|Erkundet die Wildnis und verbindet Waffen mit Naturmagie.
Rogue|Schurke|GE|W8|Einfach|Geschick|Löst Probleme mit Heimlichkeit, Präzision und Fertigkeiten.
Sorcerer|Zauberer|CH|W6|Anspruchsvoll|Magie|Wirkt angeborene Magie und verändert Zauber.
Warlock|Hexenmeister|CH|W8|Mittel|Magie|Erhält Kräfte durch einen Pakt mit einem mächtigen Wesen.
Wizard|Magier|IN|W6|Anspruchsvoll|Magie|Erlernt ein breites Spektrum an Zaubern durch Studium.
Artificer|Magieschmied|IN|W8|Anspruchsvoll|Magie, Unterstützung|Verbindet Erfindungen, Werkzeuge und magische Ausrüstung.`.split('\n').map(l=>{const [en,de,attribute,die,difficulty,tag,desc]=l.split('|');return {en,de,attribute,die,difficulty,tag,desc,source:en==='Artificer'?'TCE':'PHB'};});
const subclasses=[];
function subs(source,raw){raw.trim().split('\n').forEach(line=>{const [className,list]=line.split('|');list.split(';').forEach(entry=>{const [en,de]=entry.split('~');subclasses.push({className,en,de:de||en,source,conditional:['H1','H2','DROP'].includes(source)});});});}
subs('PHB',`Barbarian|Berserker~Berserker;Wild Heart~Wildes Herz;World Tree~Weltenbaum;Zealot~Eiferer
Bard|Dance~Tanz;Glamour~Glamour;Lore~Wissen;Valor~Tapferkeit
Cleric|Life~Leben;Light~Licht;Trickery~List;War~Krieg
Druid|Land~Land;Moon~Mond;Sea~Meer;Stars~Sterne
Fighter|Battle Master~Kampfmeister;Champion~Champion;Eldritch Knight~Mystischer Ritter;Psi Warrior~Psi-Krieger
Monk|Mercy~Barmherzigkeit;Shadow~Schatten;Elements~Elemente;Open Hand~Offene Hand
Paladin|Ancients~Die Uralten;Devotion~Hingabe;Glory~Ruhm;Vengeance~Vergeltung
Ranger|Beast Master~Tiermeister;Fey Wanderer~Feenwanderer;Gloom Stalker~Düsterpirscher;Hunter~Jäger
Rogue|Arcane Trickster~Arkaner Betrüger;Assassin~Assassine;Soulknife~Seelenklinge;Thief~Dieb
Sorcerer|Aberrant~Abweichende Magie;Clockwork~Uhrwerkmagie;Draconic~Drachenmagie;Wild Magic~Wilde Magie
Warlock|Archfey~Erzfee;Celestial~Himmlischer;Fiend~Unhold;Great Old One~Großer Alter
Wizard|Abjurer~Bannmagie;Diviner~Weissagung;Evoker~Hervorrufung;Illusionist~Illusion`);
subs('XGE',`Barbarian|Ancestral Guardian~Ahnenwächter;Storm Herald~Sturmherold
Bard|College of Swords~Schwerter;College of Whispers~Flüstern
Cleric|Forge Domain~Schmiede;Grave Domain~Grab
Druid|Circle of Dreams~Träume;Circle of the Shepherd~Hirte
Fighter|Arcane Archer~Arkaner Bogenschütze;Cavalier~Kavalier;Samurai
Monk|Drunken Master~Betrunkener Meister;Kensei;Sun Soul~Sonnenseele
Paladin|Oath of Conquest~Eroberung;Oath of Redemption~Erlösung
Ranger|Horizon Walker~Horizontwanderer;Monster Slayer~Monsterjäger
Rogue|Inquisitive~Ermittler;Mastermind~Strippenzieher;Scout~Späher;Swashbuckler~Draufgänger
Sorcerer|Divine Soul~Göttliche Seele;Shadow Magic~Schattenmagie;Storm Sorcery~Sturmmagie
Warlock|Hexblade~Hexenklinge
Wizard|War Magic~Kriegsmagie`);
subs('TCE',`Artificer|Alchemist~Alchemist;Armorer~Rüstungsschmied;Artillerist~Artillerist;Battle Smith~Kampfschmied
Barbarian|Beast~Bestie;Wild Magic~Wilde Magie
Bard|College of Creation~Schöpfung;College of Eloquence~Redekunst
Cleric|Order Domain~Ordnung;Peace Domain~Frieden;Twilight Domain~Zwielicht
Druid|Circle of Spores~Sporen;Circle of Wildfire~Wildfeuer
Fighter|Rune Knight~Runenritter
Monk|Astral Self~Astrales Selbst
Paladin|Oath of the Watchers~Wächter
Ranger|Swarmkeeper~Schwarmhüter
Rogue|Phantom
Warlock|Fathomless~Unergründlicher;Genie~Dschinn
Wizard|Bladesinging~Klingengesang;Order of Scribes~Schreiberorden`);
subs('HCS',`Bard|College of the Road~Straßenkunst
Cleric|Community Domain~Gemeinschaft;Night Domain~Nacht
Fighter|Scofflaw~Gesetzloser`);
subs('H1',`Bard|College of Fleshweaving~Fleischweben
Druid|Circle of the Hive~Bienenstock
Paladin|Oath of the Harvest~Ernte
Wizard|School of Biomancy~Biomantie`);
subs('H2',`Bard|College of Cuisine~Kochkunst
Cleric|Hunt Domain~Jagd
Ranger|Trapper~Fallensteller
Sorcerer|Skinshifter~Hautwandler
Warlock|The Parasite~Parasit`);
subs('DROP',`Fighter|Sorrow Knight~Ritter der Trauer`);
const backgrounds = ['Acolyte|Akolyth','Artisan|Handwerker','Charlatan|Scharlatan','Criminal|Krimineller','Entertainer|Unterhaltungskünstler','Farmer|Bauer','Guard|Wache','Guide|Wegführer','Hermit|Einsiedler','Merchant|Händler','Noble|Adliger','Sage|Gelehrter','Sailor|Seemann','Scribe|Schreiber','Soldier|Soldat','Wayfarer|Wanderer'].map(x=>{const [en,de]=x.split('|');return {en,de,source:'PHB'};});
backgrounds.push({en:'Haunted One',de:'Heimgesuchter',source:'COS'},{en:'Astral Drifter',de:'Astralwanderer',source:'SAIS'},{en:'Wildspacer',de:'Weltraumreisender',source:'SAIS'},{en:'Bandit Defector',de:'Abtrünniger Bandit',source:'HCS'},{en:'Wind-Touched',de:'Windberührter',source:'HCS'},{en:'Avium Student',de:'Avium-Student',source:'HCS'});
const rules = [
['Was ist D&D?','How to play','Du beschreibst, was deine Figur tut. Die Spielleitung schildert die Welt und entscheidet, wann ein Wurf nötig ist. Gemeinsam erzählt ihr eine Geschichte.','Du willst einer Wache helfen, statt gegen sie zu kämpfen. Beschreibe deinen Plan.'],
['Würfel','Dice','W20 bedeutet ein zwanzigseitiger Würfel. W6 hat sechs Seiten. 2W6 bedeutet zwei W6 würfeln und addieren.','2W6 zeigen 3 und 5: Ergebnis 8.'],
['Attribute','Ability scores','Stärke (ST), Geschicklichkeit (GE), Konstitution (KO), Intelligenz (IN), Weisheit (WE) und Charisma (CH) beschreiben unterschiedliche Talente.','Bei einem Wert von 14 beträgt der Modifikator +2; bei 10 beträgt er 0.'],
['Proben','D20 tests','W20 + passender Attributsmodifikator + gegebenenfalls Übungsbonus. Erreichst du den Zielwert, gelingt die Probe.','Wurf 12 + 2 Attribut + 2 Übung = 16. Gegen SG 15 gelingt die Probe.'],
['Vorteil und Nachteil','Advantage & disadvantage','Würfle zwei W20 und nimm bei Vorteil den höheren, bei Nachteil den niedrigeren. Treffen beide zusammen, würfelst du einen W20.','Bei 6 und 17 ist das Ergebnis mit Vorteil 17.'],
['Rettungswürfe','Saving throws','Ein Rettungswurf prüft, wie gut du einer Gefahr widerstehst. Addiere den passenden Modifikator und gegebenenfalls Übungsbonus.','Eine Giftwolke kann einen Konstitutionsrettungswurf auslösen.'],
['Initiative und Zug','Initiative & turn','Initiative ist meist ein Geschicklichkeitswurf. Im eigenen Zug stehen Bewegung und eine Aktion zur Verfügung. Bonusaktionen benötigen eine entsprechende Fähigkeit; Reaktionen benötigen einen Auslöser.','Du bewegst dich zur Tür und greifst mit deiner Aktion an.'],
['Angriff und Rüstung','Attack & armor class','Ein Angriff trifft, wenn das Ergebnis mindestens der Rüstungsklasse (RK/AC) entspricht. Bei Angriffswürfen ist eine natürliche 1 ein Fehlschlag und eine natürliche 20 ein kritischer Treffer.','Angriff 15 gegen RK 14 trifft. Dann würfelst du Schaden.'],
['Trefferpunkte','Hit points','Schaden senkt Trefferpunkte. Heilung erhöht sie bis zum Maximum. Bei 0 TP kann eine Figur bewusstlos werden oder sterben.','Du hast 12 TP, erleidest 5 Schaden und hast noch 7 TP.'],
['Todesrettungswürfe','Death saving throws','Beginnt dein Zug mit 0 TP und du bist nicht stabil, würfelst du gewöhnlich einen Todesrettungswurf. Ab 10 Erfolg, darunter Misserfolg; drei Erfolge stabilisieren, drei Misserfolge töten. Eine natürliche 1 zählt doppelt, eine 20 stellt 1 TP wieder her.','Heilung durch einen Verbündeten kann dich wieder ins Abenteuer bringen.'],
['Zauber','Spells','Zaubertricks benötigen normalerweise keinen Zauberplatz. Andere Zauber verbrauchen häufig einen Platz passender Stufe. Die Zauberbeschreibung nennt Reichweite, Wirkung und Aufwand.','Ein Zauber des 1. Grades kann mit einem Platz des 1. Grades gewirkt werden.'],
['Konzentration','Concentration','Du kannst nur einen Konzentrationszauber gleichzeitig halten. Schaden kann einen Konstitutionsrettungswurf nötig machen.','Du hältst einen Schutzzauber aufrecht und wirst getroffen.'],
['Rast','Rest','Eine kurze Rast dauert normalerweise mindestens eine Stunde; eine lange Rast mindestens acht Stunden. Welche Ressourcen zurückkehren, hängt von den Regeln und Fähigkeiten ab.','In einer kurzen Rast kannst du Trefferwürfel zur Heilung einsetzen.'],
['Charaktererschaffung','Character creation','Wähle Klasse, Herkunft mit Hintergrund und Spezies sowie Attribute und Ausrüstung. Bei älteren Quellen gelten die Anpassungsregeln von 2024.','Eine Waldelfe kann jede Klasse wählen, nicht nur Waldläufer.'],
['Stufenaufstieg','Level up','Die Gruppe steigt nach Erfahrungspunkten oder einer Entscheidung der Spielleitung auf. Neue Stufen bringen Fähigkeiten. Im Grundregelwerk 2024 wählen Klassen ihre Unterklasse auf Stufe 3.','Du beginnst auf Stufe 1 und entscheidest deine Spezialisierung später.']
].map(([de,en,desc,example])=>({de,en,desc,example,source:'RULES'}));
const library = [ ['Dungeon Master’s Guide (2024)','Spielleitung'],['Monster Manual (2025)','Monster'],['Elemental Evil Player’s Companion','Aarakocra und Genasi bereits neuer; Tiefengnom in MOTM'],['Lost Mine of Phandelver','Geteilter Zugang, Abenteuer'],['Monstrous Compendium Vol. 1: Spelljammer Creatures','Monster'],['Monstrous Compendium Vol. 2: Dragonlance Creatures','Monster'],['Frozen Sick','Abenteuer'],['Giants of the Star Forge','Abenteuer'],['Baldur’s Gate Gazetteer','Setting und Hintergrundoptionen; Freischaltung prüfen'],['Thieves’ Gallery','NSC'],['Legendary Magic Items','Gegenstände'],['The Vecna Dossier','Monster'],['The Radiant Citadel','Setting'],['Spelljammer Academy','Abenteuer'],['Hold Back the Dead','Abenteuer'],['Sage Advice & Errata','Regelkorrekturen'],['Jimothy','Zusatzmaterial'],['Dungeon Masters: World of Warcraft Play-Along Pack','Begegnungen und Monster; nicht das vollständige WoW-Regelbuch'],['Basic Rules (2014)','Ausgeschlossen'],['Player’s Handbook (2014)','Ausgeschlossen'] ];
return {sources,species,classes,subclasses,backgrounds,rules,library};
})();
