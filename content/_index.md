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
      text: <br> Our group explores <strong>wide bandgap (WBG) and ultra-wide bandgap (UWBG)</strong> materials and devices in electronic applications.
        <br> 
        Our research interests span the physics, design, simulation, fabrication, characterization, reliability, robustess, packaging, and circuit applications of WBG and UWBG devices.
        <br> 
        Our research emphasizes on the fundamental understanding of UWB/UWBG devices, their new applications in power, RF, sensing, and computing applications, as well as the relevant material-device co-design with machine learning.
        <br> 
        Our group highlights a full-stack research scope from materials and devices to circuits and algorithms, and the seamless collaborations with the industry.
    design:
      columns: '1'
      #spacing:
        # padding: ['20px', '0', '20px', '0']
      # css_class: fullscreen
  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
      columns: '1'
  
  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: shaonv3.png
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
    
  - block: collection
    content:
      title: 📑 Journal Papers/Articles
      subtitle: "Our recent journal papers"
      count: 3
      filters:
        folders:
          - publication
        publication_type: article-journal
      more_link: ./publication/
      more_text: See all →
    design:
      view: card
      columns: '2'
      card:
        shadow: true
        border_radius: large'

  - block: collection
    content:
      title: 📰 Conference Papers  
      subtitle: "Our recent conference papers"
      count: 3
      filters:
        folders:
          - publication
        publication_type: paper-conference
      more_link: ./publication/
      more_text: See all →
    design:
      view: card
      columns: '2'
      card:
        shadow: true
        border_radius: large'
    
  # =======================
  # Meet the Team CTA
  # =======================
  - block: markdown
    content:
      text: |
        {{% cta cta_link="./people/" cta_text="👩‍🔬 Meet the team →" color="primary" %}}
    design:
      background:
        image:
          filename: beijing1.png
          text_color_light: true
      spacing:
        padding: ['80px', '0', '80px', '0']

---
