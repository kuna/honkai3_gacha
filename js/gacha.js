// CLAIM: at least one 'material' type should exist!
var ids = [
    {'type':'valkyrie', 'name':'투예복 백련', 'rare':3, 'img':'valkyrie/kiana_pt.png'},
    {'type':'valkyrie', 'name':'발키리 레인저', 'rare':4, 'img':'valkyrie/kiana_c1.png'},
    {'type':'valkyrie', 'name':'성녀의 기도', 'rare':4, 'img':'valkyrie/kiana_c3.png'},
    {'type':'valkyrie', 'name':'백기사 월광', 'rare':5, 'img':'valkyrie/kiana_c4.png'},
    
    {'type':'valkyrie', 'name':'펄스 슈트 비홍', 'rare':3, 'img':'valkyrie/mei_c2.png'},
    {'type':'valkyrie', 'name':'발키리 스트라이크', 'rare':4, 'img':'valkyrie/mei_c1.png'},
    {'type':'valkyrie', 'name':'그림자의 춤', 'rare':4, 'img':'valkyrie/mei_c3.png'},
    {'type':'valkyrie', 'name':'뇌전 여왕의 귀신 갑주', 'rare':5, 'img':'valkyrie/mei_c4.png'},
    
    {'type':'valkyrie', 'name':'발키리 채리엇', 'rare':3, 'img':'valkyrie/bronya_c1.png'},
    {'type':'valkyrie', 'name':'기동 장갑 황매화', 'rare':4, 'img':'valkyrie/bronya_c2.png'},
    {'type':'valkyrie', 'name':'설원 저격수', 'rare':4, 'img':'valkyrie/bronya_c3.png'},
    {'type':'valkyrie', 'name':'차원 경계 돌파', 'rare':5, 'img':'valkyrie/bronya_c4.png'},
    
    {'type':'valkyrie', 'name':'전장의 질풍', 'rare':3, 'img':'valkyrie/himeko_c3.png'},
    {'type':'valkyrie', 'name':'퓨전 아머 스칼렛', 'rare':4, 'img':'valkyrie/himeko_c2.png'},
    {'type':'valkyrie', 'name':'발키리 개선', 'rare':4, 'img':'valkyrie/himeko_c4.png'},
    {'type':'valkyrie', 'name':'핏빛 장미', 'rare':5, 'img':'valkyrie/himeko_c5.png'},
    
    {'type':'valkyrie', 'name':'역신 무녀', 'rare':4, 'img':'valkyrie/sakura_c1.png', 'special':true},
    {'type':'valkyrie', 'name':'진염행혼', 'rare':4, 'img':'valkyrie/sakura_c3-2.png', 'special':true},
    {'type':'valkyrie', 'name':'헌신화 물망초', 'rare':5, 'img':'valkyrie/sakura_c2.png', 'special':true},
    
    {'type':'valkyrie', 'name':'발키리 서약', 'rare':4, 'img':'valkyrie/theresa_c1_icon.png'},
    {'type':'valkyrie', 'name':'처형복 반혼초', 'rare':5, 'img':'valkyrie/theresa_c2_icon.png'},
    {'type':'valkyrie', 'name':'앵화윤무', 'rare':4, 'img':'valkyrie/theresa_c3_icon.png'},
    {'type':'valkyrie', 'name':'신은송가', 'rare':5, 'img':'valkyrie/theresa_c4_icon.png'},

    {'type':'valkyrie', 'name':'은랑의 여명', 'rare':4, 'img':'valkyrie/bronya-silver-wolf.jpg', special:true},
    {'type':'valkyrie', 'name':'이능 흑핵 침식', 'rare':5, 'img':'valkyrie/bronya_xenos_icon.png', special:true},
    {'type':'valkyrie', 'name':'후카', 'rare':4, 'img':'valkyrie/fuka_icon.png'},
    {'type':'valkyrie', 'name':'카렌', 'rare':4, 'img':'valkyrie/kallen_c1_icon.png', special:true},



    {'type':'valkyrie_piece', 'name':'투예복 백련 조각', 'rare':3, 'img':'valkyrie/kiana_pt_piece.png'},
    {'type':'valkyrie_piece', 'name':'발키리 레인저 조각', 'rare':4, 'img':'valkyrie/kiana_c1_piece.png'},
    {'type':'valkyrie_piece', 'name':'성녀의 기도 조각', 'rare':4, 'img':'valkyrie/kiana_c3_piece.png'},
    {'type':'valkyrie_piece', 'name':'백기사 월광 조각', 'rare':5, 'img':'valkyrie/kiana_c4_piece.png'},
    
    {'type':'valkyrie_piece', 'name':'펄스 슈트 비홍 조각', 'rare':3, 'img':'valkyrie/mei_c2_piece.png'},
    {'type':'valkyrie_piece', 'name':'발키리 스트라이크 조각', 'rare':4, 'img':'valkyrie/mei_c1_piece.png'},
    {'type':'valkyrie_piece', 'name':'그림자의 춤 조각', 'rare':4, 'img':'valkyrie/mei_c3_piece.png'},
    {'type':'valkyrie_piece', 'name':'뇌전 여왕의 귀신 갑주 조각', 'rare':5, 'img':'valkyrie/mei_c4_piece.png'},
    
    {'type':'valkyrie_piece', 'name':'발키리 채리엇 조각', 'rare':3, 'img':'valkyrie/bronya_c1_piece.png'},
    {'type':'valkyrie_piece', 'name':'기동 장갑 황매화 조각', 'rare':4, 'img':'valkyrie/bronya_c2_piece.png'},
    {'type':'valkyrie_piece', 'name':'설원 저격수 조각', 'rare':4, 'img':'valkyrie/bronya_c3_piece.png'},
    {'type':'valkyrie_piece', 'name':'차원 경계 돌파 조각', 'rare':5, 'img':'valkyrie/bronya_c4_piece.png'},
    
    {'type':'valkyrie_piece', 'name':'전장의 질풍 조각', 'rare':3, 'img':'valkyrie/himeko_c3_piece.png'},
    {'type':'valkyrie_piece', 'name':'퓨전 아머 스칼렛 조각', 'rare':4, 'img':'valkyrie/himeko_c2_piece.png'},
    {'type':'valkyrie_piece', 'name':'발키리 개선 조각', 'rare':4, 'img':'valkyrie/himeko_c4_piece.png'},
    {'type':'valkyrie_piece', 'name':'핏빛 장미 조각', 'rare':5, 'img':'valkyrie/himeko_c5_piece.png'},
    
    {'type':'valkyrie_piece', 'name':'역신 무녀 조각', 'rare':4, 'img':'valkyrie/sakura_c1_piece.png', 'special':true},
    {'type':'valkyrie_piece', 'name':'진염행혼 조각', 'rare':4, 'img':'valkyrie/sakura_c3-2_piece.png', 'special':true},
    {'type':'valkyrie_piece', 'name':'헌신화 물망초 조각', 'rare':5, 'img':'valkyrie/sakura_c2_piece.png', 'special':true},
    
    {'type':'valkyrie_piece', 'name':'발키리 서약 조각', 'rare':4, 'img':'valkyrie/theresa_c1_piece.png'},
    {'type':'valkyrie_piece', 'name':'처형복 반혼초 조각', 'rare':5, 'img':'valkyrie/theresa_c2_piece.png'},
    {'type':'valkyrie_piece', 'name':'앵화윤무 조각', 'rare':4, 'img':'valkyrie/theresa_c3_piece.png'},
    {'type':'valkyrie_piece', 'name':'신은송가 조각', 'rare':5, 'img':'valkyrie/theresa_c4_piece.png'},

    {'type':'valkyrie_piece', 'name':'은랑의 여명 조각', 'rare':4, 'img':'valkyrie//bronya-silver-wolf_piece.png', special:true},
    {'type':'valkyrie_piece', 'name':'이능 흑핵 침식 조각', 'rare':5, 'img':'valkyrie/bronya_xenos_piece.png', special:true},
    {'type':'valkyrie_piece', 'name':'후카 조각', 'rare':4, 'img':'valkyrie/fuka_piece.png'},
    {'type':'valkyrie_piece', 'name':'카렌 조각', 'rare':4, 'img':'valkyrie/kallen_c1_piece.png', special:true},

    
    // weapons
    {'type':'weapon', 'name':'USP45', 'rare':2, 'img':'weapon/1.png'},
    {'type':'weapon', 'name':'세이슈 무라마사', 'rare':2, 'img':'weapon/37.png'},
    {'type':'weapon', 'name':'SU-44 유탄포', 'rare':2, 'img':'weapon/72.png'},
    {'type':'weapon', 'name':'클레이모어', 'rare':2, 'img':'weapon/claymore.png'},
    {'type':'weapon', 'name':'십자가', 'rare':2, 'img':'weapon/cross.jpg'},
    {'type':'weapon', 'name':'개량형 USP', 'rare':2, 'img':'weapon/2.png'},
    {'type':'weapon', 'name':'M1911', 'rare':2, 'img':'weapon/3.png'},
    {'type':'weapon', 'name':'데저트 이글', 'rare':3, 'img':'weapon/4.png'},
    //{'type':'weapon', 'name':'콜트 피스 메이커', 'rare':3, 'img':'weapon/5.png'},
    {'type':'weapon', 'name':'개량형 콜트 아나콘다', 'rare':3, 'img':'weapon/6.png'},
    {'type':'weapon', 'name':'호리카와 쿠니히로', 'rare':3, 'img':'weapon/katana_21.png'},
    {'type':'weapon', 'name':'요도 아메무라', 'rare':3, 'img':'weapon/katana_22.png'},
    {'type':'weapon', 'name':'요도 무라마사', 'rare':3, 'img':'weapon/katana_23.png'},
    {'type':'weapon', 'name':'복합도 주작', 'rare':3, 'img':'weapon/katana_24.png'},
    {'type':'weapon', 'name':'복합도 버들', 'rare':3, 'img':'weapon/katana_25.png'},
    {'type':'weapon', 'name':'SU-40 캐넌포', 'rare':3, 'img':'weapon/cannon_21.png'},
    {'type':'weapon', 'name':'Mig-11 유도탄', 'rare':3, 'img':'weapon/cannon_22.png'},
    {'type':'weapon', 'name':'Mig-13 로켓포', 'rare':3, 'img':'weapon/cannon_23.png'},
    {'type':'weapon', 'name':'버서커 캐넌', 'rare':3, 'img':'weapon/cannon_25.png'},
    {'type':'weapon', 'name':'Mig-7 레이저 빔', 'rare':3, 'img':'weapon/cannon_24.png'},
    {'type':'weapon', 'name':'원자력 동력검 프로토타입', 'rare':3, 'img':'weapon/claymore_24.png'},
    {'type':'weapon', 'name':'에너지 클레이모어', 'rare':3, 'img':'weapon/claymore_22.png'},
    {'type':'weapon', 'name':'원자력 동력검+', 'rare':3, 'img':'weapon/claymore_23.png'},
    {'type':'weapon', 'name':'하이브리드 대검 16식', 'rare':3, 'img':'weapon/claymore_25.png'},
    {'type':'weapon', 'name':'하이브리드 대검 27식', 'rare':3, 'img':'weapon/claymore_21.png'},
    {'type':'weapon', 'name':'십자가 빙결탄', 'rare':3, 'img':'weapon/cross_21.png'},
    {'type':'weapon', 'name':'화염탄 발사대', 'rare':3, 'img':'weapon/cross_22.png'},
    {'type':'weapon', 'name':'성형탄 발사대', 'rare':3, 'img':'weapon/cross_23.png'},
    {'type':'weapon', 'name':'물의 요정 I형', 'rare':4, 'img':'weapon/7.png'},
    {'type':'weapon', 'name':'물의 요정 II형', 'rare':4, 'img':'weapon/8.png'},
    {'type':'weapon', 'name':'불의 요정 I형', 'rare':4, 'img':'weapon/9.png'},
    {'type':'weapon', 'name':'불의 요정 II형', 'rare':4, 'img':'weapon/10.png'},
    {'type':'weapon', 'name':'달신의 가호', 'rare':4, 'img':'weapon/12.png'},
    {'type':'weapon', 'name':'모신나강 태양', 'rare':4, 'img':'weapon/13.png'},
    {'type':'weapon', 'name':'다크니스 핸드건', 'rare':4, 'img':'weapon/gun_36.png'},
    {'type':'weapon', 'name':'묘도 뇌혼', 'rare':4, 'img':'weapon/katana_31.png'},
    {'type':'weapon', 'name':'묘도 뇌요', 'rare':4, 'img':'weapon/katana_32.png'},
    {'type':'weapon', 'name':'펄스 태도 17식', 'rare':4, 'img':'weapon/katana_33.png'},
    {'type':'weapon', 'name':'펄스 태도 19식', 'rare':4, 'img':'weapon/katana_34.png'},
    {'type':'weapon', 'name':'역날 결정검', 'rare':4, 'img':'weapon/katana_36.png'},
    {'type':'weapon', 'name':'열에너지 절단검', 'rare':4, 'img':'weapon/katana_37.png'},
    {'type':'weapon', 'name':'단앵', 'rare':4, 'img':'weapon/katana_38.png'},
    {'type':'weapon', 'name':'뇌폭', 'rare':4, 'img':'weapon/katana_39.png'},
    {'type':'weapon', 'name':'반역장 태도 11식', 'rare':4, 'img':'weapon/katana_311.png'},
    {'type':'weapon', 'name':'마르코프 A형', 'rare':4, 'img':'weapon/cannon_31.png'},
    {'type':'weapon', 'name':'마르코프 C형', 'rare':4, 'img':'weapon/cannon_32.png'},
    {'type':'weapon', 'name':'음극자포 07식', 'rare':4, 'img':'weapon/cannon_33.png'},
    {'type':'weapon', 'name':'음극자포 09식', 'rare':4, 'img':'weapon/cannon_34.png'},
    {'type':'weapon', 'name':'강습 미사일 스트라이커', 'rare':4, 'img':'weapon/cannon_36.png'},
    {'type':'weapon', 'name':'X-01 푸른 눈의 요르문간드', 'rare':4, 'img':'weapon/cannon_37.png'},
    {'type':'weapon', 'name':'서리의 비', 'rare':4, 'img':'weapon/cannon_38.png'},
    {'type':'weapon', 'name':'전리 공진검', 'rare':4, 'img':'weapon/claymore_31.png'},
    {'type':'weapon', 'name':'초중량 검 이무기', 'rare':4, 'img':'weapon/claymore_34.png'},
    {'type':'weapon', 'name':'딥 퍼플 나이트', 'rare':4, 'img':'weapon/claymore_36.png'},
    {'type':'weapon', 'name':'크림슨 퀸', 'rare':4, 'img':'weapon/claymore_37.png'},
    {'type':'weapon', 'name':'흑색 분쇄자', 'rare':4, 'img':'weapon/cross_31.png'},
    {'type':'weapon', 'name':'화염의 천사', 'rare':4, 'img':'weapon/cross_32.png'},
    {'type':'weapon', 'name':'낙뢰의 천사', 'rare':4, 'img':'weapon/cross_33.png'},
    
    {'type':'weapon', 'name':'2nd 성유물', 'rare':5, 'img':'weapon/21.png'},
    {'type':'weapon', 'name':'파프닐의 폭염', 'rare':5, 'img':'weapon/gun_46.png'},
    {'type':'weapon', 'name':'토르의 망치', 'rare':5, 'img':'weapon/22.png'},
    {'type':'weapon', 'name':'초전자 핸드건', 'rare':5, 'img':'weapon/23.png'},
    {'type':'weapon', 'name':'빛과 그림자', 'rare':5, 'img':'weapon/26.png'},
    {'type':'weapon', 'name':'신농의 가호', 'rare':5, 'img':'weapon/gun_43.png'},
    {'type':'weapon', 'name':'에너지 트랜스퍼', 'rare':5, 'img':'weapon/gun_49.png'},
    {'type':'weapon', 'name':'요정의 활 오리진', 'rare':5, 'img':'weapon/gun_410.png'},
    {'type':'weapon', 'name':'뇌도 귀각', 'rare':5, 'img':'weapon/gun_48.png'},
    {'type':'weapon', 'name':'3rd 성유물', 'rare':5, 'img':'weapon/57.png'},
    {'type':'weapon', 'name':'뇌절', 'rare':5, 'img':'weapon/58.png'},
    {'type':'weapon', 'name':'마그네틱 스톰 참', 'rare':5, 'img':'weapon/59.png'},
    {'type':'weapon', 'name':'영도 사쿠라 후부키', 'rare':5, 'img':'weapon/katana_315.png'},
    {'type':'weapon', 'name':'허무의 칼날', 'rare':5, 'img':'weapon/62.png'},
    {'type':'weapon', 'name':'고주파 절단도', 'rare':5, 'img':'weapon/65.png'},
    {'type':'weapon', 'name':'와호장룡', 'rare':5, 'img':'weapon/katana_waho.png'},
    {'type':'weapon', 'name':'방영도 빙담천', 'rare':5, 'img':'weapon/60.png'},
    {'type':'weapon', 'name':'요정검 실반', 'rare':5, 'img':'weapon/katana_sylvan.png'},
    {'type':'weapon', 'name':'5th 성유물', 'rare':5, 'img':'weapon/cannon_41.png'},
    {'type':'weapon', 'name':'헤카톤케일 프로토타입', 'rare':5, 'img':'weapon/cannon_42.png'},
    {'type':'weapon', 'name':'사이클롭스 프로토타입', 'rare':5, 'img':'weapon/cannon_43.png'},
    {'type':'weapon', 'name':'중장 토끼 19C', 'rare':5, 'img':'weapon/cannon_44.png'},
    {'type':'weapon', 'name':'코어 집속포 Delta', 'rare':5, 'img':'weapon/cannon_45.png'},
    {'type':'weapon', 'name':'유미르의 팔', 'rare':5, 'img':'weapon/cannon_46.png'},
    {'type':'weapon', 'name':'킹우의 갓포', 'rare':5, 'img':'weapon/cannon_48.png'},
    {'type':'weapon', 'name':'양자 파괴자 II형', 'rare':5, 'img':'weapon/cannon_412.png'},
    {'type':'weapon', 'name':'헬 파이어 III형', 'rare':5, 'img':'weapon/cannon_49.png'},
    {'type':'weapon', 'name':'화도 사나다', 'rare':5, 'img':'weapon/cannon_410.png'},
    {'type':'weapon', 'name':'티르의 잘린 팔', 'rare':5, 'img':'weapon/cannon_411.png'},
    {'type':'weapon', 'name':'니드호그의 날개 발톱', 'rare':5, 'img':'weapon/claymore_41.png'},
    {'type':'weapon', 'name':'7th 성유물', 'rare':5, 'img':'weapon/claymore_42.png'},
    {'type':'weapon', 'name':'선혈의 춤', 'rare':5, 'img':'weapon/claymore_43.png'},
    {'type':'weapon', 'name':'플레어 대검', 'rare':5, 'img':'weapon/claymore_44.png'},
    {'type':'weapon', 'name':'극광 참함도', 'rare':5, 'img':'weapon/claymore_46.png'},
    {'type':'weapon', 'name':'우귀절 나가미츠', 'rare':5, 'img':'weapon/claymore_48.png'},
    {'type':'weapon', 'name':'발뭉', 'rare':5, 'img':'weapon/claymore_4x.png'},
    {'type':'weapon', 'name':'유다의 서약', 'rare':5, 'img':'weapon/cross_41.png'},
    {'type':'weapon', 'name':'모조된 유다 피의 포옹', 'rare':5, 'img':'weapon/cross_42.png'},
    



    // stigmatas
    {'type':'stigmata', 'name':'샤론 (상)', 'rare':2, 'img':'stigmata/Salerno-1_thumb.png'},
    {'type':'stigmata', 'name':'샤론 (중)', 'rare':2, 'img':'stigmata/Salerno-2_thumb.png'},
    {'type':'stigmata', 'name':'샤론 (하)', 'rare':2, 'img':'stigmata/Salerno-3_thumb.png'},
    {'type':'stigmata', 'name':'샬럿 (상)', 'rare':2, 'img':'stigmata/Charlotte-1_thumb.png'},
    {'type':'stigmata', 'name':'샬럿 (중)', 'rare':2, 'img':'stigmata/Charlotte-2_thumb.png'},
    {'type':'stigmata', 'name':'샬럿 (하)', 'rare':2, 'img':'stigmata/Charlotte-3_thumb.png'},
    {'type':'stigmata', 'name':'한나 (상)', 'rare':3, 'img':'stigmata/Hanna-1_thumb.png'},
    {'type':'stigmata', 'name':'한나 (중)', 'rare':3, 'img':'stigmata/Hanna-2_thumb.png'},
    {'type':'stigmata', 'name':'한나 (하)', 'rare':3, 'img':'stigmata/Hanna-3_thumb.png'},
    {'type':'stigmata', 'name':'오토벨라 (상)', 'rare':3, 'img':'stigmata/Vera-1_thumb.png'},
    {'type':'stigmata', 'name':'오토벨라 (중)', 'rare':3, 'img':'stigmata/Vera-2_thumb.png'},
    {'type':'stigmata', 'name':'오토벨라 (하)', 'rare':3, 'img':'stigmata/Vera-3_thumb.png'},
    {'type':'stigmata', 'name':'루시아 (상)', 'rare':3, 'img':'stigmata/Lucia-1_thumb.png'},
    {'type':'stigmata', 'name':'루시아 (중)', 'rare':3, 'img':'stigmata/Lucia-2_thumb.png'},
    {'type':'stigmata', 'name':'루시아 (하)', 'rare':3, 'img':'stigmata/Lucia-3_thumb.png'},
    {'type':'stigmata', 'name':'비올라 (상)', 'rare':3, 'img':'stigmata/Viola-1_thumb.png'},
    {'type':'stigmata', 'name':'비올라 (중)', 'rare':3, 'img':'stigmata/Viola-2_thumb.png'},
    {'type':'stigmata', 'name':'비올라 (하)', 'rare':3, 'img':'stigmata/Viola-3_thumb.png'},
    {'type':'stigmata', 'name':'빅토리아 (상)', 'rare':3, 'img':'stigmata/Victoria-1_thumb.png'},
    {'type':'stigmata', 'name':'빅토리아 (중)', 'rare':3, 'img':'stigmata/Victoria-2_thumb.png'},
    {'type':'stigmata', 'name':'빅토리아 (하)', 'rare':3, 'img':'stigmata/Victoria-3_thumb.png'},
    {'type':'stigmata', 'name':'엘리자베스 바토리 (상)', 'rare':4, 'img':'stigmata/Elizabeth-1_thumb.png'},
    {'type':'stigmata', 'name':'엘리자베스 바토리 (중)', 'rare':4, 'img':'stigmata/Elizabeth-2_thumb.png'},
    {'type':'stigmata', 'name':'엘리자베스 바토리 (하)', 'rare':4, 'img':'stigmata/Elizabeth-3_thumb.png'},
    {'type':'stigmata', 'name':'왕소군 (상)', 'rare':4, 'img':'stigmata/Zhaojun-1_thumb.png'},
    {'type':'stigmata', 'name':'왕소군 (중)', 'rare':4, 'img':'stigmata/Zhaojun-2_thumb.png'},
    {'type':'stigmata', 'name':'왕소군 (하)', 'rare':4, 'img':'stigmata/Zhaojun-3_thumb.png'},
    {'type':'stigmata', 'name':'아틸라 (상)', 'rare':4, 'img':'stigmata/Attila-1_thumb.png'},
    {'type':'stigmata', 'name':'아틸라 (중)', 'rare':4, 'img':'stigmata/Attila-2_thumb.png'},
    {'type':'stigmata', 'name':'아틸라 (하)', 'rare':4, 'img':'stigmata/Attila-3_thumb.png'},
    {'type':'stigmata', 'name':'샤를마뉴 (상)', 'rare':4, 'img':'stigmata/Charlemagne-1_thumb.png'},
    {'type':'stigmata', 'name':'샤를마뉴 (중)', 'rare':4, 'img':'stigmata/Charlemagne-2_thumb.png'},
    {'type':'stigmata', 'name':'샤를마뉴 (하)', 'rare':4, 'img':'stigmata/Charlemagne-3_thumb.png'},
    {'type':'stigmata', 'name':'오지에 (상)', 'rare':4, 'img':'stigmata/Ogier-1_thumb.png'},
    {'type':'stigmata', 'name':'오지에 (중)', 'rare':4, 'img':'stigmata/Ogier-2_thumb.png'},
    {'type':'stigmata', 'name':'오지에 (하)', 'rare':4, 'img':'stigmata/Ogier-3_thumb.png'},
    {'type':'stigmata', 'name':'사카모토 료마 (상)', 'rare':4, 'img':'stigmata/Ryoma-1_thumb.png'},
    {'type':'stigmata', 'name':'사카모토 료마 (중)', 'rare':4, 'img':'stigmata/Ryoma-2_thumb.png'},
    {'type':'stigmata', 'name':'사카모토 료마 (하)', 'rare':4, 'img':'stigmata/Ryoma-3_thumb.png'},
    {'type':'stigmata', 'name':'니콜라 테슬라 (상)', 'rare':4, 'img':'stigmata/Tesla-1_thumb.png'},
    {'type':'stigmata', 'name':'니콜라 테슬라 (중)', 'rare':4, 'img':'stigmata/Tesla-2_thumb.png'},
    {'type':'stigmata', 'name':'니콜라 테슬라 (하)', 'rare':4, 'img':'stigmata/Tesla-3_thumb.png'},
    {'type':'stigmata', 'name':'리날도 (상)', 'rare':4, 'img':'stigmata/Rinaldo-1_thumb.png'},
    {'type':'stigmata', 'name':'리날도 (중)', 'rare':4, 'img':'stigmata/Rinaldo-2_thumb.png'},
    {'type':'stigmata', 'name':'리날도 (하)', 'rare':4, 'img':'stigmata/Rinaldo-3_thumb.png'},
    
    {'type':'stigmata', 'name':'클레오파트라 (상)', 'rare':5, 'img':'stigmata/Keriopiela-1_thumb.png'},
    {'type':'stigmata', 'name':'클레오파트라 (중)', 'rare':5, 'img':'stigmata/Keriopiela-2_thumb.png'},
    {'type':'stigmata', 'name':'클레오파트라 (하)', 'rare':5, 'img':'stigmata/Keriopiela-3_thumb.png'},
    {'type':'stigmata', 'name':'희헌원 (상)', 'rare':5, 'img':'stigmata/Xuanyuan-1_thumb.png'},
    {'type':'stigmata', 'name':'희헌원 (중)', 'rare':5, 'img':'stigmata/Xuanyuan-2_thumb.png'},
    {'type':'stigmata', 'name':'희헌원 (하)', 'rare':5, 'img':'stigmata/Xuanyuan-3_thumb.png'},
    {'type':'stigmata', 'name':'셰익스피어 (상)', 'rare':5, 'img':'stigmata/Shakespeare-1_thumb.png'},
    {'type':'stigmata', 'name':'셰익스피어 (중)', 'rare':5, 'img':'stigmata/Shakespeare-2_thumb.png'},
    {'type':'stigmata', 'name':'셰익스피어 (하)', 'rare':5, 'img':'stigmata/Shakespeare-3_thumb.png'},
    {'type':'stigmata', 'name':'예카테리나 (상)', 'rare':5, 'img':'stigmata/Ekaterina-1_thumb.png'},
    {'type':'stigmata', 'name':'예카테리나 (중)', 'rare':5, 'img':'stigmata/Ekaterina-2_thumb.png'},
    {'type':'stigmata', 'name':'예카테리나 (하)', 'rare':5, 'img':'stigmata/Ekaterina-3_thumb.png'},
    {'type':'stigmata', 'name':'이이 (상)', 'rare':5, 'img':'stigmata/LiEr-1_thumb.png'},
    {'type':'stigmata', 'name':'이이 (중)', 'rare':5, 'img':'stigmata/LiEr-2_thumb.png'},
    {'type':'stigmata', 'name':'이이 (하)', 'rare':5, 'img':'stigmata/LiEr-3_thumb.png'},
    {'type':'stigmata', 'name':'복희 (상)', 'rare':5, 'img':'stigmata/FuXi-1_thumb.png'},
    {'type':'stigmata', 'name':'복희 (중)', 'rare':5, 'img':'stigmata/FuXi-2_thumb.png'},
    {'type':'stigmata', 'name':'복희 (하)', 'rare':5, 'img':'stigmata/FuXi-3_thumb.png'},
    {'type':'stigmata', 'name':'여와 (상)', 'rare':5, 'img':'stigmata/Nuwa-1_thumb.png'},
    {'type':'stigmata', 'name':'여와 (중)', 'rare':5, 'img':'stigmata/Nuwa-2_thumb.png'},
    {'type':'stigmata', 'name':'여와 (하)', 'rare':5, 'img':'stigmata/Nuwa-3_thumb.png'},
    {'type':'stigmata', 'name':'신농 (상)', 'rare':5, 'img':'stigmata/Shennong-1_thumb.png'},
    {'type':'stigmata', 'name':'신농 (중)', 'rare':5, 'img':'stigmata/Shennong-2_thumb.png'},
    {'type':'stigmata', 'name':'신농 (하)', 'rare':5, 'img':'stigmata/Shennong-3_thumb.png'},
    {'type':'stigmata', 'name':'아이작 뉴턴 (상)', 'rare':5, 'img':'stigmata/Newton-1_thumb.png'},
    {'type':'stigmata', 'name':'아이작 뉴턴 (중)', 'rare':5, 'img':'stigmata/Newton-2_thumb.png'},
    {'type':'stigmata', 'name':'아이작 뉴턴 (하)', 'rare':5, 'img':'stigmata/Newton-3_thumb.png'},
    {'type':'stigmata', 'name':'슈뢰딩거 (상)', 'rare':5, 'img':'stigmata/Schrodinger-1_thumb.png'},
    {'type':'stigmata', 'name':'슈뢰딩거 (중)', 'rare':5, 'img':'stigmata/Schrodinger-2_thumb.png'},
    {'type':'stigmata', 'name':'슈뢰딩거 (하)', 'rare':5, 'img':'stigmata/Schrodinger-3_thumb.png'},
    {'type':'stigmata', 'name':'플랑크 (상)', 'rare':5, 'img':'stigmata/MaxPlanck-1_thumb.png'},
    {'type':'stigmata', 'name':'플랑크 (중)', 'rare':5, 'img':'stigmata/MaxPlanck-2_thumb.png'},
    {'type':'stigmata', 'name':'플랑크 (하)', 'rare':5, 'img':'stigmata/MaxPlanck-3_thumb.png'},
    {'type':'stigmata', 'name':'이이 홍 (상)', 'rare':5, 'img':'stigmata/LiEr-4_thumb.png'},
    {'type':'stigmata', 'name':'이이 홍 (중)', 'rare':5, 'img':'stigmata/LiEr-5_thumb.png'},
    {'type':'stigmata', 'name':'이이 홍 (하)', 'rare':5, 'img':'stigmata/LiEr-6_thumb.png'},
    {'type':'stigmata', 'name':'카렌 서약 (상)', 'rare':5, 'img':'stigmata/Karen-1_thumb.png'},
    {'type':'stigmata', 'name':'카렌 서약 (중)', 'rare':5, 'img':'stigmata/Karen-2_thumb.png'},
    {'type':'stigmata', 'name':'카렌 서약 (하)', 'rare':5, 'img':'stigmata/Karen-3_thumb.png'},
    {'type':'stigmata', 'name':'사나다 유키무라 (상)', 'rare':5, 'img':'stigmata/Yukimura-1_thumb.png'},
    {'type':'stigmata', 'name':'사나다 유키무라 (중)', 'rare':5, 'img':'stigmata/Yukimura-2_thumb.png'},
    {'type':'stigmata', 'name':'사나다 유키무라 (하)', 'rare':5, 'img':'stigmata/Yukimura-3_thumb.png'},
    {'type':'stigmata', 'name':'지크프리트 카스라나 (상)', 'rare':5, 'img':'stigmata/Siegfried-1_thumb.png'},
    {'type':'stigmata', 'name':'지크프리트 카스라나 (중)', 'rare':5, 'img':'stigmata/Siegfried-2_thumb.png'},
    {'type':'stigmata', 'name':'지크프리트 카스라나 (하)', 'rare':5, 'img':'stigmata/Siegfried-3_thumb.png'},
    {'type':'stigmata', 'name':'세실리아 샤나이트 (상)', 'rare':5, 'img':'stigmata/Cecilia-1_thumb.png'},
    {'type':'stigmata', 'name':'세실리아 샤나이트 (중)', 'rare':5, 'img':'stigmata/Cecilia-2_thumb.png'},
    {'type':'stigmata', 'name':'세실리아 샤나이트 (하)', 'rare':5, 'img':'stigmata/Cecilia-3_thumb.png'},
    {'type':'stigmata', 'name':'노히메 (상)', 'rare':5, 'img':'stigmata/Nouhime-1_thumb.png'},
    {'type':'stigmata', 'name':'노히메 (중)', 'rare':5, 'img':'stigmata/Nouhime-2_thumb.png'},
    {'type':'stigmata', 'name':'노히메 (하)', 'rare':5, 'img':'stigmata/Nouhime-3_thumb.png'},
    {'type':'stigmata', 'name':'아인슈타인 밴드 (상)', 'rare':5, 'img':'stigmata/Einstein-4_thumb.png'},
    {'type':'stigmata', 'name':'아인슈타인 밴드 (중)', 'rare':5, 'img':'stigmata/Einstein-5_thumb.png'},
    {'type':'stigmata', 'name':'아인슈타인 밴드 (하)', 'rare':5, 'img':'stigmata/Einstein-6_thumb.png'},
    {'type':'stigmata', 'name':'키아나 수영복 파티 (상)', 'rare':5, 'img':'stigmata/Summer2017-4_thumb.png'},
    {'type':'stigmata', 'name':'메이 수영복 파티 (중)', 'rare':5, 'img':'stigmata/Summer2017-5_thumb.png'},
    {'type':'stigmata', 'name':'브로냐 수영복 파티 (하)', 'rare':5, 'img':'stigmata/Summer2017-6_thumb.png'},
    {'type':'stigmata', 'name':'케플러 (상)', 'rare':5, 'img':'stigmata/Kepler-1_thumb.png'},
    {'type':'stigmata', 'name':'케플러 (중)', 'rare':5, 'img':'stigmata/Kepler-2_thumb.png'},
    {'type':'stigmata', 'name':'케플러 (하)', 'rare':5, 'img':'stigmata/Kepler-3_thumb.png'},
    {'type':'stigmata', 'name':'비옥환 (상)', 'rare':5, 'img':'stigmata/biokhwan-01.png'},
    {'type':'stigmata', 'name':'비옥환 (중)', 'rare':5, 'img':'stigmata/biokhwan-02.png'},
    {'type':'stigmata', 'name':'비옥환 (하)', 'rare':5, 'img':'stigmata/biokhwan-03.png'},
    {'type':'stigmata', 'name':'드라큘라 (상)', 'rare':5, 'img':'stigmata/Dracula-1_thumb.png'},
    {'type':'stigmata', 'name':'드라큘라 (중)', 'rare':5, 'img':'stigmata/Dracula-2_thumb.png'},
    {'type':'stigmata', 'name':'드라큘라 (하)', 'rare':5, 'img':'stigmata/Dracula-3_thumb.png'},



    {'type':'material', 'name':'초급 학습 칩', 'rare':4, 'img':'material/Biological-EXP-Chip.png'},
    {'type':'material', 'name':'붕괴수의 주먹', 'rare':4, 'img':'material/fund.png'},
    {'type':'material', 'name':'텅스텐 합급 흉갑', 'rare':4, 'img':'material/fund.png'},
    {'type':'material', 'name':'중급 학습 칩', 'rare':4, 'img':'material/Biological-EXP-Chip.png'},
    {'type':'material', 'name':'티타늅 합금 총신', 'rare':4, 'img':'material/fund.png'},
    {'type':'material', 'name':'붕괴수의 날개', 'rare':4, 'img':'material/fund.png'},
    {'type':'material', 'name':'항공 장갑', 'rare':4, 'img':'material/fund.png'},
    {'type':'material', 'name':'끊어진 칼자루', 'rare':4, 'img':'material/fund.png'},
    {'type':'material', 'name':'초소형 반응로', 'rare':4, 'img':'material/fund.png'},
    {'type':'material', 'name':'이리튬 점화 플러그', 'rare':4, 'img':'material/fund.png'},
    {'type':'material', 'name':'초합금 방패', 'rare':5, 'img':'material/fund.png'},
    {'type':'material', 'name':'상전이 거울', 'rare':5, 'img':'material/fund.png'},
    {'type':'material', 'name':'테슬라 터빈', 'rare':5, 'img':'material/fund.png'},
    {'type':'material', 'name':'쌍둥이 영혼 결정', 'rare':5, 'img':'material/Weapon_EXP4-icon.png'},
    {'type':'material', 'name':'쌍둥이 에테르 결정체', 'rare':5, 'img':'material/Stigmata_EXP.png'},
];


