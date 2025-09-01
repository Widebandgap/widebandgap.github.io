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
      text: <br> <strong>Graduate from VirginiaTech: </strong>
        <br>
        Dr. Ming Xiao
        <br> 
        Yunwei Ma
        <br> 
        Ruizhe Zhang
        <br> 
        Joseph Kozak
        <br>
        Noah Allen
        <br>
        Jingcun Liu
        <br>
        Keyue Shan
        <br>
        Haoshen Yang
        <br>
        Sheyang Chen
        <br>
        Rongxing Tang
        <br>
        Dr. Yuan Qin
        <br>
        Boyan Wang
        <br>
        Qihao Song
        <br>
        Joe Spencer
        <br>
        Yifan Wang
        <br>
        Bixuan Wang
        <br>
        Jessie Guo
        <br>
        Matthew Porter
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
      text: <h1> © 2025 Prof. Yuhao Zhang at Wide Bandgap Electronics Group|Department of EEE|HKU|Built with [CC BY NC ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)
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
