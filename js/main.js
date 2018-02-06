
var gacha = Gacha(gacha_dist_normal, []);

var stats = {
    'valkyrie': [0,0,0,0,0],
    'valkyrie_piece': [0,0,0,0,0],
    'stigmata': [0,0,0,0,0],
    'weapon': [0,0,0,0,0],
    'material': [0,0,0,0,0],
    'jewel': 0,
    'count': 0
};

function do_showvideo(v)
{
    console.log('video show');
    $('#sceneresult').hide();
    $("#scenedokidoki").show();
    $("#scenedokidoki video").trigger('play');
}

function do_endvideo(v)
{
    console.log('video end');
    $("#scenedokidoki").hide();
    $("#scenedokidoki video").trigger('pause');
    $("#scenedokidoki video")[0].currentTime = 0;
}
function do_gacha(v)
{
    console.log('gacha');
    $('#sceneresult').show();

    var bg_cls = ["","lv1","lv2","lv2","lv3"];
    var rare = ["","★★","★★★","★★★★","★★★★★"];

    var r = gacha.gacha();
    var imgsrc = 'img/'+r.img;
    $('#pic_img_l').attr('src', imgsrc);
    $('#name_l').text(r.name);
    $('#rare_l').text(rare[r.rare-1]);
    $('#r_left').attr('class', 'resultbg r_left '+bg_cls[r.rare-1]);

    // add to material list
    $('#items').append( '<div class="item itemtype-'+r.type+' itemrare'+r.rare+'"><img src="'+ imgsrc + '"><div class="hidden desc">'+r.name+'</div></div>' );
    
    // update gacha tables
    stats[r.type][r.rare-1] += 1;
    stats['jewel'] += 280;
    stats['count'] += 1;
    updatestat();

    // just a simple material (right side)
    r = gacha.gacha_material();
    $('#pic_img_r').attr('src', 'img/'+r.img);
    $('#name_r').text(r.name);
    $('#rare_r').text(rare[r.rare-1]);
    $('#r_right').attr('class', 'resultbg r_right '+bg_cls[r.rare-1]);
}

// --------------

function runevent(event)
{
    var actiontable = {
        'video': do_showvideo,
        'endvideo': do_endvideo,
        'gacha': do_gacha,
    };
    return actiontable[event.action](event.value);
}

var events = [];
var event_handle = null;

function _runevents()
{
    // internal function, DO NOT call this directly!
    if (events.length == 0)
    {
        stopevents();
        return;
    }
    e = events[0];
    events.shift();
    runevent(e);
    event_handle = setTimeout(function(){ _runevents(); }, e.time);
}

function updatestat()
{
    $('#stig5').text(stats['stigmata'][4]);
    $('#stig4').text(stats['stigmata'][3]);
    $('#stig3').text(stats['stigmata'][2]);
    $('#wea5').text(stats['weapon'][4]);
    $('#wea4').text(stats['weapon'][3]);
    $('#wea3').text(stats['weapon'][2]);
    $('#val5').text(stats['valkyrie'][4]);
    $('#val4').text(stats['valkyrie'][3]);
    $('#val3').text(stats['valkyrie'][2]);
    $('#valp5').text(stats['valkyrie_piece'][4]);
    $('#valp4').text(stats['valkyrie_piece'][3]);
    $('#valp3').text(stats['valkyrie_piece'][2]);
    $('#jewel').text(stats['jewel']);
    $('#count').text(stats['count']);
}

function runevents()
{
    // if timer is running, then don't do anything
    if (event_handle != null) return;
    _runevents();
}

function stopevents()
{
    // if timer isn't running then don't do anything
    if (event_handle == null) return;
    clearTimeout(event_handle);
    event_handle = null;
}

function flushevents()
{
    // stop event handle
    stopevents();
    // just run for loop
    for (var i=0; i<events.length; i++)
    {
        runevent(events[i]);
    }
    // clear event
    events = [];
}

$(function() {
    $('#gacha-1').click(function() {
        // don't do anything if event remains
        if (events.length > 0) return;
        events.push({'action':'video', 'value':null, 'time':5000});
        events.push({'action':'endvideo', 'value':null, 'time':0});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        runevents();
    });
    $('#gacha-10').click(function() {
        // don't do anything if event remains
        if (events.length > 0) return;
        events.push({'action':'video', 'value':null, 'time':5000});
        events.push({'action':'endvideo', 'value':null, 'time':0});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        events.push({'action':'gacha', 'value':null, 'time':1500});
        runevents();
    });
    $('#skip').click(function() {
        flushevents();
    });
    $('#clear').click(function() {
        // must flush first
        flushevents();
        $('#items').empty();
        stats['valkyrie'] = [0,0,0,0,0];
        stats['valkyrie_piece'] = [0,0,0,0,0];
        stats['stigmata'] = [0,0,0,0,0];
        stats['weapon'] = [0,0,0,0,0];
        stats['jewel'] = 0;
        stats['count'] = 0;
        updatestat();
    })
    $('#selectpickup').click(function() {
        alert('aa');
    });
});