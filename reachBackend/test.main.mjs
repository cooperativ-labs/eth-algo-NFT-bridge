// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc2
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      Bridger_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v519, v520, v521, v529] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = svs;
            return (await ((async () => {
              
              
              return v547;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      Creator_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v519, v520, v521, v529] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = svs;
            return (await ((async () => {
              
              
              return v519;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      balance_NFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v519, v520, v521, v529] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = svs;
            return (await ((async () => {
              
              
              return v567;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      balance_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v519, v520, v521, v529] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = svs;
            return (await ((async () => {
              
              
              return v556;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      lockedNFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v519, v520, v521, v529] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = svs;
            return (await ((async () => {
              
              
              return v548;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      saved_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
            const [v519, v520, v521, v529] = svs;
            stdlib.assert(false, 'illegal view')
            }
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
            const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = svs;
            return (await ((async (_v568 ) => {
                const v568 = stdlib.protect(ctc0, _v568, null);
              
              const v569 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v568), null);
              const v570 = stdlib.fromSome(v569, stdlib.checkedBigNumberify('./indexBridge.rsh:55:45:decimal', stdlib.UInt_max, '0'));
              
              return v570;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        }
      },
    views: {
      1: [ctc0, ctc0, ctc1, ctc5],
      4: [ctc0, ctc0, ctc1, ctc0, ctc3, ctc5, ctc2, ctc4, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc2]);
  return {
    mapDataTy: ctc3
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    Bridger: ctc3,
    NFT: ctc4
    });
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc7 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc6]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Data({
    IERC721Receiver0_79: ctc7,
    adminSaveNFT0_79: ctc8,
    claimNFT0_79: ctc8,
    lockNFT0_79: ctc8
    });
  const ctc10 = stdlib.T_Bool;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc1, ctc10]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const v506 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v507 = [v506];
  const v513 = 'I have deployed';
  const v514 = stdlib.protect(ctc5, await interact.getParams(v513), {
    at: './indexBridge.rsh:39:66:application',
    fs: ['at ./indexBridge.rsh:38:21:application call to [unknown function] (defined at: ./indexBridge.rsh:38:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v515 = v514.Bridger;
  const v516 = v514.NFT;
  
  const txn1 = await (ctc.sendrecv({
    args: [v515, v516],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v520, v521], secs: v523, time: v522, didSend: v33, from: v519 } = txn1;
      
      const v524 = v507[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0')];
      const v526 = v524[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '1')];
      const v527 = v524[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '2')];
      const v528 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v526, v527];
      const v529 = stdlib.Array_set(v507, stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'), v528);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v521
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v520, v521], secs: v523, time: v522, didSend: v33, from: v519 } = txn1;
  const v524 = v507[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0')];
  const v526 = v524[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '1')];
  const v527 = v524[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '2')];
  const v528 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v526, v527];
  const v529 = stdlib.Array_set(v507, stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'), v528);
  ;
  ;
  const v532 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v532), {
    at: './indexBridge.rsh:45:35:application',
    fs: ['at ./indexBridge.rsh:45:35:application call to [unknown function] (defined at: ./indexBridge.rsh:45:35:function exp)', 'at ./indexBridge.rsh:45:35:application call to "liftedInteract" (defined at: ./indexBridge.rsh:45:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v519, v520, v521, v529],
    evt_cnt: 0,
    funcNum: 1,
    lct: v522,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:48:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:48:25:decimal', stdlib.UInt_max, '1'), v521]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v535, time: v534, didSend: v45, from: v533 } = txn2;
      
      ;
      const v536 = v529[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0')];
      const v537 = v536[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0')];
      const v538 = stdlib.add(v537, stdlib.checkedBigNumberify('./indexBridge.rsh:48:25:decimal', stdlib.UInt_max, '1'));
      const v541 = v536[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '1')];
      const v542 = v536[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '2')];
      const v543 = [v538, v541, v542];
      const v544 = stdlib.Array_set(v529, stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0'), v543);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./indexBridge.rsh:48:25:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v521
        });
      const v547 = v520;
      const v548 = true;
      const v549 = v534;
      const v555 = v544;
      const v556 = stdlib.checkedBigNumberify('./indexBridge.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v566 = v555[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
        const v567 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v521
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v535, time: v534, didSend: v45, from: v533 } = txn2;
  ;
  const v536 = v529[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0')];
  const v537 = v536[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0')];
  const v538 = stdlib.add(v537, stdlib.checkedBigNumberify('./indexBridge.rsh:48:25:decimal', stdlib.UInt_max, '1'));
  const v541 = v536[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '1')];
  const v542 = v536[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '2')];
  const v543 = [v538, v541, v542];
  const v544 = stdlib.Array_set(v529, stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0'), v543);
  ;
  const v545 = stdlib.addressEq(v519, v533);
  stdlib.assert(v545, {
    at: './indexBridge.rsh:48:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v547 = v520;
  let v548 = true;
  let v549 = v534;
  let v555 = v544;
  let v556 = stdlib.checkedBigNumberify('./indexBridge.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v566 = v555[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
    const v567 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc9],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v519, v520, v521, v547, v548, v555, v556, v566, v567],
        evt_cnt: 0,
        funcNum: 4,
        lct: v549,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:160:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1148, time: v1147, didSend: v397, from: v1146 } = txn4;
          
          ;
          const cv547 = v547;
          const cv548 = v548;
          const cv549 = v1147;
          const cv555 = v555;
          const cv556 = v556;
          
          await (async () => {
            const v547 = cv547;
            const v548 = cv548;
            const v549 = cv549;
            const v555 = cv555;
            const v556 = cv556;
            
            if (await (async () => {
              
              return true;})()) {
              const v566 = v555[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
              const v567 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v521
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc4, ctc3, ctc10, ctc12, ctc1, ctc11, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1148, time: v1147, didSend: v397, from: v1146 } = txn4;
      ;
      const v1149 = stdlib.addressEq(v519, v1146);
      stdlib.assert(v1149, {
        at: './indexBridge.rsh:160:21:dot',
        fs: ['at ./indexBridge.rsh:159:40:application call to [unknown function] (defined at: ./indexBridge.rsh:159:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv547 = v547;
      const cv548 = v548;
      const cv549 = v1147;
      const cv555 = v555;
      const cv556 = v556;
      
      v547 = cv547;
      v548 = cv548;
      v549 = cv549;
      v555 = cv555;
      v556 = cv556;
      
      continue;
      }
    else {
      const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn3;
      switch (v675[0]) {
        case 'IERC721Receiver0_79': {
          const v678 = v675[1];
          undefined /* setApiDetails */;
          ;
          const v728 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
          const v729 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
          const v730 = [v567, v728, v729];
          const v731 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v730);
          ;
          const v737 = 'true';
          await txn3.getOutput('IERC721Receiver', 'v737', ctc6, v737);
          const cv547 = v547;
          const cv548 = v548;
          const cv549 = v676;
          const cv555 = v731;
          const cv556 = v556;
          
          v547 = cv547;
          v548 = cv548;
          v549 = cv549;
          v555 = cv555;
          v556 = cv556;
          
          continue;
          break;
          }
        case 'adminSaveNFT0_79': {
          const v795 = v675[1];
          undefined /* setApiDetails */;
          ;
          const v842 = stdlib.add(v567, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v845 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
          const v846 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
          const v847 = [v842, v845, v846];
          const v848 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v847);
          ;
          const v866 = stdlib.addressEq(v674, v519);
          stdlib.assert(v866, {
            at: './indexBridge.rsh:92:24:application',
            fs: ['at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
            msg: 'Only Backend can save NFT',
            who: 'Creator'
            });
          const v867 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v547), null);
          const v868 = stdlib.fromSome(v867, stdlib.checkedBigNumberify('./indexBridge.rsh:55:45:decimal', stdlib.UInt_max, '0'));
          const v869 = stdlib.eq(v868, stdlib.checkedBigNumberify('./indexBridge.rsh:93:56:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v869, {
            at: './indexBridge.rsh:93:24:application',
            fs: ['at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
            msg: 'one NFT already locked by this bridger',
            who: 'Creator'
            });
          const v870 = true;
          await txn3.getOutput('adminSaveNFT', 'v870', ctc10, v870);
          const cv547 = v547;
          const cv548 = v548;
          const cv549 = v676;
          const cv555 = v848;
          const cv556 = v556;
          
          v547 = cv547;
          v548 = cv548;
          v549 = cv549;
          v555 = cv555;
          v556 = cv556;
          
          continue;
          break;
          }
        case 'claimNFT0_79': {
          const v912 = v675[1];
          undefined /* setApiDetails */;
          ;
          const v962 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
          const v963 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
          const v964 = [v567, v962, v963];
          const v965 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v964);
          ;
          const v995 = stdlib.addressEq(v674, v520);
          stdlib.assert(v995, {
            at: './indexBridge.rsh:134:24:application',
            fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
            msg: 'Only Bridger can claim NFT when bridging',
            who: 'Creator'
            });
          stdlib.assert(v548, {
            at: './indexBridge.rsh:135:24:application',
            fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v997 = v965[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v998 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v999 = stdlib.gt(v998, stdlib.checkedBigNumberify('./indexBridge.rsh:136:40:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v999, {
            at: './indexBridge.rsh:136:24:application',
            fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v1005 = stdlib.sub(v998, stdlib.checkedBigNumberify('./indexBridge.rsh:138:26:decimal', stdlib.UInt_max, '1'));
          const v1008 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '1')];
          const v1009 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '2')];
          const v1010 = [v1005, v1008, v1009];
          const v1011 = stdlib.Array_set(v965, stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '0'), v1010);
          ;
          await stdlib.mapSet(map0, v674, stdlib.checkedBigNumberify('./indexBridge.rsh:140:31:decimal', stdlib.UInt_max, '0'));
          const v1012 = true;
          await txn3.getOutput('claimNFT', 'v1012', ctc10, v1012);
          const cv547 = v547;
          const cv548 = false;
          const cv549 = v676;
          const cv555 = v1011;
          const cv556 = v556;
          
          v547 = cv547;
          v548 = cv548;
          v549 = cv549;
          v555 = cv555;
          v556 = cv556;
          
          continue;
          break;
          }
        case 'lockNFT0_79': {
          const v1029 = v675[1];
          undefined /* setApiDetails */;
          ;
          const v1076 = stdlib.add(v567, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1079 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
          const v1080 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
          const v1081 = [v1076, v1079, v1080];
          const v1082 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v1081);
          ;
          const v1137 = stdlib.addressEq(v674, v520);
          stdlib.assert(v1137, {
            at: './indexBridge.rsh:110:24:application',
            fs: ['at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
            msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
            who: 'Creator'
            });
          const v1138 = v548 ? false : true;
          stdlib.assert(v1138, {
            at: './indexBridge.rsh:111:32:application',
            fs: ['at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
            msg: 'NFT is already locked. You can only bridge one NFT at a time',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v674, stdlib.checkedBigNumberify('./indexBridge.rsh:113:39:decimal', stdlib.UInt_max, '1'));
          const v1139 = true;
          await txn3.getOutput('lockNFT', 'v1139', ctc10, v1139);
          const cv547 = v547;
          const cv548 = true;
          const cv549 = v676;
          const cv555 = v1082;
          const cv556 = v556;
          
          v547 = cv547;
          v548 = cv548;
          v549 = cv549;
          v555 = cv555;
          v556 = cv556;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  
  
  };
export async function _IERC721Receiver4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _IERC721Receiver4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _IERC721Receiver4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc9 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_79: ctc9,
    adminSaveNFT0_79: ctc10,
    claimNFT0_79: ctc10,
    lockNFT0_79: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v612 = stdlib.protect(ctc9, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:150:13:application call to [unknown function] (defined at: ./indexBridge.rsh:150:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runIERC721Receiver0_79" (defined at: ./indexBridge.rsh:147:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'IERC721Receiver'
    });
  const v628 = ['IERC721Receiver0_79', v612];
  
  const txn1 = await (ctc.sendrecv({
    args: [v519, v520, v521, v547, v548, v555, v556, v566, v567, v628],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:152:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:152:33:decimal', stdlib.UInt_max, '0'), v521]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn1;
      
      switch (v675[0]) {
        case 'IERC721Receiver0_79': {
          const v678 = v675[1];
          sim_r.txns.push({
            kind: 'api',
            who: "IERC721Receiver"
            });
          ;
          const v728 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
          const v729 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
          const v730 = [v567, v728, v729];
          const v731 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v730);
          ;
          const v737 = 'true';
          const v738 = await txn1.getOutput('IERC721Receiver', 'v737', ctc8, v737);
          
          const v1806 = v547;
          const v1807 = v548;
          const v1809 = v731;
          const v1810 = v556;
          const v1811 = v731[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1812 = v1811[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v795 = v675[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v912 = v675[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v1029 = v675[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn1;
  switch (v675[0]) {
    case 'IERC721Receiver0_79': {
      const v678 = v675[1];
      undefined /* setApiDetails */;
      ;
      const v728 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
      const v729 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
      const v730 = [v567, v728, v729];
      const v731 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v730);
      ;
      const v737 = 'true';
      const v738 = await txn1.getOutput('IERC721Receiver', 'v737', ctc8, v737);
      if (v318) {
        stdlib.protect(ctc0, await interact.out(v678, v738), {
          at: './indexBridge.rsh:148:13:application',
          fs: ['at ./indexBridge.rsh:148:13:application call to [unknown function] (defined at: ./indexBridge.rsh:148:13:function exp)', 'at ./indexBridge.rsh:155:20:application call to "res" (defined at: ./indexBridge.rsh:154:13:function exp)', 'at ./indexBridge.rsh:154:13:application call to [unknown function] (defined at: ./indexBridge.rsh:154:13:function exp)'],
          msg: 'out',
          who: 'IERC721Receiver'
          });
        }
      else {
        }
      
      const v1806 = v547;
      const v1807 = v548;
      const v1809 = v731;
      const v1810 = v556;
      const v1811 = v731[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1812 = v1811[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'adminSaveNFT0_79': {
      const v795 = v675[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v912 = v675[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v1029 = v675[1];
      return;
      break;
      }
    }
  
  
  };
export async function _adminSaveNFT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _adminSaveNFT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _adminSaveNFT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_79: ctc10,
    adminSaveNFT0_79: ctc8,
    claimNFT0_79: ctc8,
    lockNFT0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v575 = ctc.selfAddress();
  const v577 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./indexBridge.rsh:81:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'adminSaveNFT'
    });
  const v579 = stdlib.addressEq(v575, v519);
  stdlib.assert(v579, {
    at: './indexBridge.rsh:85:23:application',
    fs: ['at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:17:function exp)', 'at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./indexBridge.rsh:81:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'Only Backend can save NFT',
    who: 'adminSaveNFT'
    });
  const v580 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v547), null);
  const v581 = stdlib.fromSome(v580, stdlib.checkedBigNumberify('./indexBridge.rsh:55:45:decimal', stdlib.UInt_max, '0'));
  const v582 = stdlib.eq(v581, stdlib.checkedBigNumberify('./indexBridge.rsh:86:55:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v582, {
    at: './indexBridge.rsh:86:23:application',
    fs: ['at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:17:function exp)', 'at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./indexBridge.rsh:81:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'one NFT already locked by this bridger',
    who: 'adminSaveNFT'
    });
  const v585 = ['adminSaveNFT0_79', v577];
  
  const txn1 = await (ctc.sendrecv({
    args: [v519, v520, v521, v547, v548, v555, v556, v566, v567, v585],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:89:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:89:25:decimal', stdlib.UInt_max, '1'), v521]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn1;
      
      switch (v675[0]) {
        case 'IERC721Receiver0_79': {
          const v678 = v675[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v795 = v675[1];
          sim_r.txns.push({
            kind: 'api',
            who: "adminSaveNFT"
            });
          ;
          const v842 = stdlib.add(v567, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v845 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
          const v846 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
          const v847 = [v842, v845, v846];
          const v848 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v847);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v521
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v547), null);
          const v870 = true;
          const v871 = await txn1.getOutput('adminSaveNFT', 'v870', ctc5, v870);
          
          const v1851 = v547;
          const v1852 = v548;
          const v1854 = v848;
          const v1855 = v556;
          const v1856 = v848[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1857 = v1856[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimNFT0_79': {
          const v912 = v675[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v1029 = v675[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn1;
  switch (v675[0]) {
    case 'IERC721Receiver0_79': {
      const v678 = v675[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v795 = v675[1];
      undefined /* setApiDetails */;
      ;
      const v842 = stdlib.add(v567, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v845 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
      const v846 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
      const v847 = [v842, v845, v846];
      const v848 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v847);
      ;
      const v866 = stdlib.addressEq(v674, v519);
      stdlib.assert(v866, {
        at: './indexBridge.rsh:92:24:application',
        fs: ['at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
        msg: 'Only Backend can save NFT',
        who: 'adminSaveNFT'
        });
      const v867 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v547), null);
      const v868 = stdlib.fromSome(v867, stdlib.checkedBigNumberify('./indexBridge.rsh:55:45:decimal', stdlib.UInt_max, '0'));
      const v869 = stdlib.eq(v868, stdlib.checkedBigNumberify('./indexBridge.rsh:93:56:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v869, {
        at: './indexBridge.rsh:93:24:application',
        fs: ['at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
        msg: 'one NFT already locked by this bridger',
        who: 'adminSaveNFT'
        });
      const v870 = true;
      const v871 = await txn1.getOutput('adminSaveNFT', 'v870', ctc5, v870);
      if (v318) {
        stdlib.protect(ctc0, await interact.out(v795, v871), {
          at: './indexBridge.rsh:82:13:application',
          fs: ['at ./indexBridge.rsh:82:13:application call to [unknown function] (defined at: ./indexBridge.rsh:82:13:function exp)', 'at ./indexBridge.rsh:95:20:application call to "res" (defined at: ./indexBridge.rsh:91:13:function exp)', 'at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
          msg: 'out',
          who: 'adminSaveNFT'
          });
        }
      else {
        }
      
      const v1851 = v547;
      const v1852 = v548;
      const v1854 = v848;
      const v1855 = v556;
      const v1856 = v848[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1857 = v1856[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'claimNFT0_79': {
      const v912 = v675[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v1029 = v675[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimNFT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimNFT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimNFT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_79: ctc10,
    adminSaveNFT0_79: ctc8,
    claimNFT0_79: ctc8,
    lockNFT0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v597 = ctc.selfAddress();
  const v599 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'claimNFT'
    });
  const v601 = stdlib.addressEq(v597, v520);
  stdlib.assert(v601, {
    at: './indexBridge.rsh:126:23:application',
    fs: ['at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:17:function exp)', 'at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'Only Bridger can claim NFT when bridging',
    who: 'claimNFT'
    });
  stdlib.assert(v548, {
    at: './indexBridge.rsh:127:23:application',
    fs: ['at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:17:function exp)', 'at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v605 = stdlib.gt(v567, stdlib.checkedBigNumberify('./indexBridge.rsh:128:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v605, {
    at: './indexBridge.rsh:128:23:application',
    fs: ['at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:17:function exp)', 'at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v608 = ['claimNFT0_79', v599];
  
  const txn1 = await (ctc.sendrecv({
    args: [v519, v520, v521, v547, v548, v555, v556, v566, v567, v608],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:131:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:131:25:decimal', stdlib.UInt_max, '0'), v521]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn1;
      
      switch (v675[0]) {
        case 'IERC721Receiver0_79': {
          const v678 = v675[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v795 = v675[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v912 = v675[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimNFT"
            });
          ;
          const v962 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
          const v963 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
          const v964 = [v567, v962, v963];
          const v965 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v964);
          ;
          const v997 = v965[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v998 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v1005 = stdlib.sub(v998, stdlib.checkedBigNumberify('./indexBridge.rsh:138:26:decimal', stdlib.UInt_max, '1'));
          const v1008 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '1')];
          const v1009 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '2')];
          const v1010 = [v1005, v1008, v1009];
          const v1011 = stdlib.Array_set(v965, stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '0'), v1010);
          sim_r.txns.push({
            kind: 'from',
            to: v674,
            tok: v521
            });
          await stdlib.simMapSet(sim_r, 0, v674, stdlib.checkedBigNumberify('./indexBridge.rsh:140:31:decimal', stdlib.UInt_max, '0'));
          const v1012 = true;
          const v1013 = await txn1.getOutput('claimNFT', 'v1012', ctc5, v1012);
          
          const v1896 = v547;
          const v1897 = false;
          const v1899 = v1011;
          const v1900 = v556;
          const v1901 = v1011[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1902 = v1901[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'lockNFT0_79': {
          const v1029 = v675[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn1;
  switch (v675[0]) {
    case 'IERC721Receiver0_79': {
      const v678 = v675[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v795 = v675[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v912 = v675[1];
      undefined /* setApiDetails */;
      ;
      const v962 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
      const v963 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
      const v964 = [v567, v962, v963];
      const v965 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v964);
      ;
      const v995 = stdlib.addressEq(v674, v520);
      stdlib.assert(v995, {
        at: './indexBridge.rsh:134:24:application',
        fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
        msg: 'Only Bridger can claim NFT when bridging',
        who: 'claimNFT'
        });
      stdlib.assert(v548, {
        at: './indexBridge.rsh:135:24:application',
        fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v997 = v965[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
      const v998 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
      const v999 = stdlib.gt(v998, stdlib.checkedBigNumberify('./indexBridge.rsh:136:40:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v999, {
        at: './indexBridge.rsh:136:24:application',
        fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v1005 = stdlib.sub(v998, stdlib.checkedBigNumberify('./indexBridge.rsh:138:26:decimal', stdlib.UInt_max, '1'));
      const v1008 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '1')];
      const v1009 = v997[stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '2')];
      const v1010 = [v1005, v1008, v1009];
      const v1011 = stdlib.Array_set(v965, stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '0'), v1010);
      ;
      await stdlib.mapSet(map0, v674, stdlib.checkedBigNumberify('./indexBridge.rsh:140:31:decimal', stdlib.UInt_max, '0'));
      const v1012 = true;
      const v1013 = await txn1.getOutput('claimNFT', 'v1012', ctc5, v1012);
      if (v318) {
        stdlib.protect(ctc0, await interact.out(v912, v1013), {
          at: './indexBridge.rsh:123:13:application',
          fs: ['at ./indexBridge.rsh:123:13:application call to [unknown function] (defined at: ./indexBridge.rsh:123:13:function exp)', 'at ./indexBridge.rsh:143:20:application call to "res" (defined at: ./indexBridge.rsh:133:13:function exp)', 'at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
          msg: 'out',
          who: 'claimNFT'
          });
        }
      else {
        }
      
      const v1896 = v547;
      const v1897 = false;
      const v1899 = v1011;
      const v1900 = v556;
      const v1901 = v1011[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1902 = v1901[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'lockNFT0_79': {
      const v1029 = v675[1];
      return;
      break;
      }
    }
  
  
  };
export async function _lockNFT4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _lockNFT4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _lockNFT4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1, ctc5]);
  const ctc7 = stdlib.T_Array(ctc6, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'));
  const ctc10 = stdlib.T_Tuple([ctc3, ctc3, ctc1, ctc9]);
  const ctc11 = stdlib.T_Data({
    IERC721Receiver0_79: ctc10,
    adminSaveNFT0_79: ctc8,
    claimNFT0_79: ctc8,
    lockNFT0_79: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v519, v520, v521, v547, v548, v555, v556, v566, v567] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v587 = ctc.selfAddress();
  const v589 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./indexBridge.rsh:99:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'lockNFT'
    });
  const v591 = stdlib.addressEq(v587, v520);
  stdlib.assert(v591, {
    at: './indexBridge.rsh:103:23:application',
    fs: ['at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:17:function exp)', 'at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./indexBridge.rsh:99:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
    who: 'lockNFT'
    });
  const v592 = v548 ? false : true;
  stdlib.assert(v592, {
    at: './indexBridge.rsh:104:31:application',
    fs: ['at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:17:function exp)', 'at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./indexBridge.rsh:99:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'NFT is already locked. You can only bridge one NFT at a time',
    who: 'lockNFT'
    });
  const v595 = ['lockNFT0_79', v589];
  
  const txn1 = await (ctc.sendrecv({
    args: [v519, v520, v521, v547, v548, v555, v556, v566, v567, v595],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:107:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:107:25:decimal', stdlib.UInt_max, '1'), v521]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn1;
      
      switch (v675[0]) {
        case 'IERC721Receiver0_79': {
          const v678 = v675[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v795 = v675[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v912 = v675[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v1029 = v675[1];
          sim_r.txns.push({
            kind: 'api',
            who: "lockNFT"
            });
          ;
          const v1076 = stdlib.add(v567, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1079 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
          const v1080 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
          const v1081 = [v1076, v1079, v1080];
          const v1082 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v1081);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v521
            });
          await stdlib.simMapSet(sim_r, 0, v674, stdlib.checkedBigNumberify('./indexBridge.rsh:113:39:decimal', stdlib.UInt_max, '1'));
          const v1139 = true;
          const v1140 = await txn1.getOutput('lockNFT', 'v1139', ctc5, v1139);
          
          const v1941 = v547;
          const v1942 = true;
          const v1944 = v1082;
          const v1945 = v556;
          const v1946 = v1082[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1947 = v1946[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v675], secs: v677, time: v676, didSend: v318, from: v674 } = txn1;
  switch (v675[0]) {
    case 'IERC721Receiver0_79': {
      const v678 = v675[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v795 = v675[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v912 = v675[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v1029 = v675[1];
      undefined /* setApiDetails */;
      ;
      const v1076 = stdlib.add(v567, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1079 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '1')];
      const v1080 = v566[stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '2')];
      const v1081 = [v1076, v1079, v1080];
      const v1082 = stdlib.Array_set(v555, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v1081);
      ;
      const v1137 = stdlib.addressEq(v674, v520);
      stdlib.assert(v1137, {
        at: './indexBridge.rsh:110:24:application',
        fs: ['at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
        msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
        who: 'lockNFT'
        });
      const v1138 = v548 ? false : true;
      stdlib.assert(v1138, {
        at: './indexBridge.rsh:111:32:application',
        fs: ['at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
        msg: 'NFT is already locked. You can only bridge one NFT at a time',
        who: 'lockNFT'
        });
      await stdlib.mapSet(map0, v674, stdlib.checkedBigNumberify('./indexBridge.rsh:113:39:decimal', stdlib.UInt_max, '1'));
      const v1139 = true;
      const v1140 = await txn1.getOutput('lockNFT', 'v1139', ctc5, v1139);
      if (v318) {
        stdlib.protect(ctc0, await interact.out(v1029, v1140), {
          at: './indexBridge.rsh:100:13:application',
          fs: ['at ./indexBridge.rsh:100:13:application call to [unknown function] (defined at: ./indexBridge.rsh:100:13:function exp)', 'at ./indexBridge.rsh:116:20:application call to "res" (defined at: ./indexBridge.rsh:109:13:function exp)', 'at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
          msg: 'out',
          who: 'lockNFT'
          });
        }
      else {
        }
      
      const v1941 = v547;
      const v1942 = true;
      const v1944 = v1082;
      const v1945 = v556;
      const v1946 = v1082[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1947 = v1946[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    }
  
  
  };
export async function IERC721Receiver(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for IERC721Receiver expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for IERC721Receiver expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _IERC721Receiver4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function adminSaveNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for adminSaveNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for adminSaveNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _adminSaveNFT4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claimNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _claimNFT4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function lockNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for lockNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for lockNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _lockNFT4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `adminSaveNFT()byte`, `claimNFT()byte`, `lockNFT()byte`],
    pure: [`Bridger_v()address`, `Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `lockedNFT_v()byte`, `saved_v(address)uint64`],
    sigs: [`Bridger_v()address`, `Creator_v()address`, `IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `adminSaveNFT()byte`, `balance_NFT_v()uint64`, `balance_v()uint64`, `claimNFT()byte`, `lockNFT()byte`, `lockedNFT_v()byte`, `saved_v(address)uint64`]
    },
  appApproval: `BiAUAAEEA0xACAnu9d6pCp6inrQMku7r5wzp68/4D9nQhKMLyNbelwa5wM37B6349ZUIpomv1wL///////////8BeqCNBiYDAQABAQAiNQAxGEEFPSpkSSJbNQEhBls1AjEZIxJBAAoxACghB69mQgUJNhoAF0lBATsiNQQjNQZJIQgMQACXSSEJDEAAVUkhCgxAADVJIQsMQAASIQsSRCo1/yk0/1AhBK9QQgF6IQoSRDYaATYaAlA2GgNQNhoEUDX/KDT/UEIBXiEJEkQ0ASQSRChkKWRQSTUDVwAgNQdCBKdJIQwMQAAgIQwSRDQBJBJEIjYaAYgEtUk1/yNbNP8iVU0WNQdCBIAhCBJEKjX/gAEDNP9QIQSvUEIBCkkhDQxAAFRJIQ4MQAA0SSEPDEAAFCEPEkQqNf+AAQI0/1AhBK9QQgDhIQ4SRDQBJBJEKGQpZFBJNQNXSCA1B0IEKiENEkQ0ASQSRChkKWRQSTUDV5MINQdCBBFJIRAMQAAZIRASRDQBJBJEKGQpZFBJNQNXegg1B0ID8YH98IU9EkQ0ASQSRChkKWRQSTUDV2gBNQdCA9U2GgIXNQQ2GgM2GgEXSSUMQAIwSSQMQABZJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABJEnNPOwMgYhEQ9ENP8xABJENP80A1cgIDQDIQVbNANXSCA0A1doARcyBjQDV2kRNAMhEltCAsVIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/1cgIDX+IQVbNf1XSCA1/FdoARc1+1dpETX6IRJbNflXghE1+IGTAVs190k1BTX2gARfpNvYNPZQsDIGIREMRDT2IlVJgQIMQADVSSUMQABSJRJEIzT9iAMzMQA0/hJENPsURDEAKIAJAQAAAAAAAAABZoAJAAAAAAAABHMBsCk1BzT/NP40/TT8IzIGNPcjCBY0+FcICFA0+FcQAVA0+UICAEg09xY0+FcICFA0+FcQAVA19TEANP4SRDT7RDT1VwARSTX0IltJNfMiDUSxIrIBI7ISJLIQMQCyFDT9shGzMQAogAkBAAAAAAAAAABmgAkAAAAAAAAD9AGwKTUHNP80/jT9NPwiMgY08yMJFjT0VwgIUDT0VxABUDT5QgGDSSMMQABRSCM0/YgCYDEANP8SRCI0/IgCLUk19SNbNPUiVU0iEkSACQAAAAAAAANmAbApNQc0/zT+NP00/DT7MgY09yMIFjT4VwgIUDT4VxABUDT5QgEsSIAMAAAAAAAAAuF0cnVlsIAEdHJ1ZTUHNP80/jT9NPw0+zIGNPcWNPhXCAhQNPhXEAFQNPlCAPRJIwxAAGojEkQjNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/VyAgNf4hBVs1/VdIETX8gASai5F0sDT8VwARNfsjNP2IAZY0/zEAEkQ0/zT+NP00/iMyBjT7IlsjCBY0+1cICFA0+1cQAVAiQgCESCETiAFQIjQBEkQ0BEkiEkw0AhIRREk1BUlXACA1/4EgWzX+gATZ6bHKNP9QNP4WULCBEa9JNf1XABE1/CEGrzT8VwgIUDT8VxABUDX7IROIAQOxIrIBIrISJLIQMgqyFDT+shGzMQA0/1A0/hZQNPtQKEsBVwBZZ0gjNQEyBjUCQgByNf81/jX9Nfw1+zX6Nfk1+DT+VwARSTX3Ils19jT4NPlQNPoWUDT7UDT8FlEHCFA0/lA0/xZQNPdQNPYWUChLAVcAf2cpSwFXfxxnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 155,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v520",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v521",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v520",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v521",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes4",
                            "name": "elem0",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T12",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_IERC721Receiver0_79",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_adminSaveNFT0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_79",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v675",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1012",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1139",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v737",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v870",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bridger_v",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Creator_v",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "_a1",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_a2",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T12",
        "name": "_a3",
        "type": "tuple"
      }
    ],
    "name": "IERC721Receiver",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "elem0",
            "type": "bytes4"
          }
        ],
        "internalType": "struct T12",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "elem1",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "elem2",
                        "type": "uint256"
                      },
                      {
                        "components": [
                          {
                            "internalType": "bytes4",
                            "name": "elem0",
                            "type": "bytes4"
                          }
                        ],
                        "internalType": "struct T12",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_IERC721Receiver0_79",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_adminSaveNFT0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_79",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_79",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T15",
                "name": "v675",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "adminSaveNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance_NFT_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "balance_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "claimNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lockNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "lockedNFT_v",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v1955",
        "type": "address"
      }
    ],
    "name": "saved_v",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002f9538038062002f95833981016040819052620000269162000411565b60008055436003556200003862000238565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f292906200018b565b6060820152620001053415600d6200020e565b6200010f6200029f565b33815260208084018051516001600160a01b03908116838501529051820151166040808401919091526060808501519084015260016000819055439055516200015b918391016200049c565b6040516020818303038152906040526002908051906020019062000181929190620002ca565b505050506200057e565b6200019562000359565b60005b6001811015620001eb57848160018110620001b757620001b762000486565b6020020151828260018110620001d157620001d162000486565b602002015280620001e28162000517565b91505062000198565b508181846001811062000202576200020262000486565b60200201529392505050565b81620002345760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200026b62000359565b815260408051606081018252600080825260208281018290529282015291019081526020016200029a62000359565b905290565b6040805160808101825260008082526020820181905291810191909152606081016200029a62000359565b828054620002d89062000541565b90600052602060002090601f016020900481019282620002fc576000855562000347565b82601f106200031757805160ff191683800117855562000347565b8280016001018555821562000347579182015b82811115620003475782518255916020019190600101906200032a565b5062000355929150620003a6565b5090565b60405180602001604052806001905b6200038f604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003685790505090565b5b80821115620003555760008155600101620003a7565b604080519081016001600160401b0381118282101715620003ee57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200040c57600080fd5b919050565b600081830360608112156200042557600080fd5b6200042f620003bd565b835181526040601f19830112156200044657600080fd5b62000450620003bd565b91506200046060208501620003f4565b82526200047060408501620003f4565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401518216818401526040808501519092168284015260608085015160c08501939192919083860160005b60018110156200050b5782518051835285810151868401528401511515848301529184019190850190600101620004d9565b50505050505092915050565b60006000198214156200053a57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200055657607f821691505b602082108114156200057857634e487b7160e01b600052602260045260246000fd5b50919050565b612a07806200058e6000396000f3fe6080604052600436106100f65760003560e01c8063832307571161008f578063ab53f2c611610061578063ab53f2c61461024c578063bee266091461026f578063d2b339bd14610277578063d76a47691461028c578063e43ffb9f146102a157005b80638323075714610209578063989653651461021e578063a1c6864014610231578063a7661d541461023957005b80633bc5b7bf116100c85780633bc5b7bf14610183578063672756ad146101b057806369e13bd7146101c8578063819938fc146101f457005b80631e93b0f1146100ff5780632c10a159146101235780633894aea5146101365780633a3dbe721461016357005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd61013136600461214b565b6102b6565b34801561014257600080fd5b5061014b6102da565b6040516001600160a01b03909116815260200161011a565b34801561016f57600080fd5b5061011061017e36600461217b565b610458565b34801561018f57600080fd5b506101a361019e36600461217b565b610611565b60405161011a91906121ae565b6101b861063d565b604051901515815260200161011a565b6101db6101d636600461230c565b61066d565b60405190516001600160e01b031916815260200161011a565b34801561020057600080fd5b5061014b6106e4565b34801561021557600080fd5b50600154610110565b6100fd61022c36600461235e565b610862565b6101b8610882565b6100fd61024736600461214b565b6108b2565b34801561025857600080fd5b506102616108d2565b60405161011a92919061239d565b6101b861096f565b34801561028357600080fd5b50610110610995565b34801561029857600080fd5b506101b8610b14565b3480156102ad57600080fd5b50610110610c92565b6102be611e04565b6102d66102d0368490038401846123f0565b82610e10565b5050565b600060016000541415610397576000600280546102f690612446565b80601f016020809104026020016040519081016040528092919081815260200182805461032290612446565b801561036f5780601f106103445761010080835404028352916020019161036f565b820191906000526020600020905b81548152906001019060200180831161035257829003601f168201915b50505050508060200190518101906103879190612552565b905061039560006008611056565b505b60046000541415610449576000600280546103b190612446565b80601f01602080910402602001604051908101604052809291908181526020018280546103dd90612446565b801561042a5780601f106103ff5761010080835404028352916020019161042a565b820191906000526020600020905b81548152906001019060200180831161040d57829003601f168201915b505050505080602001905181019061044291906125b8565b5192915050565b61045560006008611056565b90565b6000600160005414156105155760006002805461047490612446565b80601f01602080910402602001604051908101604052809291908181526020018280546104a090612446565b80156104ed5780601f106104c2576101008083540402835291602001916104ed565b820191906000526020600020905b8154815290600101906020018083116104d057829003601f168201915b50505050508060200190518101906105059190612552565b90506105136000600c611056565b505b600460005414156106005760006002805461052f90612446565b80601f016020809104026020016040519081016040528092919081815260200182805461055b90612446565b80156105a85780601f1061057d576101008083540402835291602001916105a8565b820191906000526020600020905b81548152906001019060200180831161058b57829003601f168201915b50505050508060200190518101906105c091906125b8565b905060016105cd8461107c565b5160018111156105df576105df612198565b146105eb5760006105f9565b6105f48361107c565b604001515b9392505050565b61060c6000600c611056565b919050565b60408051606081018252600080825260208201819052918101919091526106378261107c565b92915050565b6000610647611e36565b60208101515160029052610659611e04565b610663828261114e565b6040015192915050565b604080516020810190915260008152610684611e36565b6020818101805151600090528051518201516001600160a01b0389811690915281515183015190881690830152805151820151604001869052515101516060018390526106cf611e04565b6106d9828261114e565b519695505050505050565b6000600160005414156107a15760006002805461070090612446565b80601f016020809104026020016040519081016040528092919081815260200182805461072c90612446565b80156107795780601f1061074e57610100808354040283529160200191610779565b820191906000526020600020905b81548152906001019060200180831161075c57829003601f168201915b50505050508060200190518101906107919190612552565b905061079f60006007611056565b505b60046000541415610856576000600280546107bb90612446565b80601f01602080910402602001604051908101604052809291908181526020018280546107e790612446565b80156108345780601f1061080957610100808354040283529160200191610834565b820191906000526020600020905b81548152906001019060200180831161081757829003601f168201915b505050505080602001905181019061084c91906125b8565b6060015192915050565b61045560006007611056565b61086a611e04565b6102d661087c36849003840184612668565b8261114e565b600061088c611e36565b6020810151516001905261089e611e04565b6108a8828261114e565b6020015192915050565b6108ba611e04565b6102d66108cc368490038401846123f0565b826118f4565b6000606060005460028080546108e790612446565b80601f016020809104026020016040519081016040528092919081815260200182805461091390612446565b80156109605780601f1061093557610100808354040283529160200191610960565b820191906000526020600020905b81548152906001019060200180831161094357829003601f168201915b50505050509050915091509091565b6000610979611e36565b6020810151516003905261098b611e04565b61084c828261114e565b600060016000541415610a52576000600280546109b190612446565b80601f01602080910402602001604051908101604052809291908181526020018280546109dd90612446565b8015610a2a5780601f106109ff57610100808354040283529160200191610a2a565b820191906000526020600020905b815481529060010190602001808311610a0d57829003601f168201915b5050505050806020019051810190610a429190612552565b9050610a5060006009611056565b505b60046000541415610b0857600060028054610a6c90612446565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9890612446565b8015610ae55780601f10610aba57610100808354040283529160200191610ae5565b820191906000526020600020905b815481529060010190602001808311610ac857829003601f168201915b5050505050806020019051810190610afd91906125b8565b610100015192915050565b61045560006009611056565b600060016000541415610bd157600060028054610b3090612446565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5c90612446565b8015610ba95780601f10610b7e57610100808354040283529160200191610ba9565b820191906000526020600020905b815481529060010190602001808311610b8c57829003601f168201915b5050505050806020019051810190610bc19190612552565b9050610bcf6000600b611056565b505b60046000541415610c8657600060028054610beb90612446565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1790612446565b8015610c645780601f10610c3957610100808354040283529160200191610c64565b820191906000526020600020905b815481529060010190602001808311610c4757829003601f168201915b5050505050806020019051810190610c7c91906125b8565b6080015192915050565b6104556000600b611056565b600060016000541415610d4f57600060028054610cae90612446565b80601f0160208091040260200160405190810160405280929190818152602001828054610cda90612446565b8015610d275780601f10610cfc57610100808354040283529160200191610d27565b820191906000526020600020905b815481529060010190602001808311610d0a57829003601f168201915b5050505050806020019051810190610d3f9190612552565b9050610d4d6000600a611056565b505b60046000541415610e0457600060028054610d6990612446565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9590612446565b8015610de25780601f10610db757610100808354040283529160200191610de2565b820191906000526020600020905b815481529060010190602001808311610dc557829003601f168201915b5050505050806020019051810190610dfa91906125b8565b60c0015192915050565b6104556000600a611056565b610e206001600054146011611056565b8151610e3b901580610e3457508251600154145b6012611056565b600080805560028054610e4d90612446565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7990612446565b8015610ec65780601f10610e9b57610100808354040283529160200191610ec6565b820191906000526020600020905b815481529060010190602001808311610ea957829003601f168201915b5050505050806020019051810190610ede9190612552565b9050610f0760408051608081018252600060208201818152928201819052606082015290815290565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a1610f5a3415600e611056565b60608201515151610f6d9060019061278f565b815152606082018051516020908101518351909101525151604090810151825190151590820152820151610faf90610fa89033906001611abe565b600f611056565b8151610fc7906001600160a01b031633146010611056565b610fcf611e55565b825181516001600160a01b039182169052602080850180518451908416908301526040808701518551908516908201529051828501805191909416905282516001920191909152905143910152606083015182516110309190600090611ad4565b6020820180516060019190915251600060809091015261104f81611b48565b5050505050565b816102d65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156110c8576110c8612198565b141561113f576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561110957611109612198565b600181111561111a5761111a612198565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b61115e6004600054146022611056565b815161117990158061117257508251600154145b6023611056565b60008080556002805461118b90612446565b80601f01602080910402602001604051908101604052809291908181526020018280546111b790612446565b80156112045780601f106111d957610100808354040283529160200191611204565b820191906000526020600020905b8154815290600101906020018083116111e757829003601f168201915b505050505080602001905181019061121c91906125b8565b9050611226611e85565b61123560001943106024611056565b7f609ab9b7bf2f477776b524871c686a3b0fb6d65c5630321136fc4f3e8337614633856040516112669291906127a7565b60405180910390a1600060208501515151600381111561128857611288612198565b14156113cd5761129a34156013611056565b61010082015181515260e082018051602090810151835190910152516040908101518251901515908201528201516112e0906112d99033906000611abe565b6014611056565b60208181018051637472756560e01b90525160405190516001600160e01b03191681527f70120adab39a228bbd7e5ed5b1fe322f80460d312e5634aac38c4bdcbca3ef9a910160405180910390a16020810151835261133d611e55565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606086015182850180519190941690526080860151835190151592019190915290514391015260a083015182516113a69190600090611ad4565b6020820180516060019190915260c08401519051608001526113c781611b48565b506118ee565b60016020850151515160038111156113e7576113e7612198565b1415611566576113f934156015611056565b600182610100015161140b919061278f565b604080830180519290925260e084018051602090810151845190910152518101519151911515918101919091528201516114539061144c9033906001611abe565b6016611056565b815161146b906001600160a01b031633146017611056565b6114b76000600161147f856060015161107c565b51600181111561149157611491612198565b1461149d5760006114af565b6114aa846060015161107c565b604001515b146018611056565b604051600181527f24de3d403f51f9e385f28a86918ef394fd3947cf7aec3e0229f0bd6bf824ad7d9060200160405180910390a1600160208401526114fa611e55565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608601518285018051919094169052608086015183519015159201919091529051439082015260a0840151908301516113a69190600090611ad4565b600260208501515151600381111561158057611580612198565b141561175b5761159234156019611056565b6101008201516060820180519190915260e08301805160209081015183519091015251604090810151825190151591015260a083015190516115d79190600090611ad4565b81608001819052506115f96115f23384604001516000611abe565b601a611056565b61161c82602001516001600160a01b0316336001600160a01b031614601b611056565b61162b8260800151601c611056565b6080810151515161163f901515601d611056565b6080810151515161165290600190612856565b60a0820180519190915260808201805151602090810151835190910152515160409081015191519115159181019190915282015161169290336001611c0a565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527fb9dafdc7d4a63b3533f85cb78d0901e4acaa0ac63bd377ce7ca15cd3c771ab44910160405180910390a1600160408401526116f6611e55565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608601518285018051919094169052825160009201829052915143920191909152608083015160a08401516113a69290611ad4565b600360208501515151600381111561177557611775612198565b14156118ee576117873415601e611056565b6001826101000151611799919061278f565b60c0820180519190915260e083018051602090810151835190910152516040908101519151911515918101919091528201516117e3906117dc9033906001611abe565b601f611056565b61180682602001516001600160a01b0316336001600160a01b0316146020611056565b611823826080015161181957600161181c565b60005b6021611056565b33600090815260046020908152604091829020805460ff19166001908117825590810181905591519182527fc1666c7e24a808bb79aa3a76d4067e3096a2451183271b34030013ab2216c070910160405180910390a160016060840152611888611e55565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606086015182850180519190941690528251600192019190915290514391015260a083015160c08301516113a69190600090611ad4565b50505050565b6119046004600054146027611056565b815161191f90158061191857508251600154145b6028611056565b60008080556002805461193190612446565b80601f016020809104026020016040519081016040528092919081815260200182805461195d90612446565b80156119aa5780601f1061197f576101008083540402835291602001916119aa565b820191906000526020600020905b81548152906001019060200180831161198d57829003601f168201915b50505050508060200190518101906119c291906125b8565b90506119d46000194310156029611056565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a1611a2734156025611056565b8051611a3f906001600160a01b031633146026611056565b611a47611e55565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518386018051919095169052608080870151855190151594019390935283514392019190915260a085015183519091015260c0840151915101526118ee81611b48565b6000611acc83853085611c1e565b949350505050565b611adc611f4d565b60005b6001811015611b2857848160018110611afa57611afa612763565b6020020151828260018110611b1157611b11612763565b602002015280611b208161286d565b915050611adf565b5081818460018110611b3c57611b3c612763565b60200201529392505050565b611b50611f98565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301511515608080870191909152845182015160a08701528451015160c086015283518101515160e086015292519092015151516101008401526004600055436001559051611be1918391016128cc565b60405160208183030381529060405260029080519060200190611c0592919061200f565b505050565b611c15838383611cf8565b611c0557600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611c8591612998565b60006040518083038185875af1925050503d8060008114611cc2576040519150601f19603f3d011682016040523d82523d6000602084013e611cc7565b606091505b5091509150611cd882826001611dc9565b5080806020019051810190611ced91906129b4565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611d5791612998565b60006040518083038185875af1925050503d8060008114611d94576040519150601f19603f3d011682016040523d82523d6000602084013e611d99565b606091505b5091509150611daa82826002611dc9565b5080806020019051810190611dbf91906129b4565b9695505050505050565b60608315611dd85750816105f9565b825115611de85782518084602001fd5b60405163100960cb60e01b815260048101839052602401611073565b6040805160a0810190915260006080820190815281905b81526000602082018190526040820181905260609091015290565b604051806040016040528060008152602001611e50612093565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611e506120a6565b6040805161014081018252600060e08201818152610100830182905261012083018290528252825160208181019094529081529091820190815260408051606081018252600080825260208281018290529282015291019081526040805160608101825260008082526020828101829052928201529101908152602001611f0a611f4d565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291015290565b60405180602001604052806001905b611f82604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611f5c5790505090565b604080516101208101825260008082526020820181905291810182905260608101829052608081019190915260a08101611fd0611f4d565b815260200160008152602001612002604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805461201b90612446565b90600052602060002090601f01602090048101928261203d5760008555612083565b82601f1061205657805160ff1916838001178555612083565b82800160010185558215612083579182015b82811115612083578251825591602001919060010190612068565b5061208f9291506120d9565b5090565b6040518060200160405280611e506120ee565b6040518060a0016040528060006001600160a01b0316815260200160001515815260200160008152602001612002611f4d565b5b8082111561208f57600081556001016120da565b6040805160a081019091528060008152602001611e1b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611e5060408051602081019091526000815290565b60006040828403121561215d57600080fd5b50919050565b6001600160a01b038116811461217857600080fd5b50565b60006020828403121561218d57600080fd5b81356105f981612163565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106121c5576121c5612198565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561221e5761221e6121e5565b60405290565b6040516080810167ffffffffffffffff8111828210171561221e5761221e6121e5565b604051610120810167ffffffffffffffff8111828210171561221e5761221e6121e5565b6040805190810167ffffffffffffffff8111828210171561221e5761221e6121e5565b60405160a0810167ffffffffffffffff8111828210171561221e5761221e6121e5565b6000602082840312156122c357600080fd5b6040516020810181811067ffffffffffffffff821117156122e6576122e66121e5565b60405290508082356001600160e01b03198116811461230457600080fd5b905292915050565b6000806000806080858703121561232257600080fd5b843561232d81612163565b9350602085013561233d81612163565b92506040850135915061235386606087016122b1565b905092959194509250565b6000610120828403121561215d57600080fd5b60005b8381101561238c578181015183820152602001612374565b838111156118ee5750506000910152565b82815260406020820152600082518060408401526123c2816060850160208701612371565b601f01601f1916919091016060019392505050565b801515811461217857600080fd5b803561060c816123d7565b60006040828403121561240257600080fd5b6040516040810181811067ffffffffffffffff82111715612425576124256121e5565b60405282358152602083013561243a816123d7565b60208201529392505050565b600181811c9082168061245a57607f821691505b6020821081141561215d57634e487b7160e01b600052602260045260246000fd5b805161060c81612163565b805161060c816123d7565b6000606082840312156124a357600080fd5b6040516060810181811067ffffffffffffffff821117156124c6576124c66121e5565b8060405250809150825181526020830151602082015260408301516124ea816123d7565b6040919091015292915050565b600082601f83011261250857600080fd5b6125106121fb565b8060608085018681111561252357600080fd5b855b81811015612546576125378882612491565b85526020909401938201612525565b50919695505050505050565b600060c0828403121561256457600080fd5b61256c612224565b825161257781612163565b8152602083015161258781612163565b6020820152604083015161259a81612163565b60408201526125ac84606085016124f7565b60608201529392505050565b60006101a082840312156125cb57600080fd5b6125d3612247565b6125dc8361247b565b81526125ea6020840161247b565b60208201526125fb6040840161247b565b604082015261260c6060840161247b565b606082015261261d60808401612486565b608082015261262f8460a085016124f7565b60a08201526101008084015160c083015261264e856101208601612491565b60e083015261018084015181830152508091505092915050565b600081830361012081121561267c57600080fd5b61268461226b565b8335815261010080601f198401121561269c57600080fd5b6126a46121fb565b6126ac61228e565b6020870135600481106126be57600080fd5b81526080603f19860112156126d257600080fd5b6126da612224565b945060408701356126ea81612163565b855260608701356126fa81612163565b6020860152608087013560408601526127168860a089016122b1565b606086015284602082015261272d60c088016123e5565b604082015261273e60e088016123e5565b606082015261274e8388016123e5565b60808201528152602083015250949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156127a2576127a2612779565b500190565b6001600160a01b03838116825282516020808401919091528301515180516101408401929190600481106127dd576127dd612198565b806040860152506020810151828151166060860152826020820151166080860152604081015160a086015263ffffffff60e01b6060820151511660c0860152506040810151915061283260e085018315159052565b60608101511515610100850152608001511515610120909301929092529392505050565b60008282101561286857612868612779565b500390565b600060001982141561288157612881612779565b5060010190565b8060005b60018110156118ee576128b684835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010161288c565b81516001600160a01b031681526020808301516101a08301916128f9908401826001600160a01b03169052565b50604083015161291460408401826001600160a01b03169052565b50606083015161292f60608401826001600160a01b03169052565b506080830151612943608084018215159052565b5060a083015161295660a0840182612888565b5060c08301516101008381019190915260e084015180516101208501526020810151610140850152604001511515610160840152909201516101809091015290565b600082516129aa818460208701612371565b9190910192915050565b6000602082840312156129c657600080fd5b81516105f9816123d756fea26469706673582212204e45cbc5854f5bafd1e12ff073189fc10ec962ca2b1389f9ddda73fd38ae1bc064736f6c634300080c0033`,
  BytecodeLen: 12181,
  Which: `oD`,
  version: 7,
  views: {
    Bridger_v: `Bridger_v`,
    Creator_v: `Creator_v`,
    balance_NFT_v: `balance_NFT_v`,
    balance_v: `balance_v`,
    lockedNFT_v: `lockedNFT_v`,
    saved_v: `saved_v`
    }
  };
export const _stateSourceMap = {
  1: {
    at: './indexBridge.rsh:47:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './indexBridge.rsh:163:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './indexBridge.rsh:68:57:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "IERC721Receiver": IERC721Receiver,
  "adminSaveNFT": adminSaveNFT,
  "claimNFT": claimNFT,
  "lockNFT": lockNFT
  };
export const _APIs = {
  IERC721Receiver: IERC721Receiver,
  adminSaveNFT: adminSaveNFT,
  claimNFT: claimNFT,
  lockNFT: lockNFT
  };