var gacha_dist_normal = {
    's_valkyrie' : 0.94, // 1.5 --> 0.94
    's_valkyrie_piece': 1.27,
    'a_valkyrie': 8.46,  // 13.5 --> 8.46
    'a_valkyrie_piece': 10.20,
    'b_valkyrie': 5.5,
    's_weapon': 0.46,
    's_stigmata': 0.73,
    'a_weapon': 7.50,
    'a_stigmata': 22.50,
    'b_weapon': 12.44,
    'b_stigmata': 24.40,
    'pickups': [],
    'material': 0,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_valkyrie = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        0.94, 3.0,   // 1.5 --> 0.94
        2.82, 4.8, 0, 0,   // 4.5 --> 2.82
        1.88, 4.0, 1.88, 4.0, 1.88, 4.0,   // 3 --> 1.88
    ],
    'material': 66,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_valkyrie2 = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        0.94, 3.0,   // 1.5 --> 0.94
        2.82, 4.8, 2.82, 4.8,   // 4.5 --> 2.82
        1.41, 1.41, 1.41, 1.41, 2.82, 0.94,   // 2.25 --> 1.41
    ],
    'material': 57,
    'special': false,
    'ensure_type': 'valkyrie',
    'ensure_level': 4,
};

var gacha_dist_weapon = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 16.275,
    'a_stigmata': 23.912,
    'b_weapon': 29.239,
    'b_stigmata': 22.179,
    // weapon, stigmata
    // weapon_others,
    // stigmata_others
    'pickups': [
        0.97, 0.485, 0.485, 0.485,
        0.16,0.16,0.16,0.16,0.16,0.16,
        0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,0.121,
    ],
    'material': 0,
    'special': false,
    'ensure_type': "pickups",
    'ensure_level': 5,
};

