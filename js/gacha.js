// CLAIM: at least one 'material' type should exist!
var ids = [
    {'type':'valkyrie', 'name':'투예복 백련', 'rare':3, 'img':'valkyrie/49900_i.png'},
    {'type':'valkyrie', 'name':'발키리 레인저', 'rare':4, 'img':'valkyrie/49901_i.png'},
    {'type':'valkyrie', 'name':'성녀의 기도', 'rare':4, 'img':'valkyrie/49903_i.png'},
    {'type':'valkyrie', 'name':'백기사 월광', 'rare':5, 'img':'valkyrie/49902_i.png'},
    
    {'type':'valkyrie', 'name':'펄스 슈트 비홍', 'rare':3, 'img':'valkyrie/49904_i.png'},
    {'type':'valkyrie', 'name':'발키리 스트라이크', 'rare':4, 'img':'valkyrie/49906_i.png'},
    {'type':'valkyrie', 'name':'그림자의 춤', 'rare':4, 'img':'valkyrie/49905_i.png'},
    {'type':'valkyrie', 'name':'뇌전 여왕의 귀신 갑주', 'rare':5, 'img':'valkyrie/49907_i.png'},
    
    {'type':'valkyrie', 'name':'발키리 채리엇', 'rare':3, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie', 'name':'기동 장갑 황매화', 'rare':4, 'img':'valkyrie/49909_i.png'},
    {'type':'valkyrie', 'name':'설원 저격수', 'rare':4, 'img':'valkyrie/51175_i.png'},
    {'type':'valkyrie', 'name':'차원 경계 돌파', 'rare':5, 'img':'valkyrie/49911_i.png'},



    {'type':'valkyrie_piece', 'name':'투예복 백련 조각', 'rare':3, 'img':'valkyrie/49900_i.png'},
    {'type':'valkyrie_piece', 'name':'발키리 레인저 조각', 'rare':4, 'img':'valkyrie/49901_i.png'},
    {'type':'valkyrie_piece', 'name':'성녀의 기도 조각', 'rare':4, 'img':'valkyrie/49903_i.png'},
    {'type':'valkyrie_piece', 'name':'백기사 월광 조각', 'rare':5, 'img':'valkyrie/49902_i.png'},
    
    {'type':'valkyrie_piece', 'name':'펄스 슈트 비홍 조각', 'rare':3, 'img':'valkyrie/49904_i.png'},
    {'type':'valkyrie_piece', 'name':'발키리 스트라이크 조각', 'rare':4, 'img':'valkyrie/49906_i.png'},
    {'type':'valkyrie_piece', 'name':'그림자의 춤 조각', 'rare':4, 'img':'valkyrie/49905_i.png'},
    {'type':'valkyrie_piece', 'name':'뇌전 여왕의 귀신 갑주 조각', 'rare':5, 'img':'valkyrie/49907_i.png'},
    
    {'type':'valkyrie_piece', 'name':'발키리 채리엇 조각', 'rare':3, 'img':'valkyrie/49908_i.png'},
    {'type':'valkyrie_piece', 'name':'기동 장갑 황매화 조각', 'rare':4, 'img':'valkyrie/49909_i.png'},
    {'type':'valkyrie_piece', 'name':'설원 저격수 조각', 'rare':4, 'img':'valkyrie/51175_i.png'},
    {'type':'valkyrie_piece', 'name':'차원 경계 돌파 조각', 'rare':5, 'img':'valkyrie/49911_i.png'},


    {'type':'material', 'name':'재료(테스트)', 'rare':2, 'img':'material/material_test.jpg'},
];


var gacha_dist_normal = {
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
};

var gacha_dist_valkyrie = {
    's_valkyrie' : 1.50 - 1.5,
    's_valkyrie_piece': 2.50 - 2.5,
    'a_valkyrie': 13.50 - 4.5,
    'a_valkyrie_piece': 16.50 - 7.5,
    'b_valkyrie': 0,
    's_weapon': 0,
    's_stigmata': 0,
    'a_weapon': 0,
    'a_stigmata': 0,
    'b_weapon': 0,
    'b_stigmata': 0,
    // S, A, S_piece, A_piece
    'pickups': [1.5, 4.5, 2.5, 7.5],
    'material': 66,
};

var gacha_dist_weapon = {
    's_valkyrie' : 0,
    's_valkyrie_piece': 0,
    'a_valkyrie': 0,
    'a_valkyrie_piece': 0,
    'b_valkyrie': 0,
    's_weapon': 4.96 - 2.48,
    's_stigmata': 7.44 - 1.24*3,
    'a_weapon': 15.275,
    'a_stigmata': 22.912,
    'b_weapon': 28.239,
    'b_stigmata': 21.179,
    // weapon, stigmata
    'pickups': [2.48, 1.24, 1.24, 1.24],
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
    //console.log(range_table);
    //console.log(pickup_table);

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
                        console.log(lst);
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