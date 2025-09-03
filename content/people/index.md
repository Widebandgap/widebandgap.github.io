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
          - Current Postdoctoral Fellows
          - Current PhD Students  
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
        <li>Joseph Kozak (PhD, now with Johns Hopkins University Applied Physics Laboratory)</li>
        <li>Noah Allen (PhD, now with Lawrence Livermore National Laboratory)</li>
        <li>Ruizhe Zhang (PhD, now with Tesla)</li>
        <li>Yunwei Ma (PhD, now with Texas Instrument)</li>
        <li>Boyan Wang (PhD, now with Microchip)</li>
        <li>Dr. Ming Xiao (postdoc, now professor at Xidian University)</li>
        <li>Jingcun Liu (visiting student, now with Infineon)</li>
        <li>Keyue Shan (M(Eng), now with Renesas Electronics)</li>
        <li>Haoshen Yang (M(Eng), now with Analog Devices)</li>
        <li>Rongxing Tang (visiting student, now with UT Austin)</li>
        <li>Qihao Song (PhD and postdoc, now with Monolithic Power Systems)</li>
        <li>Joe Spencer (PhD, now with Elbit Systems)</li>
        <li>Yifan Wang (ongoing PhD)</li>
        <li>Bixuan Wang (ongoing PhD)</li>
        <li>Jessie Guo (MSc, now with OnSemi)</li>
        <li>Dr. Yuan Qin (ongoing postdoc)</li>
        <li>Matthew Porter (ongoing PhD)</li>
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
