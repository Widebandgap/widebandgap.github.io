---
# Leave the homepage title empty to use the site title
title: Wide Bandgap Electronics Group
date: 2025-08-30
type: landing

sections: 
  - block: slider
    content:
      slides:
  #    - title: 👋 Welcome to Wide Bandgap Electronics Group！
  #      content: Take a look at what we are working on ....
  #      align: center
  #      background:
  #        image:
  #          filename: coders.jpg
  #          filters:
  #            brightness: 0.7
  #        position: right
  #        color: '#666'
  #      link:
  #        icon: graduation-cap
  #        icon_pack: fas
  #        text: Join Us
  #        url: ../contact/
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

  - block: markdown
    content:
      #title: 11111
      #subtitle: ''
      text: Our group mainly explores wide-bandgap (WBG) and ultra-wide bandgap (UWBG) materials, devices, and circuits for next-generation electronics applications. Our current research focuses on a few major areas:&nbsp;(1) WBG semiconductors for power and RF electronics; (2) Power device reliability and robustness, packaging, circuit-level integration, and system-level applications; (3) Machine learning assisted material-device-circuit co-design; (4) WBG and UWBG materials and devices for electronic, photonic, biological and quantum applications; (5) Devices, circuits and systems for extreme environment applications.
        <br><br>
        Our group mainly published in the communities of Electron Devices and Power Electronics. Here is a sketch of the group's major corresponding-authored papers till Aug. 2025.
        <br>
        <ol>
        <li>Electron Devices:&nbsp;IEDM (21), ISPSD (12), IRPS (7), IEEE Electron Device Lett. (21), Appl. Phys. Lett. (14), IEEE Trans. Electron Devices (16)</li>  
        <br>
        <li>Power Electronics:&nbsp;IEEE Trans. Power Electronics (21), IEEE J. Emerg. Sel. Top. Power Electron. (3), APEC (16), ECCE (7)</li>
        <br>
        <li>Broad Fields:&nbsp;Nat. Electron. (1), Nat. Commun. (1), Nat. Rev. Electr. Eng. (1), Adv. Mater. (1)</li>
        </ol>
        <br><br>
        We typically have openings for PhD students, postdoctoral researchers, and visiting scholars with backgrounds in cleanroom fabrication, semiconductor devices, and power electronics circuits. Most PhD students admitted to our group have prior publications in the relevant fields. If you are interested, please contact Professor Yuhao Zhang. Although the peak PhD application season is from September to December, we accept applications year-round. We provide full financial support to all PhD students and also assist with applications to the Hong Kong PhD Fellowship Scheme and the HKU Presidential PhD Scholar Programme.
        <br><br>
        <strong>Related Links:</strong>  
        <br>
        <strong>•</strong> [Google Scholar](https://scholar.google.com/citations?user=MqrZiqUAAAAJ&hl=en)
        <br>
        <strong>•</strong> [Yuhao ZHANG's Departmental Homepage](https://www.eee.hku.hk/people/y-zhang/)
        <br><br>
        <strong>Selected Publications:</strong>
        <br>
        <strong>•</strong>  Y. Qin, Z. Yang, H. Gong, A. Jacobs, J. Spencer, M. Porter, B. Wang, K. Sasaki, C-H. Lin, M. Tadjer, and Y. Zhang*, “10 kV,  250 oC Operational, Enhancement-Mode Ga2O3 JFET with Charge-Balance and Hybrid-Drain Designs,” <strong><em>2024 IEEE International Electron Devices Meeting (IEDM)</em></strong>, Dec. 2024 (selected as the <strong>IEDM Technical Highlight</strong>)  
        <br>
        <strong>•</strong>  X. Yang, R. Zhang, Q. Yang, Q. Song, E. Litchford, A. J. Walker, S. Pidaparthi, C. Drowley, D. Dong, Q. Li, and Y. Zhang*, “Evaluation and MHz Converter Application of 1.2-kV Vertical GaN JFET,” <strong><em>IEEE Transactions on Power Electronics</em></strong>, vol. 39, no. 12, pp. 15720–15731, Dec. 2024.
        <br>
        <strong>•</strong>  M. Xiao, Y. Wang, R. Zhang, Q. Song, M. Porter, E. Carlson, K. Cheng, K. Ngo, and Y. Zhang*, “Robust Avalanche in 1.7 kV Vertical GaN Diodes With a Single-Implant Bevel Edge Termination,” <strong><em>IEEE Electron Device Letters</em></strong>, vol. 44, no. 10, pp. 1616–1619, Oct. 2023. (<strong>2023 IEEE George Smith Award</strong>)
        <br>
        <strong>•</strong>  Y. Zhang*, F. Udrea*, and H. Wang*, “Multidimensional device architectures for efficient power electronics,” <strong><em>Nature Electronics</em></strong>, vol. 5, no. 11, Nov. 2022.
        <br>
        <strong>•</strong>  Xiao, Y. Ma, Z. Du, V. Pathirana, K. Cheng, A. Xie, E. Beam, Y. Cao, F. Udrea, H. Wang, and Y. Zhang*, “Multi-Channel Monolithic-Cascode HEMT (MC2-HEMT):&nbsp;A New GaN Power Switch up to 10 kV,” <strong><em>2021 IEEE International Electron Devices Meeting (IEDM)</em></strong>, Dec. 2021. (selected as the IEDM Technical Highlight, covered by Nature Electronics).
        <br><br>
        <strong>Major Awards of the Group:</strong>
        <br>
    
    design:
      columns: '1'
      background:
        # color: '#e6f0ff'  
        text_color_light: false
      #spacing:
        # padding: ['20px', '0', '20px', '0']
      # css_class: fullscreen

  

  
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
