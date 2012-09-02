if (! Vex.Flow.Test.VeXML)
  Vex.Flow.Test.VeXML = {};
Vex.Flow.Test.VeXML.Examples = {};

Vex.Flow.Test.VeXML.Examples.Hello_World = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\
<!DOCTYPE score-partwise PUBLIC\
    "-//Recordare//DTD MusicXML 3.0 Partwise//EN"\
    "http://www.musicxml.org/dtds/partwise.dtd">\
<score-partwise version="3.0">\
  <part-list>\
    <score-part id="P1">\
      <part-name>Music</part-name>\
    </score-part>\
  </part-list>\
  <part id="P1">\
    <measure number="1">\
      <attributes>\
        <divisions>1</divisions>\
        <key>\
          <fifths>0</fifths>\
        </key>\
        <time>\
          <beats>4</beats>\
          <beat-type>4</beat-type>\
        </time>\
        <clef>\
          <sign>G</sign>\
          <line>2</line>\
        </clef>\
      </attributes>\
      <note>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>4</duration>\
        <type>whole</type>\
      </note>\
    </measure>\
  </part>\
</score-partwise>';

Vex.Flow.Test.VeXML.Examples.Apres_Un_Reve = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">\
<score-partwise version="3.0">\
  <movement-title>Après un rêve</movement-title>\
  <identification>\
    <creator type="composer">Gabriel Fauré</creator>\
    <rights>Copyright © 2002 Recordare LLC</rights>\
    <encoding>\
      <software>Finale 2011 for Windows</software>\
      <software>Dolet 6.0 for Finale</software>\
      <encoding-date>2011-08-10</encoding-date>\
      <supports attribute="new-system" element="print" type="yes" value="yes"/>\
      <supports attribute="new-page" element="print" type="yes" value="yes"/>\
    </encoding>\
  </identification>\
  <defaults>\
    <scaling>\
      <millimeters>6.35</millimeters>\
      <tenths>40</tenths>\
    </scaling>\
    <page-layout>\
      <page-height>1760</page-height>\
      <page-width>1360</page-width>\
      <page-margins type="both">\
        <left-margin>80</left-margin>\
        <right-margin>80</right-margin>\
        <top-margin>80</top-margin>\
        <bottom-margin>80</bottom-margin>\
      </page-margins>\
    </page-layout>\
    <system-layout>\
      <system-margins>\
        <left-margin>0</left-margin>\
        <right-margin>0</right-margin>\
      </system-margins>\
      <system-distance>127</system-distance>\
      <top-system-distance>127</top-system-distance>\
    </system-layout>\
    <staff-layout>\
      <staff-distance>80</staff-distance>\
    </staff-layout>\
    <appearance>\
      <line-width type="stem">1.25</line-width>\
      <line-width type="beam">5</line-width>\
      <line-width type="staff">0.8333</line-width>\
      <line-width type="light barline">2.0833</line-width>\
      <line-width type="heavy barline">6.6667</line-width>\
      <line-width type="leger">1.25</line-width>\
      <line-width type="ending">0.7682</line-width>\
      <line-width type="wedge">0.957</line-width>\
      <line-width type="enclosure">1.6667</line-width>\
      <line-width type="tuplet bracket">1.3542</line-width>\
      <note-size type="grace">66</note-size>\
      <note-size type="cue">66</note-size>\
      <distance type="hyphen">60</distance>\
      <distance type="beam">8</distance>\
    </appearance>\
    <music-font font-family="Maestro,engraved" font-size="18"/>\
    <word-font font-family="Times New Roman" font-size="8.25"/>\
    <lyric-font font-family="Times New Roman" font-size="10"/>\
  </defaults>\
  <part-list>\
    <score-part id="P1">\
      <part-name print-object="no">Voice</part-name>\
      <score-instrument id="P1-I14">\
        <instrument-name>Choir Aahs</instrument-name>\
      </score-instrument>\
      <midi-instrument id="P1-I14">\
        <midi-channel>1</midi-channel>\
        <midi-program>53</midi-program>\
        <volume>80</volume>\
        <pan>0</pan>\
      </midi-instrument>\
    </score-part>\
    <part-group number="1" type="start">\
      <group-symbol default-x="-7">brace</group-symbol>\
      <group-barline>yes</group-barline>\
    </part-group>\
    <score-part id="P2">\
      <part-name>Piano</part-name>\
      <score-instrument id="P2-I1">\
        <instrument-name>Grand Piano</instrument-name>\
      </score-instrument>\
      <midi-instrument id="P2-I1">\
        <midi-channel>2</midi-channel>\
        <midi-program>1</midi-program>\
        <volume>80</volume>\
        <pan>0</pan>\
      </midi-instrument>\
    </score-part>\
    <part-group number="1" type="stop"/>\
  </part-list>\
  <!--=========================================================-->\
  <part id="P1">\
    <measure number="1" width="366">\
      <print>\
        <system-layout>\
          <system-margins>\
            <left-margin>3</left-margin>\
            <right-margin>0</right-margin>\
          </system-margins>\
          <top-system-distance>280</top-system-distance>\
        </system-layout>\
        <measure-numbering>system</measure-numbering>\
      </print>\
      <attributes>\
        <divisions>24</divisions>\
        <key>\
          <fifths>-3</fifths>\
          <mode>major</mode>\
        </key>\
        <time>\
          <beats>3</beats>\
          <beat-type>4</beat-type>\
        </time>\
        <clef>\
          <sign>G</sign>\
          <line>2</line>\
        </clef>\
      </attributes>\
      <direction directive="yes" placement="above">\
        <direction-type>\
          <words default-y="15" font-size="10.5" font-weight="bold">Andantino</words>\
        </direction-type>\
        <sound tempo="60"/>\
      </direction>\
      <note>\
        <rest measure="yes"/>\
        <duration>72</duration>\
        <voice>1</voice>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="2" width="245">\
      <direction placement="above">\
        <direction-type>\
          <words default-x="15" default-y="15" font-size="9" font-style="italic">dolce</words>\
        </direction-type>\
      </direction>\
      <note default-x="27">\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>24</duration>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="6">up</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>single</syllabic>\
          <text>Dans</text>\
        </lyric>\
      </note>\
      <direction placement="above">\
        <direction-type>\
          <wedge default-y="20" spread="0" type="crescendo"/>\
        </direction-type>\
        <offset>-8</offset>\
      </direction>\
      <note default-x="99">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>24</duration>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="-50.5">down</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>single</syllabic>\
          <text>un</text>\
        </lyric>\
      </note>\
      <note default-x="171">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>24</duration>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="-45.5">down</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>begin</syllabic>\
          <text>som</text>\
        </lyric>\
      </note>\
      <direction>\
        <direction-type>\
          <wedge spread="11" type="stop"/>\
        </direction-type>\
        <offset>-11</offset>\
      </direction>\
    </measure>\
    <!--=======================================================-->\
    <measure number="3" width="303">\
      <note default-x="26">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>5</octave>\
        </pitch>\
        <duration>24</duration>\
        <tie type="start"/>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="-40.5">down</stem>\
        <notations>\
          <tied type="start"/>\
        </notations>\
        <lyric default-y="-80" number="1">\
          <syllabic>end</syllabic>\
          <text>meil</text>\
          <extend/>\
        </lyric>\
      </note>\
      <note default-x="92">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <tie type="stop"/>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-40">down</stem>\
        <beam number="1">begin</beam>\
        <notations>\
          <tied type="stop"/>\
          <tuplet bracket="no" number="1" placement="above" type="start"/>\
        </notations>\
      </note>\
      <note default-x="122">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-42">down</stem>\
        <beam number="1">continue</beam>\
        <lyric default-y="-80" number="1">\
          <syllabic>single</syllabic>\
          <text>que</text>\
        </lyric>\
      </note>\
      <note default-x="162">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-45">down</stem>\
        <beam number="1">end</beam>\
        <notations>\
          <tuplet number="1" type="stop"/>\
        </notations>\
        <lyric default-y="-80" number="1">\
          <syllabic>begin</syllabic>\
          <text>char</text>\
        </lyric>\
      </note>\
      <note default-x="205">\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-40">down</stem>\
        <beam number="1">begin</beam>\
        <notations>\
          <tuplet bracket="no" number="1" placement="above" type="start"/>\
        </notations>\
        <lyric default-y="-80" number="1">\
          <syllabic>end</syllabic>\
          <text>mait</text>\
        </lyric>\
      </note>\
      <note default-x="244">\
        <pitch>\
          <step>D</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-43">down</stem>\
        <beam number="1">continue</beam>\
        <lyric default-y="-80" number="1">\
          <syllabic>single</syllabic>\
          <text>ton</text>\
        </lyric>\
      </note>\
      <note default-x="276">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>8</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <time-modification>\
          <actual-notes>3</actual-notes>\
          <normal-notes>2</normal-notes>\
        </time-modification>\
        <stem default-y="-45">down</stem>\
        <beam number="1">end</beam>\
        <notations>\
          <tuplet number="1" type="stop"/>\
        </notations>\
        <lyric default-y="-80" number="1">\
          <syllabic>begin</syllabic>\
          <text>i</text>\
        </lyric>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="4" width="284">\
      <direction placement="above">\
        <direction-type>\
          <wedge default-y="20" spread="11" type="diminuendo"/>\
        </direction-type>\
        <offset>3</offset>\
      </direction>\
      <note default-x="27">\
        <pitch>\
          <step>C</step>\
          <octave>5</octave>\
        </pitch>\
        <duration>48</duration>\
        <voice>1</voice>\
        <type>half</type>\
        <stem default-y="-50.5">down</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>middle</syllabic>\
          <text>ma</text>\
        </lyric>\
      </note>\
      <direction>\
        <direction-type>\
          <wedge spread="0" type="stop"/>\
        </direction-type>\
        <offset>2</offset>\
      </direction>\
      <note default-x="197">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>24</duration>\
        <voice>1</voice>\
        <type>quarter</type>\
        <stem default-y="-55.5">down</stem>\
        <lyric default-y="-80" number="1">\
          <syllabic>end</syllabic>\
          <text>ge</text>\
        </lyric>\
      </note>\
    </measure>\
  </part>\
  <!--=========================================================-->\
  <part id="P2">\
    <measure number="1" width="366">\
      <print>\
        <staff-layout number="1">\
          <staff-distance>65</staff-distance>\
        </staff-layout>\
        <staff-layout number="2">\
          <staff-distance>48</staff-distance>\
        </staff-layout>\
        <measure-numbering>none</measure-numbering>\
      </print>\
      <attributes>\
        <divisions>2</divisions>\
        <key>\
          <fifths>-3</fifths>\
          <mode>major</mode>\
        </key>\
        <time>\
          <beats>3</beats>\
          <beat-type>4</beat-type>\
        </time>\
        <staves>2</staves>\
        <clef number="1">\
          <sign>G</sign>\
          <line>2</line>\
        </clef>\
        <clef number="2">\
          <sign>F</sign>\
          <line>4</line>\
        </clef>\
      </attributes>\
      <direction placement="below">\
        <direction-type>\
          <dynamics default-x="129" default-y="-75" halign="left">\
            <pp/>\
          </dynamics>\
        </direction-type>\
        <staff>1</staff>\
        <sound dynamics="40"/>\
      </direction>\
      <note default-x="140">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
      </note>\
      <note default-x="140">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="140">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="178">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="178">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="178">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="214">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="214">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="214">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="252">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="252">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="252">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="289">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="289">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="289">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="327">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
      </note>\
      <note default-x="327">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="327">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <backup>\
        <duration>6</duration>\
      </backup>\
      <note>\
        <rest measure="yes"/>\
        <duration>6</duration>\
        <voice>2</voice>\
        <staff>2</staff>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="2" width="245">\
      <note default-x="27">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">begin</beam>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="63">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="63">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="63">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="99">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="99">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="99">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="135">\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="135">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="135">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="171">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="171">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="183">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="171">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="207">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="3">up</stem>\
        <staff>1</staff>\
        <beam number="1">end</beam>\
      </note>\
      <note default-x="207">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="219">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="207">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <backup>\
        <duration>6</duration>\
      </backup>\
      <note>\
        <rest measure="yes"/>\
        <duration>6</duration>\
        <voice>2</voice>\
        <staff>2</staff>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="3" width="303">\
      <note default-x="26">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <accidental>natural</accidental>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">begin</beam>\
      </note>\
      <note default-x="26">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="26">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="26">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="59">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="59">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="59">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="59">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="92">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="92">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="92">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="92">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="142">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="142">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="142">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="142">\
        <chord/>\
        <pitch>\
          <step>G</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="205">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="205">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="205">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="217">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="260">\
        <pitch>\
          <step>A</step>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="91">up</stem>\
        <staff>2</staff>\
        <beam number="1">end</beam>\
      </note>\
      <note default-x="260">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="260">\
        <chord/>\
        <pitch>\
          <step>E</step>\
          <alter>-1</alter>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="272">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <backup>\
        <duration>6</duration>\
      </backup>\
      <note default-x="26">\
        <pitch>\
          <step>F</step>\
          <octave>1</octave>\
        </pitch>\
        <duration>6</duration>\
        <voice>2</voice>\
        <type>half</type>\
        <dot/>\
        <stem default-y="-105.5">down</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="26">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>2</octave>\
        </pitch>\
        <duration>6</duration>\
        <voice>2</voice>\
        <type>half</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>2</staff>\
      </note>\
    </measure>\
    <!--=======================================================-->\
    <measure number="4" width="284">\
      <note default-x="27">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <accidental>flat</accidental>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">begin</beam>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="39">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="69">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="69">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="82">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="69">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="112">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="112">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="124">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="112">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="154">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="154">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="167">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="154">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="197">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">continue</beam>\
      </note>\
      <note default-x="197">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="209">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="197">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <note default-x="239">\
        <pitch>\
          <step>A</step>\
          <alter>-1</alter>\
          <octave>3</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem default-y="88.5">up</stem>\
        <staff>2</staff>\
        <beam number="1">end</beam>\
      </note>\
      <note default-x="239">\
        <chord/>\
        <pitch>\
          <step>C</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="252">\
        <chord/>\
        <pitch>\
          <step>D</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="239">\
        <chord/>\
        <pitch>\
          <step>F</step>\
          <octave>4</octave>\
        </pitch>\
        <duration>1</duration>\
        <voice>1</voice>\
        <type>eighth</type>\
        <stem>up</stem>\
        <staff>1</staff>\
      </note>\
      <backup>\
        <duration>6</duration>\
      </backup>\
      <note default-x="27">\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>1</octave>\
        </pitch>\
        <duration>6</duration>\
        <voice>2</voice>\
        <type>half</type>\
        <dot/>\
        <stem default-y="-90.5">down</stem>\
        <staff>2</staff>\
      </note>\
      <note default-x="27">\
        <chord/>\
        <pitch>\
          <step>B</step>\
          <alter>-1</alter>\
          <octave>2</octave>\
        </pitch>\
        <duration>6</duration>\
        <voice>2</voice>\
        <type>half</type>\
        <dot/>\
        <stem>down</stem>\
        <staff>2</staff>\
      </note>\
    </measure>\
  </part>\
  <!--=========================================================-->\
</score-partwise>';