var gacha_jap_dist_normal = {
    's_valkyrie' : 1.50,
    's_valkyrie_piece': 1.27,
    'a_valkyrie': 13.50,
    'a_valkyrie_piece': 10.20,
    'b_valkyrie': 5.5,
    's_weapon': 0.46,
    's_stigmata': 0.73,
    'a_weapon': 7.50,
    'a_stigmata': 22.50,
    'b_weapon': 12.44,
    'b_stigmata': 24.40,
    'pickups': [],
    'material': 0,
    'special': false,
    'ensure_type': null,
    'ensure_level': 4,
};

var gacha_jap_dist_valkyrie = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        1.5, 2.5,
        4.5, 7.5, 0, 0, //4.5, 7.5,
        3.0, 3.0, 3.0, 3.0, 3.0, 3.0,
    ],
    'material': 66,
    'special': false,
    'ensure_type': null,
    'ensure_level': 4,
};

var gacha_jap_dist_valkyrie2 = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, S_piece, 
    // A, A_piece
    'pickups': [
        1.5, 2.5,
        4.5, 7.5, 4.5, 7.5, //4.5, 7.5,
        2.25, 2.25, 2.25, 2.25, 4.5, 1.5,
    ],
    'material': 57,
    'special': false,
    'ensure_type': null,
    'ensure_level': 4,
};

