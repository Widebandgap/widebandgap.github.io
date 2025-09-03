---
title: People
date: 2022-10-24

type: landing

sections:
  - block: people
    content:
      title: Meet the Team
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - Professor 
          - Current Members  
          - Alumni                  # 校友
    
      sort_by: Params.last_name     # 按姓氏排序
      sort_ascending: true          # 升序排列
    design:
      show_interests: false  # 不显示兴趣
      show_role: true        # 显示角色
      show_social: true      # 显示社交媒体链接
    
  - block: markdown
    content:
      title: ''
      subtitle: ''
      text: <br> <strong>Graduate from Virginia Tech:</strong>  
        <br>
        <ol>
        <il>Joseph Kozak (PhD, now with Johns Hopkins University Applied Physics Laboratory)</il>
        <il>Noah Allen (PhD, now with Lawrence Livermore National Laboratory)</il>
        <il>Ruizhe Zhang (PhD, now with Tesla)</il>
        <il>Yunwei Ma (PhD, now with Texas Instrument)</il>
        <il>Boyan Wang (PhD, now with Microchip)</il>
        <il>Dr. Ming Xiao (postdoc, now professor at Xidian University)</il>
        <il>Jingcun Liu (visiting student, now with Infineon)</il>
        <il>Keyue Shan (M(Eng), now with Renesas Electronics)</il>
        <il>Haoshen Yang (M(Eng), now with Analog Devices)</il>
        <il>Rongxing Tang (visiting student, now with UT Austin)</il>
        <il>Qihao Song (PhD and postdoc, now with Monolithic Power Systems)</il>
        <il>Joe Spencer (PhD, now with Elbit Systems)</il>
        <il>Yifan Wang (ongoing PhD)</il>
        <il>Bixuan Wang (ongoing PhD)</il>
        <il>Jessie Guo (MSc, now with OnSemi)</il>
        <il>Dr. Yuan Qin (ongoing postdoc)</il>
        <il>Matthew Porter (ongoing PhD)</il>
        </ol>
        <br>
    design:
      columns: '2'
      background:
        color: '#ffffff'  
        text_color_light: false
      #spacing:
        # padding: ['20px', '0', '20px', '0']
      # css_class: fullscreen

  - block: markdown
    content:
      text: |
        <p style="text-align:center">
        <font size=3> © 2025 Prof. Yuhao Zhang at Wide Bandgap Electronics Group | Department of EEE | HKU | Built with <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener">CC BY NC ND 4.0</a> </font>
        </p>
    design:
      align: center
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
