screen=map&action=add_own_group&=;
const namePage = "map";

const createLink = {
    request : {
        action: "add_own_group",
        village: game_data.village.id
    },
    redirect: {
       con_update: "1",
        update_colors: '',
        village: game_data.village.id,
    }
}


let data = {
    add_group: await TribalWars.get("groups", {
        ajax: "load_groups"
    }, function (e) {
        return (e.result[0])
    }),
    r:254,
    g:254,
    b:0,
    icon_url: '/graphic/unit_map/snob.png',
    t:false
}


TribalWars.post(namePage, createLink.request, data,
    TribalWars.redirect(namePage, createLink.redirect));
// #endregion

const createLink = {
    ajaxaction: 'marker_change',
    village: game_data.village.id
}

let data = {
    group_id: 14697,
    r:254,
    g:254,
    b:0,
    icon_url: '/graphic/unit_map/snob.png',
    t:false
}

// ADD MULTIPLE VILLAGES
//      TribalWars.post('map', {
//         ajaxaction: 'load_for_multiple_villages'
//       }, {
//       }, function (e) {
//         Dialog.show('multi_village_popup', e.dialog, null, {
//           width: 400
//         })
//       })

//    var l = '/map.php?v=2&locale=' + window.game_data.locale + '&e=' + (new Date).getTime();
//           for (t = 0; t < this._sector_request_queue.length; t++) {
//             var p,
//             r = 0;
//             null === (p = this._sector_request_queue[t]).tiles && (r += 1),
//             null === p.pmap && (r += 2),
//             l += '&' + p.id + '=' + r
//           }
//           $.ajax({
//             type: 'GET',
//             url: l,
//             dataType: 'json',
//             success: function (e) {
//               return TWMap.mapHandler.onReceiveSectorInformation(e, !1)
//             }
//           })


  // TribalWars.get("groups", {
  //               ajax: "load_groups"
  //           }, function (e) {
  //               console.log(e.result)
  //           })