var gacha_jap_dist_weapon = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 15.275,
    'a_stigmata': 22.912,
    'b_weapon': 28.239,
    'b_stigmata': 21.179,
    // weapon, stigmata
    // weapon_others,
    // stigmata_others
    'pickups': [
        2.48, 1.24, 1.24, 1.24,
        0.413,0.413,0.413,0.413,0.413,0.413,
        0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.31,
    ],
    'material': 0,
    'special': false,
    'ensure_type': null,
    'ensure_level': 5,
};

/*
 * utility function
 */

function get_gacha_dist(type, all_blue)
{
    var server_normal = {
        'normal': gacha_dist_normal,
        'extended': gacha_dist_valkyrie,
        'extended2': gacha_dist_valkyrie2,
        'weapon': gacha_dist_weapon
    };
    var server_jap = {
        'normal': gacha_jap_dist_normal,
        'extended': gacha_jap_dist_valkyrie,
        'extended2': gacha_jap_dist_valkyrie2,
        'weapon': gacha_jap_dist_weapon
    };
    if (all_blue)
    {
        return server_jap[type];
    } else {
        return server_normal[type];
    }
}

function get_object_idx(name)
{
    for (var i=0; i<ids.length; i++)
    {
        if (ids[i].name == name)
            return i;
    }
    console.error('cannot find name: ' + name);
    return -1;
}




