// CLAIM: at least one 'material' type should exist!
var ids = [
    {'type':'valkyrie', 'name':'투예복 백련', 'rare':3, 'img':'valkyrie/49900_i.png'},
    {'type':'valkyrie', 'name':'발키리 레인저', 'rare':4, 'img':'valkyrie/49901_i.png'},
    {'type':'valkyrie', 'name':'성녀의 기도', 'rare':4, 'img':'valkyrie/49904_i.png'},
    {'type':'valkyrie', 'name':'백기사 월광', 'rare':5, 'img':'valkyrie/49904_i.png'},
    
    {'type':'valkyrie', 'name':'펄스 슈트 비홍', 'rare':3, 'img':'valkyrie/49904_i.png'},
    {'type':'valkyrie', 'name':'발키리 스트라이크', 'rare':4, 'img':'valkyrie/49906_i.png'},
    {'type':'valkyrie', 'name':'그림자의 춤', 'rare':4, 'img':'valkyrie/49905_i.png'},
    {'type':'valkyrie', 'name':'뇌전 여왕의 귀신 갑주', 'rare':5, 'img':'valkyrie/49907_i.png'},
    
    {'type':'valkyrie', 'name':'발키리 채리엇', 'rare':3, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie', 'name':'기동 장갑 황매화', 'rare':4, 'img':'valkyrie/49909_i.png'},
    {'type':'valkyrie', 'name':'설원 저격수', 'rare':4, 'img':'valkyrie/51175_i.png'},
    {'type':'valkyrie', 'name':'차원 경계 돌파', 'rare':5, 'img':'valkyrie/49911_i.png'},
    
    {'type':'valkyrie', 'name':'전장의 질풍', 'rare':3, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie', 'name':'퓨전 아머 스칼렛', 'rare':4, 'img':'valkyrie/49909_i.png'},
    {'type':'valkyrie', 'name':'발키리 개선', 'rare':4, 'img':'valkyrie/51175_i.png'},
    {'type':'valkyrie', 'name':'핏빛 장미', 'rare':5, 'img':'valkyrie/49911_i.png'},
    
    {'type':'valkyrie', 'name':'역신 무녀', 'rare':4, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie', 'name':'진염행혼', 'rare':4, 'img':'valkyrie/49909_i.png'},
    {'type':'valkyrie', 'name':'헌신화 물망초', 'rare':5, 'img':'valkyrie/51175_i.png'},
    
    {'type':'valkyrie', 'name':'발키리 서약', 'rare':4, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie', 'name':'처형복 반혼초', 'rare':5, 'img':'valkyrie/49909_i.png'},



    {'type':'valkyrie_piece', 'name':'투예복 백련 조각', 'rare':3, 'img':'valkyrie/49900_i.png'},
    {'type':'valkyrie_piece', 'name':'발키리 레인저 조각', 'rare':4, 'img':'valkyrie/49901_i.png'},
    {'type':'valkyrie_piece', 'name':'성녀의 기도 조각', 'rare':4, 'img':'valkyrie/49904_i.png'},
    {'type':'valkyrie_piece', 'name':'백기사 월광 조각', 'rare':5, 'img':'valkyrie/49904_i.png'},
    
    {'type':'valkyrie_piece', 'name':'펄스 슈트 비홍 조각', 'rare':3, 'img':'valkyrie/49904_i.png'},
    {'type':'valkyrie_piece', 'name':'발키리 스트라이크 조각', 'rare':4, 'img':'valkyrie/49906_i.png'},
    {'type':'valkyrie_piece', 'name':'그림자의 춤 조각', 'rare':4, 'img':'valkyrie/49905_i.png'},
    {'type':'valkyrie_piece', 'name':'뇌전 여왕의 귀신 갑주 조각', 'rare':5, 'img':'valkyrie/49907_i.png'},
    
    {'type':'valkyrie_piece', 'name':'발키리 채리엇 조각', 'rare':3, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie_piece', 'name':'기동 장갑 황매화 조각', 'rare':4, 'img':'valkyrie/49909_i.png'},
    {'type':'valkyrie_piece', 'name':'설원 저격수 조각', 'rare':4, 'img':'valkyrie/51175_i.png'},
    {'type':'valkyrie_piece', 'name':'차원 경계 돌파 조각', 'rare':5, 'img':'valkyrie/49911_i.png'},
    
    {'type':'valkyrie_piece', 'name':'전장의 질풍 조각', 'rare':3, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie_piece', 'name':'퓨전 아머 스칼렛 조각', 'rare':4, 'img':'valkyrie/49909_i.png'},
    {'type':'valkyrie_piece', 'name':'발키리 개선 조각', 'rare':4, 'img':'valkyrie/51175_i.png'},
    {'type':'valkyrie_piece', 'name':'핏빛 장미 조각', 'rare':5, 'img':'valkyrie/49911_i.png'},
    
    {'type':'valkyrie_piece', 'name':'역신 무녀 조각', 'rare':4, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie_piece', 'name':'진염행혼 조각', 'rare':4, 'img':'valkyrie/49909_i.png'},
    {'type':'valkyrie_piece', 'name':'헌신화 물망초 조각', 'rare':5, 'img':'valkyrie/51175_i.png'},
    
    {'type':'valkyrie_piece', 'name':'발키리 서약 조각', 'rare':4, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie_piece', 'name':'처형복 반혼초 조각', 'rare':5, 'img':'valkyrie/49909_i.png'},

    
    // weapons
    {'type':'weapon', 'name':'USP45', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'세이슈 무라마사', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'SU-44 유탄포', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'클레이모어', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'십자가', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'개량형 USP', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'M1911', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'데저트 이글', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'콜트 피스 메이커', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'개량형 콜트 아나콘다', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'호리카와 쿠니히로', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'요도 아메무라', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'요도 무라마사', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'복합도 주작', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'복합도 버들', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'SU-40 캐넌포', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'Mig-11 유도탄', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'Mig-14 로켓포', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'버서커 캐넌', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'Mig-7 레이저 빔', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'원자력 동력검 프로토타입', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'에너지 클레이모어', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'프로토 펄스 대검', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'하이브리드 대검 47식', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'화염탄 발사대', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'성형탄 발사대', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'물의 요정 I형', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'물의 요정 II형', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'불의 요정 I형', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'불의 요정 II형', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'달신의 가호', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'모신나강 태양', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'다크니스 핸드건', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'묘도 뇌혼', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'묘도 뇌요', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'펄스 태도 17식', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'펄스 태도 19식', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'역날 결정검', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'열에너지 절단검', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'단앵', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'뇌폭', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'마르코프 A형', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'마르코프 C형', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'음극자포 07식', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'음극자포 09식', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'강습 미사일 스트라이커', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'X-01 푸른 눈의 요르문간드', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'서리의 비', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'전리 공진검', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'초중량 검 이무기', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'딥 퍼플 나이트', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'크림슨 퀸', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'흑색 분쇄자', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'화염의 천사', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'낙뢰의 천사', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'마르코프 A형', 'rare':4, 'img':'material/material_test.jpg'},
    
    {'type':'weapon', 'name':'2nd 성유물', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'토르의 망치', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'초전자 핸드건', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'빛과 그림자', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'신농의 가호', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'에너지 트랜스퍼', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'요정의 활 오리진', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'3rd 성유물', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'뇌절', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'마그네틱 스톰 참', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'반역장 태도11식', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'허무의 칼날', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'고주파 절단도', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'와호장룡', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'방영도 빙담천', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'요정검 실반', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'5th 성유물', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'사이클롭스 프로토타입', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'중장 토끼 19C', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'코어 집속포 Delta', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'유미르의 팔', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'킹우의 갓포', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'양자 파괴자 II형', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'헬 파이어 III형', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'화도 사나다', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'티르의 잘린 팔', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'니드호그의 날개 발톱', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'7th 성유물', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'선혈의 춤', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'플레어 대검', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'극광 참함도', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'우귀절 나가미츠', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'발뭉', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'weapon', 'name':'유다의 서약', 'rare':5, 'img':'material/material_test.jpg'},



    // stigmatas
    {'type':'stigmata', 'name':'샤론 (상)', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'샤론 (중)', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'샤론 (하)', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'샬럿 (상)', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'샬럿 (중)', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'샬럿 (하)', 'rare':2, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'한나 (상)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'한나 (중)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'한나 (하)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'오토벨라 (상)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'오토벨라 (중)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'오토벨라 (하)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'루시아 (상)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'루시아 (중)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'루시아 (하)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'비올라 (상)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'비올라 (중)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'비올라 (하)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'빅토리아 (상)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'빅토리아 (중)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'빅토리아 (하)', 'rare':3, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'엘리자베스 바토리 (상)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'엘리자베스 바토리 (중)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'엘리자베스 바토리 (하)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'왕소군 (상)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'왕소군 (중)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'왕소군 (하)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아틸라 (상)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아틸라 (중)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아틸라 (하)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'샤를마뉴 (상)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'샤를마뉴 (중)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'샤를마뉴 (하)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'오지에 (상)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'오지에 (중)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'오지에 (하)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'사카모토 료마 (상)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'사카모토 료마 (중)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'사카모토 료마 (하)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'니콜라 테슬라 (상)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'니콜라 테슬라 (중)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'니콜라 테슬라 (하)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'리날도 (상)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'리날도 (중)', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'리날도 (하)', 'rare':4, 'img':'material/material_test.jpg'},
    
    {'type':'stigmata', 'name':'클레오파트라 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'클레오파트라 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'클레오파트라 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'희헌원 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'희헌원 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'희헌원 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'셰익스피어 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'셰익스피어 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'셰익스피어 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'예카테리나 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'예카테리나 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'예카테리나 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'이이 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'이이 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'이이 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'복희 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'복희 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'복희 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'여와 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'여와 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'여와 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'신농 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'신농 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'신농 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아이작 뉴턴 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아이작 뉴턴 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아이작 뉴턴 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'슈뢰딩거 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'슈뢰딩거 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'슈뢰딩거 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'플랑크 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'플랑크 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'플랑크 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'이이 홍 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'이이 홍 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'이이 홍 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'카렌 서약 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'카렌 서약 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'카렌 서약 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'사나다 유키무라 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'사나다 유키무라 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'사나다 유키무라 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'지크프리트 카스라나 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'지크프리트 카스라나 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'지크프리트 카스라나 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'세실리아 샤나이트 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'세실리아 샤나이트 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'세실리아 샤나이트 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'노히메 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'노히메 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'노히메 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아인슈타인 밴드 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아인슈타인 밴드 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'아인슈타인 밴드 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'키아나 수영복 파티 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'메이 수영복 파티 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'브로냐 수영복 파티 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'케플러 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'케플러 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'케플러 (하)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'비옥환 (상)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'비옥환 (중)', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'stigmata', 'name':'비옥환 (하)', 'rare':5, 'img':'material/material_test.jpg'},



    {'type':'material', 'name':'초급 학습 칩', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'붕괴수의 주먹', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'텅스텐 합급 흉갑', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'중급 학습 칩', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'티타늅 합금 총신', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'붕괴수의 날개', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'항공 장갑', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'끊어진 칼자루', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'초소형 반응로', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'이리튬 점화 플러그', 'rare':4, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'초합금 방패', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'상전이 거울', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'테슬라 터빈', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'쌍둥이 영혼 결정', 'rare':5, 'img':'material/material_test.jpg'},
    {'type':'material', 'name':'쌍둥이 에테르 결정체', 'rare':5, 'img':'material/material_test.jpg'},
];


var gacha_dist_normal = {
    's_valkyrie' : 1.50,
    's_valkyrie_piece': 1.47,
    'a_valkyrie': 14.50,
    'a_valkyrie_piece': 10.40,
    'b_valkyrie': 5.5,
    's_weapon': 0.46,
    's_stigmata': 0.74,
    'a_weapon': 7.50,
    'a_stigmata': 44.50,
    'b_weapon': 14.44,
    'b_stigmata': 44.40,
    'pickups': [],
    'material': 0,
};

var gacha_dist_valkyrie = {
    's_valkyrie' : 1.50 - 1.5,
    's_valkyrie_piece': 4.50 - 4.5,
    'a_valkyrie': 14.50 - 4.5,
    'a_valkyrie_piece': 16.50 - 7.5,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, A, S_piece, A_piece
    'pickups': [1.5, 4.5, 4.5, 7.5],
    'material': 66,
};

var gacha_dist_weapon = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 4.96 - 4.48,
    's_stigmata': 7.44 - 1.44*4,
    'a_weapon': 15.475,
    'a_stigmata': 44.914,
    'b_weapon': 48.449,
    'b_stigmata': 41.179,
    // weapon, stigmata
    'pickups': [4.48, 1.44, 1.44, 1.44],
    'material': 0,
};

var Gacha = function(dist, pickup_ids) {
    /*
     * pickup object is excluded from general gacha!
     * (calculated with exclusive probability)
     */

    // ensure 4-STAR gacha per 10 count
    var count = 0;

    // generate pickup table, according to given distribution
    var range_table = {
        'valkyrie': [0,0,0,0,0],
        'valkyrie_piece': [0,0,0,0,0],
        'weapon': [0,0,0,0,0],
        'stigmata': [0,0,0,0,0],
        'pickups': [],
    };
    var pickup_table = {
        'valkyrie': [ [],[],[],[],[] ],
        'valkyrie_piece': [ [],[],[],[],[] ],
        'weapon': [ [],[],[],[],[] ],
        'stigmata': [ [],[],[],[],[] ],
        'material': [],
        'pickups': [],
    };
    // generate: category range.
    var prob_accumlated = 0;
    var prob_sum = 0;
    var prob_recalc = {};
    for (var i in dist) {
        prob_sum += dist[i];
    }
    for (var i in dist) {
        prob_recalc[i] = dist[i] / prob_sum;
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
        { pickup_table[ obj.type ].push(obj); continue; }
        pickup_table[ obj.type ][ obj.rare-1 ].push(obj);
    }
    pickup_table['pickups'] = pickup_ids;
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
                        lst = pickup_table[types[i]][j];
                        // prevent bug: if indicated table is empty,
                        // then exit loop
                        if (lst.length == 0)
                        {
                            console.error('indicated table is empty: '+types[i]+','+j);
                            break;
                        }
                        // if valkyrie & rank >= 4,
                        // clear count.
                        if (types[i] == 'valkyrie' && j >= 4)
                        {
                            count = 0;
                        }
                        // if then, select in that category!
                        var _rnd = Math.random();
                        var _idx = Math.floor(lst.length * _rnd);
                        return lst[_idx];
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
                if (g.rare >= 4 && g.type != 'valkyrie_piece')
                    return g;
            }
        }

        this.gacha = function() {
            var r = this._gacha();
            count++;
            if (count % 10 == 0) {
                r = this.ensure_gacha();
                count = 0;
            }
            return r;
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