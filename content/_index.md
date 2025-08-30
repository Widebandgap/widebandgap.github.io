---
# Leave the homepage title empty to use the site title
title: Wide Bandgap Electronics Group
date: 2025-08-30
type: landing

sections:
  # =======================
  # Hero 区块（首页横幅）
  # =======================
  - block: hero
    content:
      title: |
        Wide Bandgap  
        Electronics Group
      # image:
        # filename: cat1.jpg
      text: |
        <br>
        Our group explores <strong>wide bandgap (WBG) and ultra-wide bandgap (UWBG)</strong> materials and devices in electronic applications. 
        <br>
        Our research interests span the physics, design, simulation, fabrication, characterization, reliability, robustess, packaging, and circuit applications of WBG and UWBG devices.
        <br>
        Our research emphasizes on the fundamental understanding of UWB/UWBG devices, their new applications in power, RF, sensing, and computing applications, as well as the relevant material-device co-design with machine learning.
        <br>
        Our group highlights a full-stack research scope from materials and devices to circuits and algorithms, and the seamless collaborations with the industry.
        <br>
      buttons:
        - label: Learn More
          url: ./research/
          is_primary: true
        - label: Contact Us
          url: ./contact/
          is_primary: false
    design:
      background:
        image:
          filename: shaonv2.png
          overlay_color: "#000000"
          overlay_opacity: 0.45
        text_color_light: true

  # =======================
  # Latest News
  # =======================
  - block: collection
    content:
      title: 📰 Latest News
      subtitle: "Stay updated with our latest announcements and achievements"
      count: 6
      page_type: post
    design:
      view: card
      columns: '2'
      card:
        shadow: true
        border_radius: large

  # =======================
  # 中间 Banner（背景图宣传）
  # =======================
  - block: markdown
    content:
      text: |
        ## Pioneering the Future of Wide Bandgap Electronics  
        <span style="font-size:18px">From **materials** to **circuits** — full-stack innovation.</span>
    design:
      background:
        image: 
          filename: 486.jpg
          filters:
            brightness: 0.9
          parallax: true
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['60px', '0', '60px', '0']
      css_class: fullscreen

  # =======================
  # Latest Preprints
  # =======================
  - block: collection
    content:
      title: 📑 Latest Preprints
      subtitle: "Our recent publications and preprints"
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
      more_link: ./publication/
      more_text: See all →
    design:
      view: card
      columns: '2'
      card:
        shadow: true
        border_radius: large

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
          filename: welcome.jpg
          text_color_light: true
      spacing:
        padding: ['80px', '0', '80px', '0']
---