/*
 * main class Gacha
 */

var Gacha = function(dist, pickup_ids)
{
    /*
     * pickup object is excluded from general gacha!
     * (calculated with exclusive probability)
     */

    // ASSERT
    if (dist.pickups.length != pickup_ids.length)
    {
        console.error('pickup length mismatch!!');
        return;
    }

    // ensure 4-STAR gacha per 10 count
    var count = 0;
    // is previously choosed one pick-up?
    var is_pickup = false;
    var ensure_type = null;
    var ensure_level = 4;

    // generate pickup table, according to given distribution
    var range_table = {
        'valkyrie': [0,0,0,0,0],
        'valkyrie_piece': [0,0,0,0,0],
        'weapon': [0,0,0,0,0],
        'stigmata': [0,0,0,0,0],
        'pickups': [ ],
    };
    var pickup_table = {
        'valkyrie': [ [],[],[],[],[] ],
        'valkyrie_piece': [ [],[],[],[],[] ],
        'weapon': [ [],[],[],[],[] ],
        'stigmata': [ [],[],[],[],[] ],
        'material': [],
        'pickups': [ ],
    };
    // generate: category range.
    var prob_accumlated = 0;
    var prob_sum = 0;
    var prob_recalc = {'pickups':[]};
    var prob_dicts = [
        's_valkyrie','a_valkyrie','b_valkyrie',
        's_valkyrie_piece','a_valkyrie_piece',
        's_weapon', 's_stigmata','a_weapon', 'a_stigmata','b_weapon', 'b_stigmata',
        'material',
    ];
    ensure_type = dist['ensure_type'];
    ensure_level = dist['ensure_level'];
    for (var i=0; i<prob_dicts.length; i++)
    {
        var d = prob_dicts[i];
        prob_sum += dist[d];
    }
    for (var i=0; i<dist['pickups'].length; i++)
    {
        prob_sum += dist['pickups'][i];
    }
    for (var i=0; i<prob_dicts.length; i++)
    {
        var d = prob_dicts[i];
        prob_recalc[d] = dist[d] / prob_sum;
    }
    for (var i=0; i<dist['pickups'].length; i++)
    {
        prob_recalc['pickups'].push( dist['pickups'][i] / prob_sum );
    }
    prob_accumlated += prob_recalc['b_valkyrie'];
    range_table['valkyrie'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_valkyrie'];
    range_table['valkyrie'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_valkyrie'];
    range_table['valkyrie'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['a_valkyrie_piece'];
    range_table['valkyrie_piece'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_valkyrie_piece'];
    range_table['valkyrie_piece'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['b_weapon'];
    range_table['weapon'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_weapon'];
    range_table['weapon'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_weapon'];
    range_table['weapon'][4] = prob_accumlated;
    prob_accumlated += prob_recalc['b_stigmata'];
    range_table['stigmata'][2] = prob_accumlated;
    prob_accumlated += prob_recalc['a_stigmata'];
    range_table['stigmata'][3] = prob_accumlated;
    prob_accumlated += prob_recalc['s_stigmata'];
    range_table['stigmata'][4] = prob_accumlated;
    // generate: pickup
    for (var i=0; i<prob_recalc['pickups'].length; i++)
    {
        prob_accumlated += prob_recalc['pickups'][i];
        range_table['pickups'].push( prob_accumlated );
    }
    // generate: table lists
    for (var i=0; i<ids.length; i++)
    {
        var obj = ids[i];
        if (i in pickup_ids) { continue; }       // exclude pickup from general list
        if (obj.type == 'material')
        {
            // material - treated differently
            pickup_table[ obj.type ].push(obj);
            continue;
        }
        if (dist.special == false && obj.special == true) {
            // exclude some special characters (ex: sakura yae)
            continue;
        }
        pickup_table[ obj.type ][ obj.rare-1 ].push(obj);
    }
    for (var i=0; i<pickup_ids.length; i++)
    {
        pickup_table['pickups'].push( [ ids[ pickup_ids[i] ] ] );
    }
    console.log(range_table);
    console.log(pickup_table);

    var gacha = new function() {
        this._gacha = function (rnd_val) {
            var types = ['valkyrie', 'valkyrie_piece', 'weapon', 'stigmata', 'pickups'];
            var _rnd = (rnd_val===undefined)?Math.random():rnd_val;
            for (var i=0; i<types.length; i++) {
                var t = range_table[types[i]];
                for (var j=0; j< t.length; j++ )
                {
                    // is category in range?
                    if (_rnd <= t[j])
                    {
                        var lst = pickup_table[types[i]][j];
                        // prevent bug: if indicated table is empty,
                        // then exit loop
                        if (lst.length == 0)
                        {
                            console.error('indicated table is empty: '+types[i]+','+j);
                            break;
                        }
                        // if then, select in that category!
                        var _rnd = Math.random();
                        var _idx = Math.floor(lst.length * _rnd);
                        var obj = lst[_idx];
                        // if valkyrie & rank >= 4,
                        // clear count.
                        if ((types[i] == ensure_type || obj.type == ensure_type) && obj.rare >= ensure_level)
                        {
                            //console.log('가챠 스택 초기화');
                            count = 0;
                            is_pickup = true;
                        } else {
                            is_pickup = false;
                        }
                        return obj;
                    }
                }
            }
            // nothing? then you're in material!
            lst = pickup_table['material'];
            var _rnd = Math.random();
            var _idx = Math.floor(lst.length * _rnd);
            return lst[_idx];
        }

        this.ensure_gacha = function() {
            //return this._gacha(4-1);
            // repeat gacha until get 4 STAR
            while (true)
            {
                var g = this._gacha();
                if (is_pickup)
                    return g;
            }
        }

        this.gacha = function() {
            count ++;
            if (count % 10 == 0 && ensure_type != null) {
                count = 0;
                //console.log('확정 가챠 수행');
                return this.ensure_gacha();
            }
            return this._gacha();
        }
        
        this.gacha_material = function() {
            return this._gacha(999);
        }

        /*
        // re-create object instead of running clear method.
        this.clear = function() {
            count = 0;
        }
        */
    }
    return gacha;
};







/* only for probability test */
function _gacha_test()
{
	var _gacha_stat = {};
	var _gacha_stat_init = function()
	{
		_gacha_stat = {}
	}
	var _gacha_stat_append = function(g)
	{
		var type = g['type'] + g['rare'];
		if (!(type in _gacha_stat))
		{
			_gacha_stat[type] = 0;
		}
		_gacha_stat[type] += 1;
	}
	var _gacha_stat_str = function()
	{
		var tot = 0;
		var g = {};
		for (var k in _gacha_stat)
		{
			tot += _gacha_stat[k];
		}
		for (var k in _gacha_stat)
		{
			g[k] = _gacha_stat[k] / tot;
		}
		var msg = 'valkyrie-5: ' + g['valkyrie5'] + '\n' +
			'valkyrie-4: ' + g['valkyrie4'] + '\n' +
			'weapon-5: ' + g['weapon5'] + '\n' +
			'weapon-4: ' + g['weapon4'] + '\n' +
			'stigmata-5: ' + g['stigmata5'] + '\n' +
			'stigmata-4: ' + g['stigmata4'];
		return msg
	}

	//pickup_weapon
	//pickup_extended
	var epoch = 10000;

	var _g = Gacha(get_gacha_dist('normal', false), []);
	console.log('testing kor ver probability ...');	
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_normal_kor_res = _gacha_stat_str();

	_gacha = Gacha(get_gacha_dist('normal', true), []);
	console.log('testing jap ver probability ...');
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_normal_jap_res = _gacha_stat_str();



	var _g = Gacha(get_gacha_dist('weapon', false), pickup_weapon);
	console.log('testing kor ver probability ...');	
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_w_kor_res = _gacha_stat_str();

	_gacha = Gacha(get_gacha_dist('weapon', true), pickup_weapon);
	console.log('testing jap ver probability ...');
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_w_jap_res = _gacha_stat_str();



	var _g = Gacha(get_gacha_dist('extended', false), pickup_extended);
	console.log('testing kor ver probability ...');	
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_ex_kor_res = _gacha_stat_str();

	_gacha = Gacha(get_gacha_dist('extended', true), pickup_extended);
	console.log('testing jap ver probability ...');
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_ex_jap_res = _gacha_stat_str();



	var _g = Gacha(get_gacha_dist('extended2', false), pickup_extended);
	console.log('testing kor ver probability ...');	
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_ex2_kor_res = _gacha_stat_str();

	_gacha = Gacha(get_gacha_dist('extended2', true), pickup_extended);
	console.log('testing jap ver probability ...');
	_gacha_stat_init();
	for (var i=0; i<epoch; i++)
	{
		_gacha_stat_append(_g.gacha());
	}
	var gacha_ex2_jap_res = _gacha_stat_str();



	console.log("NORMAL KOR");
	console.log(gacha_normal_kor_res);
	console.log("NORMAL JAP");
	console.log(gacha_normal_jap_res);

	console.log("WEAPON KOR");
	console.log(gacha_w_kor_res);
	console.log("WEAPON JAP");
	console.log(gacha_w_jap_res);

	console.log("EX KOR");
	console.log(gacha_ex_kor_res);
	console.log("EX JAP");
	console.log(gacha_ex_jap_res);

	console.log("EX2 KOR");
	console.log(gacha_ex2_kor_res);
	console.log("EX2 JAP");
	console.log(gacha_ex2_jap_res);
}