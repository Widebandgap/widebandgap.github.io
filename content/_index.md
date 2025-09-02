---
# Leave the homepage title empty to use the site title
title: Wide Bandgap Electronics Group
date: 2025-08-30
type: landing

sections: 
  - block: markdown
    content:
      title: Wide Bandgap Electronics Group
      subtitle: ''
      text: <br><br>
        Our group investigates <strong>wide bandgap (WBG)</strong> and <strong>ultra-wide bandgap (UWBG)</strong> materials and devices for next-generation electronic applications.
        <br><br>
        <strong>Research Focus:</strong>  
        <br><br>
        <strong>·</strong> Physics, design, simulation, fabrication, characterization, reliability, robustness, packaging, and circuit applications of WBG and UWBG devices.
        <br>
        <strong>·</strong> Emphasis on the fundamental understanding of UWB/UWBG devices, their new applications in power, RF, sensing, and computing applications, as well as the relevant material-device co-design with machine learning.
        <br>
        <strong>·</strong> Full-stack research scope from materials and devices to circuits and algorithms, and the seamless collaborations with the industry.  
    design:
      columns: '1'
      background:
        # color: '#e6f0ff'  
        text_color_light: false
      #spacing:
        # padding: ['20px', '0', '20px', '0']
      # css_class: fullscreen

  - block: slider  
    content:
      slides:
      - title: 👋 Welcome to Wide Bandgap Electronics Group！
        content: Take a look at what we are working on ....
        align: center
        background:
          image:
            filename: coders.jpg
            filters:
              brightness: 0.7
          position: right
          color: '#666'
        link:
          icon: graduation-cap
          icon_pack: fas
          text: Join Us
          url: ../contact/
      - title: 
        content: 
        align: left
        background:
          image:
            filename: tour1.jpg
            filters:
              brightness: 1.0
          position: center
          color: '#000'
      - title:
        content:
        align: right
        background:
          image:
            filename: tour2.jpg
            filters:
              brightness: 1.0
          position: center
          color: '#000'
        
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '600px'
      is_fullscreen: false
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      autoplay: true
      interval: 4000
  
  - block: collection
    id: journals
    content:
      title: "📑 Journal Papers/Articles"
      subtitle: "Our newest journal papers"
      count: 3
      filters:
        folders: [publication]
        publication_type: article-journal
      archive:
        enable: true
        text: "See all"
        link: "/publication/"
    design:
      view: card
      columns: '2'
      card:
        shadow: true
        border_radius: large
      css_class: journals-block    # 新增：自定义 class
    
  - block: collection
    content:
      title: 📰 Conference Papers  
      subtitle: "Our newest conference papers"
      count: 3
      filters:
        folders: [publication]
        publication_type: paper-conference
      archive:
        enable: true
        text: "See all"
        link: "/publication/"
    design:
      view: card
      columns: '2'
      card:
        shadow: true
        border_radius: large'
      css_class: conference-block    # 新增：自定义 class

  - block: markdown
    content:
      text: © 2025 Prof. Yuhao Zhang at Wide Bandgap Electronics Group|Department of EEE|HKU|Built with [CC BY NC ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
    design:
      background:
        image:
          filename: background.jpg
          text_color_light: false
          size: auto 530px
          parallax: false
        position: center
        spacing:
          padding: ['0', '80px', '0', '80px']

---
