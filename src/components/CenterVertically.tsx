/* eslint-disable @typescript-eslint/no-explicit-any */
/*

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Cover Component [WIP]
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁

Based on concept in Every Layout [https://every-layout.dev/layouts/cover/](https://every-layout.dev/layouts/cover/)
For more detail, see note in Obsidian.


Visual Overview
⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺⎺

╔━━━━━━━━━━━━━━━━━━━━━━━━╗
║   View        h:  700  ║
╠════════════════════════╣
║╒══════════════════════╕║  
║│  Header      t:    0 │║  cover element h calculation:
║│              h:  150 │║  1. from bottom edge of header
║╘══════════════════════╛║ 🢀━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║╒══════════════════════╕║  
║│  h: 500†     t:  150 │║  
║│                      │║  
║│  Cover       c:  400 │║  <-      vertical center         
║│  Element             │║  
║│              b:  650 │║           
║╘══════════════════════╛║
║╒══════════════════════╕║ 🢀━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
║│  Footer      h:   50 │║  2. to top edge of footer
║╘══════════════════════╛║ 
╚━━━━━━━━━━━━━━━━━━━━━━━━╝
†: viewport.height - header.height - footer.height = cover.height
   700px - 150px - 50px 
——————————————————————————————————————————————————————————————————————

*/

/* 
 
REQUIRES CSS FROM styles/center-vertically.css to work. Need to somehow integrate that css into the component in this file 
so component is self-contained / encapsulated.

*/

import { type ReactElement } from "react";

interface CenterVerticallyProps {
  // Element to be placed in the center of the CenterVertically
  children: ReactElement;
  // AboveCenterVertically == An optional element, like a header, that should be rendered above the CenterVertically
  AboveCentered?: ReactElement<any, any> | null;
  // BelowCenterVertically == An optional element, like a footer, that should be rendered below the CenterVertically;
  BelowCentered?: ReactElement<any, any> | null;
}

const CenterVertically = (props: CenterVerticallyProps) => {
  const { AboveCentered, BelowCentered, children } = props;

  // AboveCentered.style.position = "absolute";
  // FIXME: at the moment, I'm not getting a lint error if we attempt to access AboveCentered without checking if it's defined.
  // surely typescript should warn us about this?

  console.log(AboveCentered);

  return (
    <div className="hero-cover">
      {AboveCentered}
      {/* {<div>{AboveCentered}</div> ?? ""} */}
      {/* {<div>{AboveCentered}</div>} */}
      {children}
      {BelowCentered ? BelowCentered : ""}
    </div>
  );
};

export { CenterVertically };
