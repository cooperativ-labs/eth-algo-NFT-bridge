// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

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
  
  
  const _Bridger_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v489, v490, v491, v496] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v511;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _Creator_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v489, v490, v491, v496] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v489;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balance_NFT_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v489, v490, v491, v496] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v531;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _balance_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v489, v490, v491, v496] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v520;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _lockedNFT_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v489, v490, v491, v496] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = svs;
      return (await ((async () => {
        
        
        return v512;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _saved_v = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v489, v490, v491, v496] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = svs;
      return (await ((async (_v532 ) => {
          const v532 = stdlib.protect(ctc0, _v532, null);
        
        const v533 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v532), null);
        const v534 = stdlib.fromSome(v533, stdlib.checkedBigNumberify('./indexBridge.rsh:55:45:decimal', stdlib.UInt_max, '0'));
        
        return v534;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Bridger_v: {
        decode: _Bridger_v,
        ty: ctc0
        },
      Creator_v: {
        decode: _Creator_v,
        ty: ctc0
        },
      balance_NFT_v: {
        decode: _balance_NFT_v,
        ty: ctc2
        },
      balance_v: {
        decode: _balance_v,
        ty: ctc2
        },
      lockedNFT_v: {
        decode: _lockedNFT_v,
        ty: ctc3
        },
      saved_v: {
        decode: _saved_v,
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
  
  
  const v476 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v477 = [v476];
  const v483 = 'I have deployed';
  const v484 = stdlib.protect(ctc5, await interact.getParams(v483), {
    at: './indexBridge.rsh:39:66:application',
    fs: ['at ./indexBridge.rsh:38:21:application call to [unknown function] (defined at: ./indexBridge.rsh:38:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v485 = v484.Bridger;
  const v486 = v484.NFT;
  
  const txn1 = await (ctc.sendrecv({
    args: [v485, v486],
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
      
      const {data: [v490, v491], secs: v493, time: v492, didSend: v33, from: v489 } = txn1;
      
      const v494 = v477[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0')];
      const v495 = stdlib.Array_set(v494, '0', stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'));
      const v496 = stdlib.Array_set(v477, stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'), v495);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v491
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
  const {data: [v490, v491], secs: v493, time: v492, didSend: v33, from: v489 } = txn1;
  const v494 = v477[stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0')];
  const v495 = stdlib.Array_set(v494, '0', stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'));
  const v496 = stdlib.Array_set(v477, stdlib.checkedBigNumberify('./indexBridge.rsh:43:17:dot', stdlib.UInt_max, '0'), v495);
  ;
  ;
  const v499 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v499), {
    at: './indexBridge.rsh:45:35:application',
    fs: ['at ./indexBridge.rsh:45:35:application call to [unknown function] (defined at: ./indexBridge.rsh:45:35:function exp)', 'at ./indexBridge.rsh:45:35:application call to "liftedInteract" (defined at: ./indexBridge.rsh:45:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v489, v490, v491, v496],
    evt_cnt: 0,
    funcNum: 1,
    lct: v492,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:48:22:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:48:25:decimal', stdlib.UInt_max, '1'), v491]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v502, time: v501, didSend: v45, from: v500 } = txn2;
      
      ;
      const v503 = v496[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0')];
      const v504 = v503[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0')];
      const v505 = stdlib.safeAdd(v504, stdlib.checkedBigNumberify('./indexBridge.rsh:48:25:decimal', stdlib.UInt_max, '1'));
      const v507 = stdlib.Array_set(v503, '0', v505);
      const v508 = stdlib.Array_set(v496, stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0'), v507);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./indexBridge.rsh:48:25:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v491
        });
      const v511 = v490;
      const v512 = true;
      const v513 = v501;
      const v519 = v508;
      const v520 = stdlib.checkedBigNumberify('./indexBridge.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v530 = v519[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
        const v531 = v530[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v491
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
  const {data: [], secs: v502, time: v501, didSend: v45, from: v500 } = txn2;
  ;
  const v503 = v496[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0')];
  const v504 = v503[stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0')];
  const v505 = stdlib.safeAdd(v504, stdlib.checkedBigNumberify('./indexBridge.rsh:48:25:decimal', stdlib.UInt_max, '1'));
  const v507 = stdlib.Array_set(v503, '0', v505);
  const v508 = stdlib.Array_set(v496, stdlib.checkedBigNumberify('./indexBridge.rsh:48:17:dot', stdlib.UInt_max, '0'), v507);
  ;
  const v509 = stdlib.addressEq(v489, v500);
  stdlib.assert(v509, {
    at: './indexBridge.rsh:48:17:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  let v511 = v490;
  let v512 = true;
  let v513 = v501;
  let v519 = v508;
  let v520 = stdlib.checkedBigNumberify('./indexBridge.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v530 = v519[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
    const v531 = v530[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
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
        args: [v489, v490, v491, v511, v512, v519, v520, v530, v531],
        evt_cnt: 0,
        funcNum: 4,
        lct: v513,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:160:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1088, time: v1087, didSend: v397, from: v1086 } = txn4;
          
          ;
          const cv511 = v511;
          const cv512 = v512;
          const cv513 = v1087;
          const cv519 = v519;
          const cv520 = v520;
          
          await (async () => {
            const v511 = cv511;
            const v512 = cv512;
            const v513 = cv513;
            const v519 = cv519;
            const v520 = cv520;
            
            if (await (async () => {
              
              return true;})()) {
              const v530 = v519[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
              const v531 = v530[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v491
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
      const {data: [], secs: v1088, time: v1087, didSend: v397, from: v1086 } = txn4;
      ;
      const v1089 = stdlib.addressEq(v489, v1086);
      stdlib.assert(v1089, {
        at: './indexBridge.rsh:160:21:dot',
        fs: ['at ./indexBridge.rsh:159:40:application call to [unknown function] (defined at: ./indexBridge.rsh:159:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv511 = v511;
      const cv512 = v512;
      const cv513 = v1087;
      const cv519 = v519;
      const cv520 = v520;
      
      v511 = cv511;
      v512 = cv512;
      v513 = cv513;
      v519 = cv519;
      v520 = cv520;
      
      continue;
      }
    else {
      const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn3;
      switch (v639[0]) {
        case 'IERC721Receiver0_79': {
          const v642 = v639[1];
          undefined /* setApiDetails */;
          ;
          const v691 = stdlib.Array_set(v530, '0', v531);
          const v692 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v691);
          ;
          const v698 = 'true';
          await txn3.getOutput('IERC721Receiver', 'v698', ctc6, v698);
          const cv511 = v511;
          const cv512 = v512;
          const cv513 = v640;
          const cv519 = v692;
          const cv520 = v520;
          
          v511 = cv511;
          v512 = cv512;
          v513 = cv513;
          v519 = cv519;
          v520 = cv520;
          
          continue;
          break;
          }
        case 'adminSaveNFT0_79': {
          const v753 = v639[1];
          undefined /* setApiDetails */;
          ;
          const v800 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v802 = stdlib.Array_set(v530, '0', v800);
          const v803 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v802);
          ;
          const v821 = stdlib.addressEq(v638, v489);
          stdlib.assert(v821, {
            at: './indexBridge.rsh:92:24:application',
            fs: ['at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
            msg: 'Only Backend can save NFT',
            who: 'Creator'
            });
          const v822 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v511), null);
          const v823 = stdlib.fromSome(v822, stdlib.checkedBigNumberify('./indexBridge.rsh:55:45:decimal', stdlib.UInt_max, '0'));
          const v824 = stdlib.eq(v823, stdlib.checkedBigNumberify('./indexBridge.rsh:93:56:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v824, {
            at: './indexBridge.rsh:93:24:application',
            fs: ['at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
            msg: 'one NFT already locked by this bridger',
            who: 'Creator'
            });
          const v825 = true;
          await txn3.getOutput('adminSaveNFT', 'v825', ctc10, v825);
          const cv511 = v511;
          const cv512 = v512;
          const cv513 = v640;
          const cv519 = v803;
          const cv520 = v520;
          
          v511 = cv511;
          v512 = cv512;
          v513 = cv513;
          v519 = cv519;
          v520 = cv520;
          
          continue;
          break;
          }
        case 'claimNFT0_79': {
          const v864 = v639[1];
          undefined /* setApiDetails */;
          ;
          const v913 = stdlib.Array_set(v530, '0', v531);
          const v914 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v913);
          ;
          const v944 = stdlib.addressEq(v638, v490);
          stdlib.assert(v944, {
            at: './indexBridge.rsh:134:24:application',
            fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
            msg: 'Only Bridger can claim NFT when bridging',
            who: 'Creator'
            });
          stdlib.assert(v512, {
            at: './indexBridge.rsh:135:24:application',
            fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v946 = v914[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v947 = v946[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v948 = stdlib.gt(v947, stdlib.checkedBigNumberify('./indexBridge.rsh:136:40:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v948, {
            at: './indexBridge.rsh:136:24:application',
            fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v954 = stdlib.safeSub(v947, stdlib.checkedBigNumberify('./indexBridge.rsh:138:26:decimal', stdlib.UInt_max, '1'));
          const v956 = stdlib.Array_set(v946, '0', v954);
          const v957 = stdlib.Array_set(v914, stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '0'), v956);
          ;
          await stdlib.mapSet(map0, v638, stdlib.checkedBigNumberify('./indexBridge.rsh:140:31:decimal', stdlib.UInt_max, '0'));
          const v958 = true;
          await txn3.getOutput('claimNFT', 'v958', ctc10, v958);
          const cv511 = v511;
          const cv512 = false;
          const cv513 = v640;
          const cv519 = v957;
          const cv520 = v520;
          
          v511 = cv511;
          v512 = cv512;
          v513 = cv513;
          v519 = cv519;
          v520 = cv520;
          
          continue;
          break;
          }
        case 'lockNFT0_79': {
          const v975 = v639[1];
          undefined /* setApiDetails */;
          ;
          const v1022 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1024 = stdlib.Array_set(v530, '0', v1022);
          const v1025 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v1024);
          ;
          const v1077 = stdlib.addressEq(v638, v490);
          stdlib.assert(v1077, {
            at: './indexBridge.rsh:110:24:application',
            fs: ['at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
            msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
            who: 'Creator'
            });
          const v1078 = v512 ? false : true;
          stdlib.assert(v1078, {
            at: './indexBridge.rsh:111:32:application',
            fs: ['at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
            msg: 'NFT is already locked. You can only bridge one NFT at a time',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v638, stdlib.checkedBigNumberify('./indexBridge.rsh:113:39:decimal', stdlib.UInt_max, '1'));
          const v1079 = true;
          await txn3.getOutput('lockNFT', 'v1079', ctc10, v1079);
          const cv511 = v511;
          const cv512 = true;
          const cv513 = v640;
          const cv519 = v1025;
          const cv520 = v520;
          
          v511 = cv511;
          v512 = cv512;
          v513 = cv513;
          v519 = cv519;
          v520 = cv520;
          
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
  
  
  const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v576 = stdlib.protect(ctc9, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:150:13:application call to [unknown function] (defined at: ./indexBridge.rsh:150:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runIERC721Receiver0_79" (defined at: ./indexBridge.rsh:147:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'IERC721Receiver'
    });
  const v592 = ['IERC721Receiver0_79', v576];
  
  const txn1 = await (ctc.sendrecv({
    args: [v489, v490, v491, v511, v512, v519, v520, v530, v531, v592],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:152:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:152:33:decimal', stdlib.UInt_max, '0'), v491]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn1;
      
      switch (v639[0]) {
        case 'IERC721Receiver0_79': {
          const v642 = v639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "IERC721Receiver"
            });
          ;
          const v691 = stdlib.Array_set(v530, '0', v531);
          const v692 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v691);
          ;
          const v698 = 'true';
          const v699 = await txn1.getOutput('IERC721Receiver', 'v698', ctc8, v698);
          
          const v1746 = v511;
          const v1747 = v512;
          const v1749 = v692;
          const v1750 = v520;
          const v1751 = v692[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1752 = v1751[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v753 = v639[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v864 = v639[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v975 = v639[1];
          
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
  const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn1;
  switch (v639[0]) {
    case 'IERC721Receiver0_79': {
      const v642 = v639[1];
      undefined /* setApiDetails */;
      ;
      const v691 = stdlib.Array_set(v530, '0', v531);
      const v692 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v691);
      ;
      const v698 = 'true';
      const v699 = await txn1.getOutput('IERC721Receiver', 'v698', ctc8, v698);
      if (v318) {
        stdlib.protect(ctc0, await interact.out(v642, v699), {
          at: './indexBridge.rsh:148:13:application',
          fs: ['at ./indexBridge.rsh:148:13:application call to [unknown function] (defined at: ./indexBridge.rsh:148:13:function exp)', 'at ./indexBridge.rsh:155:20:application call to "res" (defined at: ./indexBridge.rsh:154:13:function exp)', 'at ./indexBridge.rsh:154:13:application call to [unknown function] (defined at: ./indexBridge.rsh:154:13:function exp)'],
          msg: 'out',
          who: 'IERC721Receiver'
          });
        }
      else {
        }
      
      const v1746 = v511;
      const v1747 = v512;
      const v1749 = v692;
      const v1750 = v520;
      const v1751 = v692[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1752 = v1751[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'adminSaveNFT0_79': {
      const v753 = v639[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v864 = v639[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v975 = v639[1];
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
  
  
  const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v539 = ctc.selfAddress();
  const v541 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./indexBridge.rsh:81:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'adminSaveNFT'
    });
  const v543 = stdlib.addressEq(v539, v489);
  stdlib.assert(v543, {
    at: './indexBridge.rsh:85:23:application',
    fs: ['at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:17:function exp)', 'at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./indexBridge.rsh:81:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'Only Backend can save NFT',
    who: 'adminSaveNFT'
    });
  const v544 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v511), null);
  const v545 = stdlib.fromSome(v544, stdlib.checkedBigNumberify('./indexBridge.rsh:55:45:decimal', stdlib.UInt_max, '0'));
  const v546 = stdlib.eq(v545, stdlib.checkedBigNumberify('./indexBridge.rsh:86:55:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v546, {
    at: './indexBridge.rsh:86:23:application',
    fs: ['at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:17:function exp)', 'at ./indexBridge.rsh:84:13:application call to [unknown function] (defined at: ./indexBridge.rsh:84:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runadminSaveNFT0_79" (defined at: ./indexBridge.rsh:81:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'one NFT already locked by this bridger',
    who: 'adminSaveNFT'
    });
  const v549 = ['adminSaveNFT0_79', v541];
  
  const txn1 = await (ctc.sendrecv({
    args: [v489, v490, v491, v511, v512, v519, v520, v530, v531, v549],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:89:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:89:25:decimal', stdlib.UInt_max, '1'), v491]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn1;
      
      switch (v639[0]) {
        case 'IERC721Receiver0_79': {
          const v642 = v639[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v753 = v639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "adminSaveNFT"
            });
          ;
          const v800 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v802 = stdlib.Array_set(v530, '0', v800);
          const v803 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v802);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v491
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v511), null);
          const v825 = true;
          const v826 = await txn1.getOutput('adminSaveNFT', 'v825', ctc5, v825);
          
          const v1791 = v511;
          const v1792 = v512;
          const v1794 = v803;
          const v1795 = v520;
          const v1796 = v803[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1797 = v1796[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimNFT0_79': {
          const v864 = v639[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v975 = v639[1];
          
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
  const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn1;
  switch (v639[0]) {
    case 'IERC721Receiver0_79': {
      const v642 = v639[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v753 = v639[1];
      undefined /* setApiDetails */;
      ;
      const v800 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v802 = stdlib.Array_set(v530, '0', v800);
      const v803 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v802);
      ;
      const v821 = stdlib.addressEq(v638, v489);
      stdlib.assert(v821, {
        at: './indexBridge.rsh:92:24:application',
        fs: ['at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
        msg: 'Only Backend can save NFT',
        who: 'adminSaveNFT'
        });
      const v822 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v511), null);
      const v823 = stdlib.fromSome(v822, stdlib.checkedBigNumberify('./indexBridge.rsh:55:45:decimal', stdlib.UInt_max, '0'));
      const v824 = stdlib.eq(v823, stdlib.checkedBigNumberify('./indexBridge.rsh:93:56:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v824, {
        at: './indexBridge.rsh:93:24:application',
        fs: ['at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
        msg: 'one NFT already locked by this bridger',
        who: 'adminSaveNFT'
        });
      const v825 = true;
      const v826 = await txn1.getOutput('adminSaveNFT', 'v825', ctc5, v825);
      if (v318) {
        stdlib.protect(ctc0, await interact.out(v753, v826), {
          at: './indexBridge.rsh:82:13:application',
          fs: ['at ./indexBridge.rsh:82:13:application call to [unknown function] (defined at: ./indexBridge.rsh:82:13:function exp)', 'at ./indexBridge.rsh:95:20:application call to "res" (defined at: ./indexBridge.rsh:91:13:function exp)', 'at ./indexBridge.rsh:91:13:application call to [unknown function] (defined at: ./indexBridge.rsh:91:13:function exp)'],
          msg: 'out',
          who: 'adminSaveNFT'
          });
        }
      else {
        }
      
      const v1791 = v511;
      const v1792 = v512;
      const v1794 = v803;
      const v1795 = v520;
      const v1796 = v803[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1797 = v1796[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'claimNFT0_79': {
      const v864 = v639[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v975 = v639[1];
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
  
  
  const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v561 = ctc.selfAddress();
  const v563 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'claimNFT'
    });
  const v565 = stdlib.addressEq(v561, v490);
  stdlib.assert(v565, {
    at: './indexBridge.rsh:126:23:application',
    fs: ['at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:17:function exp)', 'at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'Only Bridger can claim NFT when bridging',
    who: 'claimNFT'
    });
  stdlib.assert(v512, {
    at: './indexBridge.rsh:127:23:application',
    fs: ['at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:17:function exp)', 'at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v569 = stdlib.gt(v531, stdlib.checkedBigNumberify('./indexBridge.rsh:128:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v569, {
    at: './indexBridge.rsh:128:23:application',
    fs: ['at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:17:function exp)', 'at ./indexBridge.rsh:125:13:application call to [unknown function] (defined at: ./indexBridge.rsh:125:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runclaimNFT0_79" (defined at: ./indexBridge.rsh:122:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v572 = ['claimNFT0_79', v563];
  
  const txn1 = await (ctc.sendrecv({
    args: [v489, v490, v491, v511, v512, v519, v520, v530, v531, v572],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:131:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:131:25:decimal', stdlib.UInt_max, '0'), v491]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn1;
      
      switch (v639[0]) {
        case 'IERC721Receiver0_79': {
          const v642 = v639[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v753 = v639[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v864 = v639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimNFT"
            });
          ;
          const v913 = stdlib.Array_set(v530, '0', v531);
          const v914 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v913);
          ;
          const v946 = v914[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v947 = v946[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
          const v954 = stdlib.safeSub(v947, stdlib.checkedBigNumberify('./indexBridge.rsh:138:26:decimal', stdlib.UInt_max, '1'));
          const v956 = stdlib.Array_set(v946, '0', v954);
          const v957 = stdlib.Array_set(v914, stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '0'), v956);
          sim_r.txns.push({
            kind: 'from',
            to: v638,
            tok: v491
            });
          await stdlib.simMapSet(sim_r, 0, v638, stdlib.checkedBigNumberify('./indexBridge.rsh:140:31:decimal', stdlib.UInt_max, '0'));
          const v958 = true;
          const v959 = await txn1.getOutput('claimNFT', 'v958', ctc5, v958);
          
          const v1836 = v511;
          const v1837 = false;
          const v1839 = v957;
          const v1840 = v520;
          const v1841 = v957[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1842 = v1841[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'lockNFT0_79': {
          const v975 = v639[1];
          
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
  const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn1;
  switch (v639[0]) {
    case 'IERC721Receiver0_79': {
      const v642 = v639[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v753 = v639[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v864 = v639[1];
      undefined /* setApiDetails */;
      ;
      const v913 = stdlib.Array_set(v530, '0', v531);
      const v914 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v913);
      ;
      const v944 = stdlib.addressEq(v638, v490);
      stdlib.assert(v944, {
        at: './indexBridge.rsh:134:24:application',
        fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
        msg: 'Only Bridger can claim NFT when bridging',
        who: 'claimNFT'
        });
      stdlib.assert(v512, {
        at: './indexBridge.rsh:135:24:application',
        fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v946 = v914[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
      const v947 = v946[stdlib.checkedBigNumberify('./indexBridge.rsh:136:32:application', stdlib.UInt_max, '0')];
      const v948 = stdlib.gt(v947, stdlib.checkedBigNumberify('./indexBridge.rsh:136:40:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v948, {
        at: './indexBridge.rsh:136:24:application',
        fs: ['at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v954 = stdlib.safeSub(v947, stdlib.checkedBigNumberify('./indexBridge.rsh:138:26:decimal', stdlib.UInt_max, '1'));
      const v956 = stdlib.Array_set(v946, '0', v954);
      const v957 = stdlib.Array_set(v914, stdlib.checkedBigNumberify('./indexBridge.rsh:138:36:application', stdlib.UInt_max, '0'), v956);
      ;
      await stdlib.mapSet(map0, v638, stdlib.checkedBigNumberify('./indexBridge.rsh:140:31:decimal', stdlib.UInt_max, '0'));
      const v958 = true;
      const v959 = await txn1.getOutput('claimNFT', 'v958', ctc5, v958);
      if (v318) {
        stdlib.protect(ctc0, await interact.out(v864, v959), {
          at: './indexBridge.rsh:123:13:application',
          fs: ['at ./indexBridge.rsh:123:13:application call to [unknown function] (defined at: ./indexBridge.rsh:123:13:function exp)', 'at ./indexBridge.rsh:143:20:application call to "res" (defined at: ./indexBridge.rsh:133:13:function exp)', 'at ./indexBridge.rsh:133:13:application call to [unknown function] (defined at: ./indexBridge.rsh:133:13:function exp)'],
          msg: 'out',
          who: 'claimNFT'
          });
        }
      else {
        }
      
      const v1836 = v511;
      const v1837 = false;
      const v1839 = v957;
      const v1840 = v520;
      const v1841 = v957[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1842 = v1841[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'lockNFT0_79': {
      const v975 = v639[1];
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
  
  
  const [v489, v490, v491, v511, v512, v519, v520, v530, v531] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v551 = ctc.selfAddress();
  const v553 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge.rsh:1:23:application',
    fs: ['at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./indexBridge.rsh:99:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'in',
    who: 'lockNFT'
    });
  const v555 = stdlib.addressEq(v551, v490);
  stdlib.assert(v555, {
    at: './indexBridge.rsh:103:23:application',
    fs: ['at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:17:function exp)', 'at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./indexBridge.rsh:99:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
    who: 'lockNFT'
    });
  const v556 = v512 ? false : true;
  stdlib.assert(v556, {
    at: './indexBridge.rsh:104:31:application',
    fs: ['at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:17:function exp)', 'at ./indexBridge.rsh:102:13:application call to [unknown function] (defined at: ./indexBridge.rsh:102:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to "runlockNFT0_79" (defined at: ./indexBridge.rsh:99:13:function exp)', 'at ./indexBridge.rsh:68:57:application call to [unknown function] (defined at: ./indexBridge.rsh:68:57:function exp)'],
    msg: 'NFT is already locked. You can only bridge one NFT at a time',
    who: 'lockNFT'
    });
  const v559 = ['lockNFT0_79', v553];
  
  const txn1 = await (ctc.sendrecv({
    args: [v489, v490, v491, v511, v512, v519, v520, v530, v531, v559],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge.rsh:107:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge.rsh:107:25:decimal', stdlib.UInt_max, '1'), v491]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn1;
      
      switch (v639[0]) {
        case 'IERC721Receiver0_79': {
          const v642 = v639[1];
          
          break;
          }
        case 'adminSaveNFT0_79': {
          const v753 = v639[1];
          
          break;
          }
        case 'claimNFT0_79': {
          const v864 = v639[1];
          
          break;
          }
        case 'lockNFT0_79': {
          const v975 = v639[1];
          sim_r.txns.push({
            kind: 'api',
            who: "lockNFT"
            });
          ;
          const v1022 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1024 = stdlib.Array_set(v530, '0', v1022);
          const v1025 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v1024);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v491
            });
          await stdlib.simMapSet(sim_r, 0, v638, stdlib.checkedBigNumberify('./indexBridge.rsh:113:39:decimal', stdlib.UInt_max, '1'));
          const v1079 = true;
          const v1080 = await txn1.getOutput('lockNFT', 'v1079', ctc5, v1079);
          
          const v1881 = v511;
          const v1882 = true;
          const v1884 = v1025;
          const v1885 = v520;
          const v1886 = v1025[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1887 = v1886[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
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
  const {data: [v639], secs: v641, time: v640, didSend: v318, from: v638 } = txn1;
  switch (v639[0]) {
    case 'IERC721Receiver0_79': {
      const v642 = v639[1];
      return;
      break;
      }
    case 'adminSaveNFT0_79': {
      const v753 = v639[1];
      return;
      break;
      }
    case 'claimNFT0_79': {
      const v864 = v639[1];
      return;
      break;
      }
    case 'lockNFT0_79': {
      const v975 = v639[1];
      undefined /* setApiDetails */;
      ;
      const v1022 = stdlib.safeAdd(v531, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1024 = stdlib.Array_set(v530, '0', v1022);
      const v1025 = stdlib.Array_set(v519, stdlib.checkedBigNumberify('./indexBridge.rsh:68:57:dot', stdlib.UInt_max, '0'), v1024);
      ;
      const v1077 = stdlib.addressEq(v638, v490);
      stdlib.assert(v1077, {
        at: './indexBridge.rsh:110:24:application',
        fs: ['at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
        msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
        who: 'lockNFT'
        });
      const v1078 = v512 ? false : true;
      stdlib.assert(v1078, {
        at: './indexBridge.rsh:111:32:application',
        fs: ['at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
        msg: 'NFT is already locked. You can only bridge one NFT at a time',
        who: 'lockNFT'
        });
      await stdlib.mapSet(map0, v638, stdlib.checkedBigNumberify('./indexBridge.rsh:113:39:decimal', stdlib.UInt_max, '1'));
      const v1079 = true;
      const v1080 = await txn1.getOutput('lockNFT', 'v1079', ctc5, v1079);
      if (v318) {
        stdlib.protect(ctc0, await interact.out(v975, v1080), {
          at: './indexBridge.rsh:100:13:application',
          fs: ['at ./indexBridge.rsh:100:13:application call to [unknown function] (defined at: ./indexBridge.rsh:100:13:function exp)', 'at ./indexBridge.rsh:116:20:application call to "res" (defined at: ./indexBridge.rsh:109:13:function exp)', 'at ./indexBridge.rsh:109:13:application call to [unknown function] (defined at: ./indexBridge.rsh:109:13:function exp)'],
          msg: 'out',
          who: 'lockNFT'
          });
        }
      else {
        }
      
      const v1881 = v511;
      const v1882 = true;
      const v1884 = v1025;
      const v1885 = v520;
      const v1886 = v1025[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1887 = v1886[stdlib.checkedBigNumberify('./indexBridge.rsh:76:44:application', stdlib.UInt_max, '0')];
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
  appApproval: `BiAUAAEEA0xACAnu9d6pCp6inrQMku7r5wzp68/4D9nQhKMLyNbelwa5wM37B6349ZUIpomv1wL///////////8BeqCNBiYDAQABAQAiNQAxGEEFMSpkSSJbNQEhBls1AjEZIxJBAAoxACghB69mQgT9NhoAF0lBATsiNQQjNQZJIQgMQACXSSEJDEAAVUkhCgxAADVJIQsMQAASIQsSRCo1/yk0/1AhBK9QQgF6IQoSRDYaATYaAlA2GgNQNhoEUDX/KDT/UEIBXiEJEkQ0ASQSRChkKWRQSTUDVwAgNQdCBJtJIQwMQAAgIQwSRDQBJBJEIjYaAYgEqUk1/yNbNP8iVU0WNQdCBHQhCBJEKjX/gAEDNP9QIQSvUEIBCkkhDQxAAFRJIQ4MQAA0SSEPDEAAFCEPEkQqNf+AAQI0/1AhBK9QQgDhIQ4SRDQBJBJEKGQpZFBJNQNXSCA1B0IEHiENEkQ0ASQSRChkKWRQSTUDV5MINQdCBAVJIRAMQAAZIRASRDQBJBJEKGQpZFBJNQNXegg1B0ID5YH98IU9EkQ0ASQSRChkKWRQSTUDV2gBNQdCA8k2GgIXNQQ2GgM2GgEXSSUMQAIrSSQMQABZJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABJEnNPOwMgYhEQ9ENP8xABJENP80A1cgIDQDIQVbNANXSCA0A1doARcyBjQDV2kRNAMhEltCArlIJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSklXACA1/1cgIDX+IQVbNf1XSCA1/FdoARc1+1dpETX6IRJbNflXghE1+IGTAVs190k1BTX2gARfpNvYNPZQsDIGIREMRDT2IlVJgQIMQADSSSUMQABRJRJEIzT9iAMnMQA0/hJENPsURDEAKIAJAQAAAAAAAAABZoAJAAAAAAAABDcBsCk1BzT/NP40/TT8IzIGNPg09yMIFjX1VwgJNPVMUDT5QgH1SDT4NPcWNfRXCAk09ExQNfUxADT+EkQ0+0Q09VcAEUk19CJbSTXzIg1EsSKyASOyEiSyEDEAshQ0/bIRszEAKIAJAQAAAAAAAAAAZoAJAAAAAAAAA74BsCk1BzT/NP40/TT8IjIGNPQ08yMJFjXyVwgJNPJMUDT5QgF6SSMMQABQSCM0/YgCVzEANP8SRCI0/IgCJEk19SNbNPUiVU0iEkSACQAAAAAAAAM5AbApNQc0/zT+NP00/DT7MgY0+DT3IwgWNfVXCAk09UxQNPlCASRIgAwAAAAAAAACunRydWWwgAR0cnVlNQc0/zT+NP00/DT7MgY0+DT3FjX1VwgJNPVMUDT5QgDtSSMMQABoIxJEIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/1cgIDX+IQVbNf1XSBE1/IAEmouRdLA0/FcAETX7IzT9iAGPNP8xABJENP80/jT9NP4jMgY0+0kiWyMIFjX6VwgJNPpMUCJCAH9IIROIAUsiNAESRDQESSISTDQCEhFESTUFSVcAIDX/gSBbNf6ABNnpsco0/1A0/hZQsIERr0k1/VcAESEGrzX7VwgJNPtMUDX8IROIAQOxIrIBIrISJLIQMgqyFDT+shGzMQA0/1A0/hZQNPxQKEsBVwBZZ0gjNQEyBjUCQgByNf81/jX9Nfw1+zX6Nfk1+DT+VwARSTX3Ils19jT4NPlQNPoWUDT7UDT8FlEHCFA0/lA0/xZQNPdQNPYWUChLAVcAf2cpSwFXfxxnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJTE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghB6+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAkEkQ4EU8CEkQ4EhJEiQ==`,
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
                "name": "v490",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v491",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
                "name": "v490",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v491",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
        "internalType": "struct T13",
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
                    "internalType": "enum _enum_T16",
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
                        "internalType": "struct T14",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
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
                "internalType": "struct T16",
                "name": "v639",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
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
        "internalType": "struct T13",
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
    "name": "_reach_oe_v1079",
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
        "internalType": "struct T14",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v698",
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
    "name": "_reach_oe_v825",
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
    "name": "_reach_oe_v958",
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
        "internalType": "struct T14",
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
        "internalType": "struct T14",
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
        "internalType": "struct T13",
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
                    "internalType": "enum _enum_T16",
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
                        "internalType": "struct T14",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T15",
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
                "internalType": "struct T16",
                "name": "v639",
                "type": "tuple"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
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
        "internalType": "struct T13",
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
        "name": "v1895",
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
  Bytecode: `0x608060405260405162002f8538038062002f858339810160408190526200002691620003ef565b60008055436003556200003862000236565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a18051600090819052815160209081018290528251604090810183905283518285018051919091528051825160608101845285815282515185015194810194909452905151820151151591830191909152620000f192909162000189565b6040820152620001043415600d6200020c565b6200010e6200027d565b33815260208084018051516001600160a01b0390811683850152905182015116604080840191909152838101516060840152600160008190554390555162000159918391016200047a565b604051602081830303815290604052600290805190602001906200017f929190620002a8565b505050506200055c565b6200019362000337565b60005b6001811015620001e957848160018110620001b557620001b562000464565b6020020151828260018110620001cf57620001cf62000464565b602002015280620001e081620004f5565b91505062000196565b508181846001811062000200576200020062000464565b60200201529392505050565b81620002325760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200026962000337565b81526020016200027862000337565b905290565b6040805160808101825260008082526020820181905291810191909152606081016200027862000337565b828054620002b6906200051f565b90600052602060002090601f016020900481019282620002da576000855562000325565b82601f10620002f557805160ff191683800117855562000325565b8280016001018555821562000325579182015b828111156200032557825182559160200191906001019062000308565b506200033392915062000384565b5090565b60405180602001604052806001905b6200036d604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003465790505090565b5b8082111562000333576000815560010162000385565b604080519081016001600160401b0381118282101715620003cc57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620003ea57600080fd5b919050565b600081830360608112156200040357600080fd5b6200040d6200039b565b835181526040601f19830112156200042457600080fd5b6200042e6200039b565b91506200043e60208501620003d2565b82526200044e60408501620003d2565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b0390811682526020808401518216818401526040808501519092168284015260608085015160c08501939192919083860160005b6001811015620004e95782518051835285810151868401528401511515848301529184019190850190600101620004b7565b50505050505092915050565b60006000198214156200051857634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200053457607f821691505b602082108114156200055657634e487b7160e01b600052602260045260246000fd5b50919050565b612a19806200056c6000396000f3fe6080604052600436106100f65760003560e01c8063832307571161008f578063ab53f2c611610061578063ab53f2c61461024c578063bee266091461026f578063d2b339bd14610277578063d76a47691461028c578063e43ffb9f146102a157005b80638323075714610209578063989653651461021e578063a1c6864014610231578063a7661d541461023957005b80633bc5b7bf116100c85780633bc5b7bf14610183578063672756ad146101b057806369e13bd7146101c8578063819938fc146101f457005b80631e93b0f1146100ff5780632c10a159146101235780633894aea5146101365780633a3dbe721461016357005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b6100fd61013136600461215d565b6102b6565b34801561014257600080fd5b5061014b6102da565b6040516001600160a01b03909116815260200161011a565b34801561016f57600080fd5b5061011061017e36600461218d565b6102ec565b34801561018f57600080fd5b506101a361019e36600461218d565b610316565b60405161011a91906121c0565b6101b8610342565b604051901515815260200161011a565b6101db6101d636600461231e565b610372565b60405190516001600160e01b031916815260200161011a565b34801561020057600080fd5b5061014b6103e9565b34801561021557600080fd5b50600154610110565b6100fd61022c366004612370565b6103f5565b6101b8610415565b6100fd61024736600461215d565b610445565b34801561025857600080fd5b50610261610465565b60405161011a9291906123af565b6101b8610502565b34801561028357600080fd5b50610110610532565b34801561029857600080fd5b506101b861053e565b3480156102ad57600080fd5b5061011061054a565b6102be611ec1565b6102d66102d036849003840184612402565b82610556565b5050565b6000806102e6816107a1565b91505090565b60408051602081019091526001600160a01b038216815260009061030f81610922565b9392505050565b604080516060810182526000808252602082018190529181019190915261033c82610ad9565b92915050565b600061034c611ef3565b6020810151516002905261035e611ec1565b6103688282610bab565b6040015192915050565b604080516020810190915260008152610389611ef3565b6020818101805151600090528051518201516001600160a01b0389811690915281515183015190881690830152805151820151604001869052515101516060018390526103d4611ec1565b6103de8282610bab565b519695505050505050565b6000806102e6816112f6565b6103fd611ec1565b6102d661040f36849003840184612458565b82610bab565b600061041f611ef3565b60208101515160019052610431611ec1565b61043b8282610bab565b6020015192915050565b61044d611ec1565b6102d661045f36849003840184612402565b82611475565b60006060600054600280805461047a90612553565b80601f01602080910402602001604051908101604052809291908181526020018280546104a690612553565b80156104f35780601f106104c8576101008083540402835291602001916104f3565b820191906000526020600020905b8154815290600101906020018083116104d657829003601f168201915b50505050509050915091509091565b600061050c611ef3565b6020810151516003905261051e611ec1565b6105288282610bab565b6060015192915050565b6000806102e68161163f565b6000806102e6816117bf565b6000806102e68161193e565b6105666001600054146011611ab9565b815161058190158061057a57508251600154145b6012611ab9565b60008080556002805461059390612553565b80601f01602080910402602001604051908101604052809291908181526020018280546105bf90612553565b801561060c5780601f106105e15761010080835404028352916020019161060c565b820191906000526020600020905b8154815290600101906020018083116105ef57829003601f168201915b5050505050806020019051810190610624919061265f565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161067b3415600e611ab9565b61069561068e3383604001516001611adf565b600f611ab9565b80516106ad906001600160a01b031633146010611ab9565b6106b5611f12565b815181516001600160a01b03918216905260208084018051845190841690830152604080860151855190851690820152905182850180519190941690528251600192018290529151439083015260608085018051845192830190945251515161077c93926000929182916107299190611af5565b81526020018660600151600060018110610745576107456126c5565b6020020151602001518152602001866060015160006001811061076a5761076a6126c5565b60200201516040015115159052611b42565b6020820180516060019190915251600060809091015261079b81611bb6565b50505050565b60006001600054141561085e576000600280546107bd90612553565b80601f01602080910402602001604051908101604052809291908181526020018280546107e990612553565b80156108365780601f1061080b57610100808354040283529160200191610836565b820191906000526020600020905b81548152906001019060200180831161081957829003601f168201915b505050505080602001905181019061084e919061265f565b905061085c60006008611ab9565b505b600460005414156109115760006002805461087890612553565b80601f01602080910402602001604051908101604052809291908181526020018280546108a490612553565b80156108f15780601f106108c6576101008083540402835291602001916108f1565b820191906000526020600020905b8154815290600101906020018083116108d457829003601f168201915b505050505080602001905181019061090991906126db565b519392505050565b61091d60006008611ab9565b919050565b6000600160005414156109df5760006002805461093e90612553565b80601f016020809104026020016040519081016040528092919081815260200182805461096a90612553565b80156109b75780601f1061098c576101008083540402835291602001916109b7565b820191906000526020600020905b81548152906001019060200180831161099a57829003601f168201915b50505050508060200190518101906109cf919061265f565b90506109dd6000600c611ab9565b505b60046000541415610acd576000600280546109f990612553565b80601f0160208091040260200160405190810160405280929190818152602001828054610a2590612553565b8015610a725780601f10610a4757610100808354040283529160200191610a72565b820191906000526020600020905b815481529060010190602001808311610a5557829003601f168201915b5050505050806020019051810190610a8a91906126db565b905060018351610a9990610ad9565b516001811115610aab57610aab6121aa565b14610ab757600061030f565b8251610ac290610ad9565b604001519392505050565b61091d6000600c611ab9565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610b2557610b256121aa565b1415610b9c576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b6657610b666121aa565b6001811115610b7757610b776121aa565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610bbb6004600054146022611ab9565b8151610bd6901580610bcf57508251600154145b6023611ab9565b600080805560028054610be890612553565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1490612553565b8015610c615780601f10610c3657610100808354040283529160200191610c61565b820191906000526020600020905b815481529060010190602001808311610c4457829003601f168201915b5050505050806020019051810190610c7991906126db565b9050610c83611f42565b610c9260001943106024611ab9565b7f609ab9b7bf2f477776b524871c686a3b0fb6d65c5630321136fc4f3e833761463385604051610cc392919061278b565b60405180910390a16000602085015151516003811115610ce557610ce56121aa565b1415610e2057610cf734156013611ab9565b610d11610d0a3384604001516000611adf565b6014611ab9565b8051637472756560e01b9052805160405190516001600160e01b03191681527fada1b3f7a6b3f51abfeebaf1b2fab8fbe6baf7d7f4bcacfdde7a6bea148f8acd9060200160405180910390a180518352610d69611f12565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905260808701518451901515908401529251439082015260a086015181519384018252610100870151845260e087018051840151938501939093529151810151151590830152610df991600090611b42565b6020820180516060019190915260c0840151905160800152610e1a81611bb6565b5061079b565b6001602085015151516003811115610e3a57610e3a6121aa565b1415610fb257610e4c34156015611ab9565b610e66610e5f3384604001516001611adf565b6016611ab9565b8151610e7e906001600160a01b031633146017611ab9565b610eca60006001610e928560600151610ad9565b516001811115610ea457610ea46121aa565b14610eb0576000610ec2565b610ebd8460600151610ad9565b604001515b146018611ab9565b604051600181527f30f8053e42d85a274fb854f4094fd926e56b1d6bd37963d2132f519c02cd4fba9060200160405180910390a160016020840152610f0d611f12565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052608087015184519015159301929092529151439083015260a08501518251918201909252610100850151610df992916000918190610f8c906001611af5565b81526020018760e001516020015181526020018760e00151604001511515815250611b42565b6002602085015151516003811115610fcc57610fcc6121aa565b141561119257610fde34156019611ab9565b61101f8260a001516000604051806060016040528086610100015181526020018660e001516020015181526020018660e00151604001511515815250611b42565b816020018190525061104161103a3384604001516000611adf565b601a611ab9565b61106482602001516001600160a01b0316336001600160a01b031614601b611ab9565b6110738260800151601c611ab9565b60208101515151611087901515601d611ab9565b6110978260400151336001611c78565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527fda3c880b597adf1cade6e8d926ad27d4c6cee8ef43dcf17242cf1e5c0c8f044a910160405180910390a1600160408401526110fb611f12565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052835160009084018190529351439083015291850180518251938401909252515151610df9939192908190611170906001611c8c565b815260208781018051518201519183019190915251604090910190600061076a565b60036020850151515160038111156111ac576111ac6121aa565b141561079b576111be3415601e611ab9565b6111d86111d13384604001516001611adf565b601f611ab9565b6111fb82602001516001600160a01b0316336001600160a01b0316146020611ab9565b611218826080015161120e576001611211565b60005b6021611ab9565b33600090815260046020908152604091829020805460ff19166001908117825590810181905591519182527f928b5faf4a46c29167d601fad6576d6254a1712bce1b579324042e50d0d5b137910160405180910390a16001606084015261127d611f12565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690528351600193018390529251439082015260a08601518151938401909152610100860151610df9939192600092918291610f8c9190611af5565b6000600160005414156113b35760006002805461131290612553565b80601f016020809104026020016040519081016040528092919081815260200182805461133e90612553565b801561138b5780601f106113605761010080835404028352916020019161138b565b820191906000526020600020905b81548152906001019060200180831161136e57829003601f168201915b50505050508060200190518101906113a3919061265f565b90506113b160006007611ab9565b505b60046000541415611469576000600280546113cd90612553565b80601f01602080910402602001604051908101604052809291908181526020018280546113f990612553565b80156114465780601f1061141b57610100808354040283529160200191611446565b820191906000526020600020905b81548152906001019060200180831161142957829003601f168201915b505050505080602001905181019061145e91906126db565b606001519392505050565b61091d60006007611ab9565b6114856004600054146027611ab9565b81516114a090158061149957508251600154145b6028611ab9565b6000808055600280546114b290612553565b80601f01602080910402602001604051908101604052809291908181526020018280546114de90612553565b801561152b5780601f106115005761010080835404028352916020019161152b565b820191906000526020600020905b81548152906001019060200180831161150e57829003601f168201915b505050505080602001905181019061154391906126db565b90506115556000194310156029611ab9565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a16115a834156025611ab9565b80516115c0906001600160a01b031633146026611ab9565b6115c8611f12565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518386018051919095169052608080870151855190151594019390935283514392019190915260a085015183519091015260c08401519151015261079b81611bb6565b6000600160005414156116fc5760006002805461165b90612553565b80601f016020809104026020016040519081016040528092919081815260200182805461168790612553565b80156116d45780601f106116a9576101008083540402835291602001916116d4565b820191906000526020600020905b8154815290600101906020018083116116b757829003601f168201915b50505050508060200190518101906116ec919061265f565b90506116fa60006009611ab9565b505b600460005414156117b35760006002805461171690612553565b80601f016020809104026020016040519081016040528092919081815260200182805461174290612553565b801561178f5780601f106117645761010080835404028352916020019161178f565b820191906000526020600020905b81548152906001019060200180831161177257829003601f168201915b50505050508060200190518101906117a791906126db565b61010001519392505050565b61091d60006009611ab9565b60006001600054141561187c576000600280546117db90612553565b80601f016020809104026020016040519081016040528092919081815260200182805461180790612553565b80156118545780601f1061182957610100808354040283529160200191611854565b820191906000526020600020905b81548152906001019060200180831161183757829003601f168201915b505050505080602001905181019061186c919061265f565b905061187a6000600b611ab9565b505b600460005414156119325760006002805461189690612553565b80601f01602080910402602001604051908101604052809291908181526020018280546118c290612553565b801561190f5780601f106118e45761010080835404028352916020019161190f565b820191906000526020600020905b8154815290600101906020018083116118f257829003601f168201915b505050505080602001905181019061192791906126db565b608001519392505050565b61091d6000600b611ab9565b6000600160005414156119fb5760006002805461195a90612553565b80601f016020809104026020016040519081016040528092919081815260200182805461198690612553565b80156119d35780601f106119a8576101008083540402835291602001916119d3565b820191906000526020600020905b8154815290600101906020018083116119b657829003601f168201915b50505050508060200190518101906119eb919061265f565b90506119f96000600a611ab9565b505b60046000541415611ab157600060028054611a1590612553565b80601f0160208091040260200160405190810160405280929190818152602001828054611a4190612553565b8015611a8e5780601f10611a6357610100808354040283529160200191611a8e565b820191906000526020600020905b815481529060010190602001808311611a7157829003601f168201915b5050505050806020019051810190611aa691906126db565b60c001519392505050565b61091d6000600a5b816102d65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000611aed83853085611cdb565b949350505050565b600082611b028382612850565b915081101561033c5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611ad6565b611b4a611f5f565b60005b6001811015611b9657848160018110611b6857611b686126c5565b6020020151828260018110611b7f57611b7f6126c5565b602002015280611b8e81612868565b915050611b4d565b5081818460018110611baa57611baa6126c5565b60200201529392505050565b611bbe611faa565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301511515608080870191909152845182015160a08701528451015160c086015283518101515160e086015292519092015151516101008401526004600055436001559051611c4f918391016128c7565b60405160208183030381529060405260029080519060200190611c73929190612021565b505050565b611c83838383611db5565b611c7357600080fd5b600082611c998382612993565b915081111561033c5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401611ad6565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611d42916129aa565b60006040518083038185875af1925050503d8060008114611d7f576040519150601f19603f3d011682016040523d82523d6000602084013e611d84565b606091505b5091509150611d9582826001611e86565b5080806020019051810190611daa91906129c6565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611e14916129aa565b60006040518083038185875af1925050503d8060008114611e51576040519150601f19603f3d011682016040523d82523d6000602084013e611e56565b606091505b5091509150611e6782826002611e86565b5080806020019051810190611e7c91906129c6565b9695505050505050565b60608315611e9557508161030f565b825115611ea55782518084602001fd5b60405163100960cb60e01b815260048101839052602401611ad6565b6040805160a0810190915260006080820190815281905b81526000602082018190526040820181905260609091015290565b604051806040016040528060008152602001611f0d6120a5565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611f0d6120b8565b60408051606081018252600091810191825290815260208101611f0d5b60405180602001604052806001905b611f94604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611f6e5790505090565b604080516101208101825260008082526020820181905291810182905260608101829052608081019190915260a08101611fe2611f5f565b815260200160008152602001612014604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805461202d90612553565b90600052602060002090601f01602090048101928261204f5760008555612095565b82601f1061206857805160ff1916838001178555612095565b82800160010185558215612095579182015b8281111561209557825182559160200191906001019061207a565b506120a19291506120eb565b5090565b6040518060200160405280611f0d612100565b6040518060a0016040528060006001600160a01b0316815260200160001515815260200160008152602001612014611f5f565b5b808211156120a157600081556001016120ec565b6040805160a081019091528060008152602001611ed8604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001611f0d60408051602081019091526000815290565b60006040828403121561216f57600080fd5b50919050565b6001600160a01b038116811461218a57600080fd5b50565b60006020828403121561219f57600080fd5b813561030f81612175565b634e487b7160e01b600052602160045260246000fd5b81516060820190600281106121d7576121d76121aa565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715612230576122306121f7565b60405290565b6040516020810167ffffffffffffffff81118282101715612230576122306121f7565b60405160a0810167ffffffffffffffff81118282101715612230576122306121f7565b6040516080810167ffffffffffffffff81118282101715612230576122306121f7565b604051610120810167ffffffffffffffff81118282101715612230576122306121f7565b6000602082840312156122d557600080fd5b6040516020810181811067ffffffffffffffff821117156122f8576122f86121f7565b60405290508082356001600160e01b03198116811461231657600080fd5b905292915050565b6000806000806080858703121561233457600080fd5b843561233f81612175565b9350602085013561234f81612175565b92506040850135915061236586606087016122c3565b905092959194509250565b6000610120828403121561216f57600080fd5b60005b8381101561239e578181015183820152602001612386565b8381111561079b5750506000910152565b82815260406020820152600082518060408401526123d4816060850160208701612383565b601f01601f1916919091016060019392505050565b801515811461218a57600080fd5b803561091d816123e9565b60006040828403121561241457600080fd5b6040516040810181811067ffffffffffffffff82111715612437576124376121f7565b60405282358152602083013561244c816123e9565b60208201529392505050565b600081830361012081121561246c57600080fd5b61247461220d565b8335815261010080601f198401121561248c57600080fd5b612494612236565b61249c612259565b6020870135600481106124ae57600080fd5b81526080603f19860112156124c257600080fd5b6124ca61227c565b945060408701356124da81612175565b855260608701356124ea81612175565b6020860152608087013560408601526125068860a089016122c3565b606086015284602082015261251d60c088016123f7565b604082015261252e60e088016123f7565b606082015261253e8388016123f7565b60808201528152602083015250949350505050565b600181811c9082168061256757607f821691505b6020821081141561216f57634e487b7160e01b600052602260045260246000fd5b805161091d81612175565b805161091d816123e9565b6000606082840312156125b057600080fd5b6040516060810181811067ffffffffffffffff821117156125d3576125d36121f7565b8060405250809150825181526020830151602082015260408301516125f7816123e9565b6040919091015292915050565b600082601f83011261261557600080fd5b61261d612236565b8060608085018681111561263057600080fd5b855b8181101561265357612644888261259e565b85526020909401938201612632565b50919695505050505050565b600060c0828403121561267157600080fd5b61267961227c565b825161268481612175565b8152602083015161269481612175565b602082015260408301516126a781612175565b60408201526126b98460608501612604565b60608201529392505050565b634e487b7160e01b600052603260045260246000fd5b60006101a082840312156126ee57600080fd5b6126f661229f565b6126ff83612588565b815261270d60208401612588565b602082015261271e60408401612588565b604082015261272f60608401612588565b606082015261274060808401612593565b60808201526127528460a08501612604565b60a08201526101008084015160c083015261277185610120860161259e565b60e083015261018084015181830152508091505092915050565b6001600160a01b03838116825282516020808401919091528301515180516101408401929190600481106127c1576127c16121aa565b806040860152506020810151828151166060860152826020820151166080860152604081015160a086015263ffffffff60e01b6060820151511660c0860152506040810151915061281660e085018315159052565b60608101511515610100850152608001511515610120909301929092529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156128635761286361283a565b500190565b600060001982141561287c5761287c61283a565b5060010190565b8060005b600181101561079b576128b184835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101612887565b81516001600160a01b031681526020808301516101a08301916128f4908401826001600160a01b03169052565b50604083015161290f60408401826001600160a01b03169052565b50606083015161292a60608401826001600160a01b03169052565b50608083015161293e608084018215159052565b5060a083015161295160a0840182612883565b5060c08301516101008381019190915260e084015180516101208501526020810151610140850152604001511515610160840152909201516101809091015290565b6000828210156129a5576129a561283a565b500390565b600082516129bc818460208701612383565b9190910192915050565b6000602082840312156129d857600080fd5b815161030f816123e956fea264697066735822122016a05431c852f9a98b78098964330c06181d0d1d15ba55d9533588014ca302ce64736f6c634300080c0033`,
  BytecodeLen: 12165,
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