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
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Tuple([ctc3, ctc3, ctc2]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc3
    });
  const map0_ctc = ctc7;
  
  
  return {
    infos: {
      Bridger_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v508;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      Creator_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v493;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      balance_NFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v525;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      balance_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v514;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      bridgingComplete_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v509;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      lockedNFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async () => {
              
              
              return v510;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      saved_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = svs;
            return (await ((async (_v526 ) => {
                const v526 = stdlib.protect(ctc0, _v526, null);
              
              const v527 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v526), null);
              const v528 = stdlib.fromSome(v527, stdlib.checkedBigNumberify('./indexBridge2.rsh:55:45:decimal', stdlib.UInt_max, '0'));
              
              return v528;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        }
      },
    views: {
      3: [ctc0, ctc0, ctc1, ctc0, ctc2, ctc2, ctc5, ctc3, ctc4, ctc3]
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
    IERC721Receiver0_73: ctc7,
    claimNFT0_73: ctc8,
    completeBridge0_73: ctc8,
    lockNFT0_73: ctc8
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
  
  
  const v480 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v481 = [v480];
  const v487 = 'I have deployed';
  const v488 = stdlib.protect(ctc5, await interact.getParams(v487), {
    at: './indexBridge2.rsh:40:66:application',
    fs: ['at ./indexBridge2.rsh:39:21:application call to [unknown function] (defined at: ./indexBridge2.rsh:39:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v489 = v488.Bridger;
  const v490 = v488.NFT;
  
  const txn1 = await (ctc.sendrecv({
    args: [v489, v490],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v494, v495], secs: v497, time: v496, didSend: v33, from: v493 } = txn1;
      
      const v498 = v481[stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '0')];
      const v500 = v498[stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '1')];
      const v501 = v498[stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '2')];
      const v502 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v500, v501];
      const v503 = stdlib.Array_set(v481, stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '0'), v502);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v495
        });
      ;
      
      const v508 = v494;
      const v509 = false;
      const v510 = false;
      const v511 = v496;
      const v513 = v503;
      const v514 = stdlib.checkedBigNumberify('./indexBridge2.rsh:37:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v524 = v513[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
        const v525 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v495
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
    tys: [ctc3, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v494, v495], secs: v497, time: v496, didSend: v33, from: v493 } = txn1;
  const v498 = v481[stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '0')];
  const v500 = v498[stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '1')];
  const v501 = v498[stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '2')];
  const v502 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v500, v501];
  const v503 = stdlib.Array_set(v481, stdlib.checkedBigNumberify('./indexBridge2.rsh:44:17:dot', stdlib.UInt_max, '0'), v502);
  ;
  ;
  const v506 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v506), {
    at: './indexBridge2.rsh:46:35:application',
    fs: ['at ./indexBridge2.rsh:46:35:application call to [unknown function] (defined at: ./indexBridge2.rsh:46:35:function exp)', 'at ./indexBridge2.rsh:46:35:application call to "liftedInteract" (defined at: ./indexBridge2.rsh:46:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  let v508 = v494;
  let v509 = false;
  let v510 = false;
  let v511 = v496;
  let v513 = v503;
  let v514 = stdlib.checkedBigNumberify('./indexBridge2.rsh:37:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v524 = v513[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
    const v525 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc9],
      timeoutAt: ['time', stdlib.UInt_max],
      waitIfNotPresent: false
      }));
    if (txn2.didTimeout) {
      const txn3 = await (ctc.sendrecv({
        args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525],
        evt_cnt: 0,
        funcNum: 3,
        lct: v511,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:161:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1096, time: v1095, didSend: v382, from: v1094 } = txn3;
          
          ;
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = v510;
          const cv511 = v1095;
          const cv513 = v513;
          const cv514 = v514;
          
          await (async () => {
            const v508 = cv508;
            const v509 = cv509;
            const v510 = cv510;
            const v511 = cv511;
            const v513 = cv513;
            const v514 = cv514;
            
            if (await (async () => {
              
              return true;})()) {
              const v524 = v513[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
              const v525 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v495
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
        tys: [ctc3, ctc3, ctc4, ctc3, ctc10, ctc10, ctc12, ctc1, ctc11, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1096, time: v1095, didSend: v382, from: v1094 } = txn3;
      ;
      const v1097 = stdlib.addressEq(v493, v1094);
      stdlib.assert(v1097, {
        at: './indexBridge2.rsh:161:21:dot',
        fs: ['at ./indexBridge2.rsh:160:40:application call to [unknown function] (defined at: ./indexBridge2.rsh:160:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv508 = v508;
      const cv509 = v509;
      const cv510 = v510;
      const cv511 = v1095;
      const cv513 = v513;
      const cv514 = v514;
      
      v508 = cv508;
      v509 = cv509;
      v510 = cv510;
      v511 = cv511;
      v513 = cv513;
      v514 = cv514;
      
      continue;
      }
    else {
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn2;
      switch (v631[0]) {
        case 'IERC721Receiver0_73': {
          const v634 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v684 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
          const v685 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
          const v686 = [v525, v684, v685];
          const v687 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v686);
          ;
          const v693 = 'true';
          await txn2.getOutput('IERC721Receiver', 'v693', ctc6, v693);
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = v510;
          const cv511 = v632;
          const cv513 = v687;
          const cv514 = v514;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v511 = cv511;
          v513 = cv513;
          v514 = cv514;
          
          continue;
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v799 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
          const v800 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
          const v801 = [v525, v799, v800];
          const v802 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v801);
          ;
          const v820 = stdlib.addressEq(v630, v494);
          stdlib.assert(v820, {
            at: './indexBridge2.rsh:135:24:application',
            fs: ['at ./indexBridge2.rsh:134:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:134:13:function exp)'],
            msg: 'Only Bridger can claim NFT when bridging',
            who: 'Creator'
            });
          stdlib.assert(v510, {
            at: './indexBridge2.rsh:136:24:application',
            fs: ['at ./indexBridge2.rsh:134:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:134:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v822 = v802[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:32:application', stdlib.UInt_max, '0')];
          const v823 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:32:application', stdlib.UInt_max, '0')];
          const v824 = stdlib.gt(v823, stdlib.checkedBigNumberify('./indexBridge2.rsh:137:40:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v824, {
            at: './indexBridge2.rsh:137:24:application',
            fs: ['at ./indexBridge2.rsh:134:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:134:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v830 = stdlib.sub(v823, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:26:decimal', stdlib.UInt_max, '1'));
          const v833 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '1')];
          const v834 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '2')];
          const v835 = [v830, v833, v834];
          const v836 = stdlib.Array_set(v802, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '0'), v835);
          ;
          await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./indexBridge2.rsh:141:31:decimal', stdlib.UInt_max, '0'));
          const v837 = true;
          await txn2.getOutput('claimNFT', 'v837', ctc10, v837);
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = false;
          const cv511 = v632;
          const cv513 = v836;
          const cv514 = v514;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v511 = cv511;
          v513 = cv513;
          v514 = cv514;
          
          continue;
          break;
          }
        case 'completeBridge0_73': {
          const v864 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v914 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
          const v915 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
          const v916 = [v525, v914, v915];
          const v917 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v916);
          ;
          const v960 = stdlib.addressEq(v630, v493);
          stdlib.assert(v960, {
            at: './indexBridge2.rsh:93:24:application',
            fs: ['at ./indexBridge2.rsh:92:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:92:13:function exp)'],
            msg: 'Only Backend can complete bridging',
            who: 'Creator'
            });
          stdlib.assert(v510, {
            at: './indexBridge2.rsh:94:24:application',
            fs: ['at ./indexBridge2.rsh:92:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:92:13:function exp)'],
            msg: 'no NFT has been locked yet, so cannot complete bridging',
            who: 'Creator'
            });
          const v962 = true;
          await txn2.getOutput('completeBridge', 'v962', ctc10, v962);
          const cv508 = v508;
          const cv509 = true;
          const cv510 = true;
          const cv511 = v632;
          const cv513 = v917;
          const cv514 = v514;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v511 = cv511;
          v513 = cv513;
          v514 = cv514;
          
          continue;
          break;
          }
        case 'lockNFT0_73': {
          const v979 = v631[1];
          undefined /* setApiDetails */;
          ;
          const v1026 = stdlib.add(v525, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1029 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
          const v1030 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
          const v1031 = [v1026, v1029, v1030];
          const v1032 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v1031);
          ;
          const v1085 = stdlib.addressEq(v630, v494);
          stdlib.assert(v1085, {
            at: './indexBridge2.rsh:111:24:application',
            fs: ['at ./indexBridge2.rsh:110:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:110:13:function exp)'],
            msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
            who: 'Creator'
            });
          const v1086 = v510 ? false : true;
          stdlib.assert(v1086, {
            at: './indexBridge2.rsh:112:32:application',
            fs: ['at ./indexBridge2.rsh:110:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:110:13:function exp)'],
            msg: 'NFT is already locked. You can only bridge one NFT at a time',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./indexBridge2.rsh:114:39:decimal', stdlib.UInt_max, '1'));
          const v1087 = true;
          await txn2.getOutput('lockNFT', 'v1087', ctc10, v1087);
          const cv508 = v508;
          const cv509 = v509;
          const cv510 = true;
          const cv511 = v632;
          const cv513 = v1032;
          const cv514 = v514;
          
          v508 = cv508;
          v509 = cv509;
          v510 = cv510;
          v511 = cv511;
          v513 = cv513;
          v514 = cv514;
          
          continue;
          break;
          }
        }}
    
    }
  return;
  
  
  };
export async function _IERC721Receiver3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _IERC721Receiver3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _IERC721Receiver3 expects to receive an interact object as its second argument.`));}
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
    IERC721Receiver0_73: ctc9,
    claimNFT0_73: ctc10,
    completeBridge0_73: ctc10,
    lockNFT0_73: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v568 = stdlib.protect(ctc9, await interact.in(), {
    at: './indexBridge2.rsh:1:23:application',
    fs: ['at ./indexBridge2.rsh:151:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:151:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runIERC721Receiver0_73" (defined at: ./indexBridge2.rsh:148:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'in',
    who: 'IERC721Receiver'
    });
  const v584 = ['IERC721Receiver0_73', v568];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525, v584],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:153:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge2.rsh:153:33:decimal', stdlib.UInt_max, '0'), v495]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'IERC721Receiver0_73': {
          const v634 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "IERC721Receiver"
            });
          ;
          const v684 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
          const v685 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
          const v686 = [v525, v684, v685];
          const v687 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v686);
          ;
          const v693 = 'true';
          const v694 = await txn1.getOutput('IERC721Receiver', 'v693', ctc8, v693);
          
          const v1654 = v508;
          const v1655 = v509;
          const v1656 = v510;
          const v1658 = v687;
          const v1659 = v514;
          const v1660 = v687[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1661 = v1660[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          
          break;
          }
        case 'completeBridge0_73': {
          const v864 = v631[1];
          
          break;
          }
        case 'lockNFT0_73': {
          const v979 = v631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
  switch (v631[0]) {
    case 'IERC721Receiver0_73': {
      const v634 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v684 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
      const v685 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
      const v686 = [v525, v684, v685];
      const v687 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v686);
      ;
      const v693 = 'true';
      const v694 = await txn1.getOutput('IERC721Receiver', 'v693', ctc8, v693);
      if (v306) {
        stdlib.protect(ctc0, await interact.out(v634, v694), {
          at: './indexBridge2.rsh:149:13:application',
          fs: ['at ./indexBridge2.rsh:149:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:149:13:function exp)', 'at ./indexBridge2.rsh:156:20:application call to "res" (defined at: ./indexBridge2.rsh:155:13:function exp)', 'at ./indexBridge2.rsh:155:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:155:13:function exp)'],
          msg: 'out',
          who: 'IERC721Receiver'
          });
        }
      else {
        }
      
      const v1654 = v508;
      const v1655 = v509;
      const v1656 = v510;
      const v1658 = v687;
      const v1659 = v514;
      const v1660 = v687[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1661 = v1660[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'claimNFT0_73': {
      const v749 = v631[1];
      return;
      break;
      }
    case 'completeBridge0_73': {
      const v864 = v631[1];
      return;
      break;
      }
    case 'lockNFT0_73': {
      const v979 = v631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimNFT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimNFT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimNFT3 expects to receive an interact object as its second argument.`));}
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
    IERC721Receiver0_73: ctc10,
    claimNFT0_73: ctc8,
    completeBridge0_73: ctc8,
    lockNFT0_73: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v553 = ctc.selfAddress();
  const v555 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge2.rsh:1:23:application',
    fs: ['at ./indexBridge2.rsh:126:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:126:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runclaimNFT0_73" (defined at: ./indexBridge2.rsh:123:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'in',
    who: 'claimNFT'
    });
  const v557 = stdlib.addressEq(v553, v494);
  stdlib.assert(v557, {
    at: './indexBridge2.rsh:127:23:application',
    fs: ['at ./indexBridge2.rsh:126:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:126:17:function exp)', 'at ./indexBridge2.rsh:126:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:126:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runclaimNFT0_73" (defined at: ./indexBridge2.rsh:123:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'Only Bridger can claim NFT when bridging',
    who: 'claimNFT'
    });
  stdlib.assert(v510, {
    at: './indexBridge2.rsh:128:23:application',
    fs: ['at ./indexBridge2.rsh:126:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:126:17:function exp)', 'at ./indexBridge2.rsh:126:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:126:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runclaimNFT0_73" (defined at: ./indexBridge2.rsh:123:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v561 = stdlib.gt(v525, stdlib.checkedBigNumberify('./indexBridge2.rsh:129:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v561, {
    at: './indexBridge2.rsh:129:23:application',
    fs: ['at ./indexBridge2.rsh:126:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:126:17:function exp)', 'at ./indexBridge2.rsh:126:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:126:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runclaimNFT0_73" (defined at: ./indexBridge2.rsh:123:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v564 = ['claimNFT0_73', v555];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525, v564],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:132:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge2.rsh:132:25:decimal', stdlib.UInt_max, '0'), v495]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'IERC721Receiver0_73': {
          const v634 = v631[1];
          
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimNFT"
            });
          ;
          const v799 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
          const v800 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
          const v801 = [v525, v799, v800];
          const v802 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v801);
          ;
          const v822 = v802[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:32:application', stdlib.UInt_max, '0')];
          const v823 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:32:application', stdlib.UInt_max, '0')];
          const v830 = stdlib.sub(v823, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:26:decimal', stdlib.UInt_max, '1'));
          const v833 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '1')];
          const v834 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '2')];
          const v835 = [v830, v833, v834];
          const v836 = stdlib.Array_set(v802, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '0'), v835);
          sim_r.txns.push({
            kind: 'from',
            to: v630,
            tok: v495
            });
          await stdlib.simMapSet(sim_r, 0, v630, stdlib.checkedBigNumberify('./indexBridge2.rsh:141:31:decimal', stdlib.UInt_max, '0'));
          const v837 = true;
          const v838 = await txn1.getOutput('claimNFT', 'v837', ctc5, v837);
          
          const v1704 = v508;
          const v1705 = v509;
          const v1706 = false;
          const v1708 = v836;
          const v1709 = v514;
          const v1710 = v836[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1711 = v1710[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'completeBridge0_73': {
          const v864 = v631[1];
          
          break;
          }
        case 'lockNFT0_73': {
          const v979 = v631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
  switch (v631[0]) {
    case 'IERC721Receiver0_73': {
      const v634 = v631[1];
      return;
      break;
      }
    case 'claimNFT0_73': {
      const v749 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v799 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
      const v800 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
      const v801 = [v525, v799, v800];
      const v802 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v801);
      ;
      const v820 = stdlib.addressEq(v630, v494);
      stdlib.assert(v820, {
        at: './indexBridge2.rsh:135:24:application',
        fs: ['at ./indexBridge2.rsh:134:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:134:13:function exp)'],
        msg: 'Only Bridger can claim NFT when bridging',
        who: 'claimNFT'
        });
      stdlib.assert(v510, {
        at: './indexBridge2.rsh:136:24:application',
        fs: ['at ./indexBridge2.rsh:134:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:134:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v822 = v802[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:32:application', stdlib.UInt_max, '0')];
      const v823 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:32:application', stdlib.UInt_max, '0')];
      const v824 = stdlib.gt(v823, stdlib.checkedBigNumberify('./indexBridge2.rsh:137:40:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v824, {
        at: './indexBridge2.rsh:137:24:application',
        fs: ['at ./indexBridge2.rsh:134:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:134:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v830 = stdlib.sub(v823, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:26:decimal', stdlib.UInt_max, '1'));
      const v833 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '1')];
      const v834 = v822[stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '2')];
      const v835 = [v830, v833, v834];
      const v836 = stdlib.Array_set(v802, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:36:application', stdlib.UInt_max, '0'), v835);
      ;
      await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./indexBridge2.rsh:141:31:decimal', stdlib.UInt_max, '0'));
      const v837 = true;
      const v838 = await txn1.getOutput('claimNFT', 'v837', ctc5, v837);
      if (v306) {
        stdlib.protect(ctc0, await interact.out(v749, v838), {
          at: './indexBridge2.rsh:124:13:application',
          fs: ['at ./indexBridge2.rsh:124:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:124:13:function exp)', 'at ./indexBridge2.rsh:144:20:application call to "res" (defined at: ./indexBridge2.rsh:134:13:function exp)', 'at ./indexBridge2.rsh:134:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:134:13:function exp)'],
          msg: 'out',
          who: 'claimNFT'
          });
        }
      else {
        }
      
      const v1704 = v508;
      const v1705 = v509;
      const v1706 = false;
      const v1708 = v836;
      const v1709 = v514;
      const v1710 = v836[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1711 = v1710[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'completeBridge0_73': {
      const v864 = v631[1];
      return;
      break;
      }
    case 'lockNFT0_73': {
      const v979 = v631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _completeBridge3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _completeBridge3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _completeBridge3 expects to receive an interact object as its second argument.`));}
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
    IERC721Receiver0_73: ctc10,
    claimNFT0_73: ctc8,
    completeBridge0_73: ctc8,
    lockNFT0_73: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v533 = ctc.selfAddress();
  const v535 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge2.rsh:1:23:application',
    fs: ['at ./indexBridge2.rsh:85:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:85:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runcompleteBridge0_73" (defined at: ./indexBridge2.rsh:82:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'in',
    who: 'completeBridge'
    });
  const v537 = stdlib.addressEq(v533, v493);
  stdlib.assert(v537, {
    at: './indexBridge2.rsh:86:23:application',
    fs: ['at ./indexBridge2.rsh:85:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:85:17:function exp)', 'at ./indexBridge2.rsh:85:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:85:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runcompleteBridge0_73" (defined at: ./indexBridge2.rsh:82:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'Only Backend can complete bridging',
    who: 'completeBridge'
    });
  stdlib.assert(v510, {
    at: './indexBridge2.rsh:87:23:application',
    fs: ['at ./indexBridge2.rsh:85:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:85:17:function exp)', 'at ./indexBridge2.rsh:85:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:85:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runcompleteBridge0_73" (defined at: ./indexBridge2.rsh:82:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'no NFT has been locked yet, so cannot complete bridging',
    who: 'completeBridge'
    });
  const v541 = ['completeBridge0_73', v535];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525, v541],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:90:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge2.rsh:90:25:decimal', stdlib.UInt_max, '0'), v495]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'IERC721Receiver0_73': {
          const v634 = v631[1];
          
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          
          break;
          }
        case 'completeBridge0_73': {
          const v864 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "completeBridge"
            });
          ;
          const v914 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
          const v915 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
          const v916 = [v525, v914, v915];
          const v917 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v916);
          ;
          const v962 = true;
          const v963 = await txn1.getOutput('completeBridge', 'v962', ctc5, v962);
          
          const v1754 = v508;
          const v1755 = true;
          const v1756 = true;
          const v1758 = v917;
          const v1759 = v514;
          const v1760 = v917[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1761 = v1760[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'lockNFT0_73': {
          const v979 = v631[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
  switch (v631[0]) {
    case 'IERC721Receiver0_73': {
      const v634 = v631[1];
      return;
      break;
      }
    case 'claimNFT0_73': {
      const v749 = v631[1];
      return;
      break;
      }
    case 'completeBridge0_73': {
      const v864 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v914 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
      const v915 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
      const v916 = [v525, v914, v915];
      const v917 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v916);
      ;
      const v960 = stdlib.addressEq(v630, v493);
      stdlib.assert(v960, {
        at: './indexBridge2.rsh:93:24:application',
        fs: ['at ./indexBridge2.rsh:92:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:92:13:function exp)'],
        msg: 'Only Backend can complete bridging',
        who: 'completeBridge'
        });
      stdlib.assert(v510, {
        at: './indexBridge2.rsh:94:24:application',
        fs: ['at ./indexBridge2.rsh:92:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:92:13:function exp)'],
        msg: 'no NFT has been locked yet, so cannot complete bridging',
        who: 'completeBridge'
        });
      const v962 = true;
      const v963 = await txn1.getOutput('completeBridge', 'v962', ctc5, v962);
      if (v306) {
        stdlib.protect(ctc0, await interact.out(v864, v963), {
          at: './indexBridge2.rsh:83:13:application',
          fs: ['at ./indexBridge2.rsh:83:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:83:13:function exp)', 'at ./indexBridge2.rsh:96:20:application call to "res" (defined at: ./indexBridge2.rsh:92:13:function exp)', 'at ./indexBridge2.rsh:92:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:92:13:function exp)'],
          msg: 'out',
          who: 'completeBridge'
          });
        }
      else {
        }
      
      const v1754 = v508;
      const v1755 = true;
      const v1756 = true;
      const v1758 = v917;
      const v1759 = v514;
      const v1760 = v917[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1761 = v1760[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'lockNFT0_73': {
      const v979 = v631[1];
      return;
      break;
      }
    }
  
  
  };
export async function _lockNFT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _lockNFT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _lockNFT3 expects to receive an interact object as its second argument.`));}
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
    IERC721Receiver0_73: ctc10,
    claimNFT0_73: ctc8,
    completeBridge0_73: ctc8,
    lockNFT0_73: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v543 = ctc.selfAddress();
  const v545 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge2.rsh:1:23:application',
    fs: ['at ./indexBridge2.rsh:103:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:103:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runlockNFT0_73" (defined at: ./indexBridge2.rsh:100:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'in',
    who: 'lockNFT'
    });
  const v547 = stdlib.addressEq(v543, v494);
  stdlib.assert(v547, {
    at: './indexBridge2.rsh:104:23:application',
    fs: ['at ./indexBridge2.rsh:103:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:103:17:function exp)', 'at ./indexBridge2.rsh:103:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:103:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runlockNFT0_73" (defined at: ./indexBridge2.rsh:100:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
    who: 'lockNFT'
    });
  const v548 = v510 ? false : true;
  stdlib.assert(v548, {
    at: './indexBridge2.rsh:105:31:application',
    fs: ['at ./indexBridge2.rsh:103:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:103:17:function exp)', 'at ./indexBridge2.rsh:103:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:103:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to "runlockNFT0_73" (defined at: ./indexBridge2.rsh:100:13:function exp)', 'at ./indexBridge2.rsh:68:75:application call to [unknown function] (defined at: ./indexBridge2.rsh:68:75:function exp)'],
    msg: 'NFT is already locked. You can only bridge one NFT at a time',
    who: 'lockNFT'
    });
  const v551 = ['lockNFT0_73', v545];
  
  const txn1 = await (ctc.sendrecv({
    args: [v493, v494, v495, v508, v509, v510, v513, v514, v524, v525, v551],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:108:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge2.rsh:108:25:decimal', stdlib.UInt_max, '1'), v495]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
      
      switch (v631[0]) {
        case 'IERC721Receiver0_73': {
          const v634 = v631[1];
          
          break;
          }
        case 'claimNFT0_73': {
          const v749 = v631[1];
          
          break;
          }
        case 'completeBridge0_73': {
          const v864 = v631[1];
          
          break;
          }
        case 'lockNFT0_73': {
          const v979 = v631[1];
          sim_r.txns.push({
            kind: 'api',
            who: "lockNFT"
            });
          ;
          const v1026 = stdlib.add(v525, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1029 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
          const v1030 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
          const v1031 = [v1026, v1029, v1030];
          const v1032 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v1031);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v495
            });
          await stdlib.simMapSet(sim_r, 0, v630, stdlib.checkedBigNumberify('./indexBridge2.rsh:114:39:decimal', stdlib.UInt_max, '1'));
          const v1087 = true;
          const v1088 = await txn1.getOutput('lockNFT', 'v1087', ctc5, v1087);
          
          const v1804 = v508;
          const v1805 = v509;
          const v1806 = true;
          const v1808 = v1032;
          const v1809 = v514;
          const v1810 = v1032[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
          const v1811 = v1810[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc3, ctc4, ctc3, ctc5, ctc5, ctc7, ctc1, ctc6, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v631], secs: v633, time: v632, didSend: v306, from: v630 } = txn1;
  switch (v631[0]) {
    case 'IERC721Receiver0_73': {
      const v634 = v631[1];
      return;
      break;
      }
    case 'claimNFT0_73': {
      const v749 = v631[1];
      return;
      break;
      }
    case 'completeBridge0_73': {
      const v864 = v631[1];
      return;
      break;
      }
    case 'lockNFT0_73': {
      const v979 = v631[1];
      undefined /* setApiDetails */;
      ;
      const v1026 = stdlib.add(v525, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1029 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '1')];
      const v1030 = v524[stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '2')];
      const v1031 = [v1026, v1029, v1030];
      const v1032 = stdlib.Array_set(v513, stdlib.checkedBigNumberify('./indexBridge2.rsh:68:75:dot', stdlib.UInt_max, '0'), v1031);
      ;
      const v1085 = stdlib.addressEq(v630, v494);
      stdlib.assert(v1085, {
        at: './indexBridge2.rsh:111:24:application',
        fs: ['at ./indexBridge2.rsh:110:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:110:13:function exp)'],
        msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
        who: 'lockNFT'
        });
      const v1086 = v510 ? false : true;
      stdlib.assert(v1086, {
        at: './indexBridge2.rsh:112:32:application',
        fs: ['at ./indexBridge2.rsh:110:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:110:13:function exp)'],
        msg: 'NFT is already locked. You can only bridge one NFT at a time',
        who: 'lockNFT'
        });
      await stdlib.mapSet(map0, v630, stdlib.checkedBigNumberify('./indexBridge2.rsh:114:39:decimal', stdlib.UInt_max, '1'));
      const v1087 = true;
      const v1088 = await txn1.getOutput('lockNFT', 'v1087', ctc5, v1087);
      if (v306) {
        stdlib.protect(ctc0, await interact.out(v979, v1088), {
          at: './indexBridge2.rsh:101:13:application',
          fs: ['at ./indexBridge2.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:101:13:function exp)', 'at ./indexBridge2.rsh:117:20:application call to "res" (defined at: ./indexBridge2.rsh:110:13:function exp)', 'at ./indexBridge2.rsh:110:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:110:13:function exp)'],
          msg: 'out',
          who: 'lockNFT'
          });
        }
      else {
        }
      
      const v1804 = v508;
      const v1805 = v509;
      const v1806 = true;
      const v1808 = v1032;
      const v1809 = v514;
      const v1810 = v1032[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
      const v1811 = v1810[stdlib.checkedBigNumberify('./indexBridge2.rsh:76:44:application', stdlib.UInt_max, '0')];
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
  if (step == 3) {return _IERC721Receiver3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function claimNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _claimNFT3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function completeBridge(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for completeBridge expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for completeBridge expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _completeBridge3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function lockNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for lockNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for lockNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _lockNFT3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `claimNFT()byte`, `completeBridge()byte`, `lockNFT()byte`],
    pure: [`Bridger_v()address`, `Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `bridgingComplete_v()byte`, `lockedNFT_v()byte`, `saved_v(address)uint64`],
    sigs: [`Bridger_v()address`, `Creator_v()address`, `IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `balance_NFT_v()uint64`, `balance_v()uint64`, `bridgingComplete_v()byte`, `claimNFT()byte`, `completeBridge()byte`, `lockNFT()byte`, `lockedNFT_v()byte`, `saved_v(address)uint64`]
    },
  appApproval: `BiAWAAEDTAQICa349ZUI2dCEowueop60DJLu6+cMsLDzlgru9d6pCpS7oOQDyNbelwa5wM37B6aJr9cCAv///////////wFAe6CNBiYDAQABAQAiNQAxGEEE4ipkSSJbNQEhBVs1AjEZIxJBAAoxACghBq9mQgSuNhoAF0lBAVgiNQQjNQZJIQcMQAC1SSEIDEAAY0khCQxAADxJIQoMQAAcIQoSRDYaATYaAlA2GgNQNhoEUDX/KDT/UEIBlCEJEkQ0ASQSRChkKWRQSTUDVwAgNQdCBF4hCBJENAEkEkQiNhoBiARzSTX/I1s0/yJVTRY1B0IEPkkhCwxAADNJIQwMQAATIQwSRCo1/4ABAzT/UCWvUEIBOiELEkQ0ASQSRChkKWRQSTUDV2gBNQdCBAQhBxJEKjX/KTT/UCWvUEIBEEkhDQxAAFNJIQ4MQAA5SSEPDEAAGSEPEkQ0ASQSRChkKWRQSTUDV0ggNQdCA8UhDhJENAEkEkQoZClkUEk1A1eUCDUHQgOsIQ0SRCo1/4ABAjT/UCWvUEIAtkkhEAxAABkhEBJENAEkEkQoZClkUEk1A1d7CDUHQgN5gf3whT0SRDQBJBJEKGQpZFBJNQNXaQE1B0IDXTYaAhc1BDYaAzYaARdJIREMQAIrSSQMQABfJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKdlxLSwMgYhEg9ENP8xABJENP80A1cgIDQDIRNbNANXSCA0A1doARc0A1dpARcyBjQDV2oRNAMhFFtCAj1IJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpXACA1/1cgIDX+IRNbNf1XSCA1/FdoARc1+1dpARc1+ldqETX5IRRbNfhXgxE194GUAVs19kk1BTX1gARgVjLXNPVQsDIGIRIMRDT1IlVJIREMQACTSSQMQABUJBJEIzT9iAKuMQA0/hJENPoURDEAKIAJAQAAAAAAAAABZoAJAAAAAAAABD8BsCk1BzT/NP40/TT8NPsjMgY09iMIFjT3VwgIUDT3VxABUDT4QgFwSDEANP8SRDT6RIAJAAAAAAAAA8IBsCk1BzT/NP40/TT8IyMyBjT2FjT3VwgIUDT3VxABUDT4QgE3SSMMQACASDT2FjT3VwgIUDT3VxABUDX0MQA0/hJENPpENPRXABFJNfMiW0k18iINRLEisgEjshIhBLIQMQCyFDT9shGzMQAogAkBAAAAAAAAAABmgAkAAAAAAAADRQGwKTUHNP80/jT9NPw0+yIyBjTyIwkWNPNXCAhQNPNXEAFQNPhCALFIgAwAAAAAAAACtXRydWWwgAR0cnVlNQc0/zT+NP00/DT7NPoyBjT2FjT3VwgIUDT3VxABUDT4QgB3IhJEIRWIAUoiNAESRDQESSISTDQCEhFESTUFSVcAIDX/gSBbNf6ABNnpsco0/1A0/hZQsIERr0k1/VcAETX8IRWIAQ6xIrIBIrISIQSyEDIKshQ0/rIRszEANP80/jT/IiIyBiEFrzT8VwgIUDT8VxABUCJCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc0/lcAEUk19iJbNfU09zT4UDT5FlA0+lA0+xZRBwhQNPwWUQcIUDT+UDT/FlA09lA09RZQKEsBVwB/ZylLAVd/HWdIJDUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIzE3EkQiNQEiNQJC/69JMRhhQAAFSCEGr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECEEEkQ4EU8CEkQ4EhJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 9,
  stateKeys: 2,
  stateSize: 156,
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
                "name": "v494",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v495",
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
                "name": "v494",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v495",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
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
                        "internalType": "struct T9",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_IERC721Receiver0_73",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_completeBridge0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_73",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v631",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
        "internalType": "struct T16",
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
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1087",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v693",
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
    "name": "_reach_oe_v837",
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
    "name": "_reach_oe_v962",
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
        "internalType": "struct T9",
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
        "internalType": "struct T9",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
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
                        "internalType": "struct T9",
                        "name": "elem3",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_IERC721Receiver0_73",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_completeBridge0_73",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_73",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v631",
                "type": "tuple"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
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
        "internalType": "struct T16",
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
    "name": "bridgingComplete_v",
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
    "name": "completeBridge",
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
        "name": "v1820",
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
  Bytecode: `0x608060405260405162002bae38038062002bae8339810160408190526200002691620005a2565b6000805543600355620000386200030f565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ef3415600e6200018d565b620000f96200036a565b8051339052602080840180515183516001600160a01b039182169084015281518301518451908216604091820152915151838501805191909216905280516000908401819052815183018190529051436060909101529184015190840151620001639290620001b7565b6020820180516080019190915251600060a09091015262000184816200023a565b505050620007c8565b81620001b35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001c16200039c565b60005b60018110156200021757848160018110620001e357620001e362000617565b6020020151828260018110620001fd57620001fd62000617565b6020020152806200020e816200062d565b915050620001c4565b50818184600181106200022e576200022e62000617565b60200201529392505050565b62000244620003e9565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518316818501528185018051519093166060850152825182015115156080808601919091528351820151151560a080870191909152845182015160c08701528451015160e086015283518101515161010086015292519092015151516101208401526003600055436001559051620002e491839101620006a4565b604051602081830303815290604052600290805190602001906200030a9291906200046a565b505050565b6040805160c081019091526000606082018181526080830182905260a0830191909152815260208101620003426200039c565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810162000365620004f9565b60405180602001604052806001905b620003d2604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003ab5790505090565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c081016200042a6200039c565b8152602001600081526020016200045d604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805462000478906200078b565b90600052602060002090601f0160209004810192826200049c5760008555620004e7565b82601f10620004b757805160ff1916838001178555620004e7565b82800160010185558215620004e7579182015b82811115620004e7578251825591602001919060010190620004ca565b50620004f592915062000537565b5090565b6040518060c0016040528060006001600160a01b03168152602001600015158152602001600015158152602001600081526020016200045d6200039c565b5b80821115620004f5576000815560010162000538565b604080519081016001600160401b03811182821017156200057f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200059d57600080fd5b919050565b60008183036060811215620005b657600080fd5b620005c06200054e565b835181526040601f1983011215620005d757600080fd5b620005e16200054e565b9150620005f16020850162000585565b8252620006016040850162000585565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200065057634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b60018110156200069e576200068784835180518252602080820151908301526040908101511515910152565b60609390930192602091909101906001016200065b565b50505050565b81516001600160a01b031681526101c081016020830151620006d160208401826001600160a01b03169052565b506040830151620006ed60408401826001600160a01b03169052565b5060608301516200070960608401826001600160a01b03169052565b5060808301516200071e608084018215159052565b5060a08301516200073360a084018215159052565b5060c08301516200074860c084018262000657565b5060e08301516101208381019190915261010084015180516101408501526020810151610160850152604001511515610180840152909201516101a09091015290565b600181811c90821680620007a057607f821691505b60208210811415620007c257634e487b7160e01b600052602260045260246000fd5b50919050565b6123d680620007d86000396000f3fe6080604052600436106100f65760003560e01c8063832307571161008f578063ae53e28511610061578063ae53e2851461025e578063bee2660914610271578063d2b339bd14610279578063d76a47691461028e578063e43ffb9f146102a357005b80638323075714610209578063844971b21461021e578063ab53f2c614610233578063ac74d6c11461025657005b8063672756ad116100c8578063672756ad1461019d57806369e13bd7146101b557806373b4522c146101e1578063819938fc146101f457005b80631e93b0f1146100ff5780633894aea5146101235780633a3dbe72146101505780633bc5b7bf1461017057005b366100fd57005b005b34801561010b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561012f57600080fd5b506101386102b8565b6040516001600160a01b03909116815260200161011a565b34801561015c57600080fd5b5061011061016b366004611b72565b61037b565b34801561017c57600080fd5b5061019061018b366004611b72565b610479565b60405161011a9190611ba5565b6101a56104a5565b604051901515815260200161011a565b6101c86101c3366004611d03565b6104d5565b60405190516001600160e01b031916815260200161011a565b6100fd6101ef366004611d55565b61054c565b34801561020057600080fd5b50610138610570565b34801561021557600080fd5b50600154610110565b34801561022a57600080fd5b506101a5610633565b34801561023f57600080fd5b506102486106f6565b60405161011a929190611d99565b6101a5610793565b6100fd61026c366004611dd3565b6107c3565b6101a56107e3565b34801561028557600080fd5b50610110610809565b34801561029a57600080fd5b506101a56108cd565b3480156102af57600080fd5b50610110610990565b60006003600054141561036c576000600280546102d490611de6565b80601f016020809104026020016040519081016040528092919081815260200182805461030090611de6565b801561034d5780601f106103225761010080835404028352916020019161034d565b820191906000526020600020905b81548152906001019060200180831161033057829003601f168201915b50505050508060200190518101906103659190611f00565b5192915050565b61037860006008610a4f565b90565b6000600360005414156104685760006002805461039790611de6565b80601f01602080910402602001604051908101604052809291908181526020018280546103c390611de6565b80156104105780601f106103e557610100808354040283529160200191610410565b820191906000526020600020905b8154815290600101906020018083116103f357829003601f168201915b50505050508060200190518101906104289190611f00565b9050600161043584610a75565b51600181111561044757610447611b8f565b14610453576000610461565b61045c83610a75565b604001515b9392505050565b6104746000600d610a4f565b919050565b604080516060810182526000808252602082018190529181019190915261049f82610a75565b92915050565b60006104af611803565b602081015151600190526104c1611822565b6104cb8282610b47565b6020015192915050565b6040805160208101909152600081526104ec611803565b6020818101805151600090528051518201516001600160a01b038981169091528151518301519088169083015280515182015160400186905251510151606001839052610537611822565b6105418282610b47565b519695505050505050565b610554611822565b61056c61056636849003840184611fcd565b826112d5565b5050565b6000600360005414156106275760006002805461058c90611de6565b80601f01602080910402602001604051908101604052809291908181526020018280546105b890611de6565b80156106055780601f106105da57610100808354040283529160200191610605565b820191906000526020600020905b8154815290600101906020018083116105e857829003601f168201915b505050505080602001905181019061061d9190611f00565b6060015192915050565b61037860006007610a4f565b6000600360005414156106ea5760006002805461064f90611de6565b80601f016020809104026020016040519081016040528092919081815260200182805461067b90611de6565b80156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b50505050508060200190518101906106e09190611f00565b6080015192915050565b6103786000600b610a4f565b60006060600054600280805461070b90611de6565b80601f016020809104026020016040519081016040528092919081815260200182805461073790611de6565b80156107845780601f1061075957610100808354040283529160200191610784565b820191906000526020600020905b81548152906001019060200180831161076757829003601f168201915b50505050509050915091509091565b600061079d611803565b602081015151600290526107af611822565b6107b98282610b47565b6040015192915050565b6107cb611822565b61056c6107dd36849003840184612023565b82610b47565b60006107ed611803565b602081015151600390526107ff611822565b61061d8282610b47565b6000600360005414156108c15760006002805461082590611de6565b80601f016020809104026020016040519081016040528092919081815260200182805461085190611de6565b801561089e5780601f106108735761010080835404028352916020019161089e565b820191906000526020600020905b81548152906001019060200180831161088157829003601f168201915b50505050508060200190518101906108b69190611f00565b610120015192915050565b61037860006009610a4f565b600060036000541415610984576000600280546108e990611de6565b80601f016020809104026020016040519081016040528092919081815260200182805461091590611de6565b80156109625780601f1061093757610100808354040283529160200191610962565b820191906000526020600020905b81548152906001019060200180831161094557829003601f168201915b505050505080602001905181019061097a9190611f00565b60a0015192915050565b6103786000600c610a4f565b600060036000541415610a47576000600280546109ac90611de6565b80601f01602080910402602001604051908101604052809291908181526020018280546109d890611de6565b8015610a255780601f106109fa57610100808354040283529160200191610a25565b820191906000526020600020905b815481529060010190602001808311610a0857829003601f168201915b5050505050806020019051810190610a3d9190611f00565b60e0015192915050565b6103786000600a5b8161056c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610ac157610ac1611b8f565b1415610b38576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610b0257610b02611b8f565b6001811115610b1357610b13611b8f565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610b57600360005414601e610a4f565b8151610b72901580610b6b57508251600154145b601f610a4f565b600080805560028054610b8490611de6565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb090611de6565b8015610bfd5780601f10610bd257610100808354040283529160200191610bfd565b820191906000526020600020905b815481529060010190602001808311610be057829003601f168201915b5050505050806020019051810190610c159190611f00565b9050610c1f611854565b610c2e60001943106020610a4f565b7f10274362ae12430bf790d953f6db461dd3740ec137ea015d7042f3b81bd489ac3385604051610c5f92919061211e565b60405180910390a16000602085015151516003811115610c8157610c81611b8f565b1415610dd557610c933415600f610a4f565b6101208201518151526101008201805160209081015183519091015251604090810151825190151590820152820151610cda90610cd390339060006114b0565b6010610a4f565b60208181018051637472756560e01b90525160405190516001600160e01b03191681527fc7436f221995f34b6ad874d9fa8c6b7f9c1cc1e2246e7943daad3b36d5838191910160405180910390a160208101518352610d3761191c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690526080870151845190151593019290925260a0860151835190151591015290514391015260c08301518251610dae91906000906114c6565b6020820180516080019190915260e0840151905160a00152610dcf8161153a565b506112cf565b6001602085015151516003811115610def57610def611b8f565b1415610fd757610e0134156011610a4f565b61012082015160408083018051929092526101008401805160209081015184519091015251810151825190151591015260c08301519051610e4591906000906114c6565b8160600181905250610e67610e6033846040015160006114b0565b6012610a4f565b610e8a82602001516001600160a01b0316336001600160a01b0316146013610a4f565b610e998260a001516014610a4f565b60608101515151610ead9015156015610a4f565b60608101515151610ec0906001906121f9565b60808201805191909152606082018051516020908101518351909101525151604090810151915191151591810191909152820151610f0090336001611609565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527f1f48b04a8fdd6089e557a5d74e1d8ce0284d1de938b1b20f5c9f4db223b7a610910160405180910390a160016020840152610f6461191c565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608087015183860180519190951690526080808801518551901515940193909352835160009201829052925143908401529184015190840151610dae92906114c6565b6002602085015151516003811115610ff157610ff1611b8f565b141561112d5761100334156016610a4f565b61012082015160a0820180519190915261010083018051602090810151835190910152516040908101519151911515918101919091528201516110549061104d90339060006114b0565b6017610a4f565b815161106c906001600160a01b031633146018610a4f565b61107b8260a001516019610a4f565b604051600181527f70c06e684c9e933f1eee819c8691356f7e6e49a84c64f0d2e77185080e0f334b9060200160405180910390a1600160408401526110be61191c565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606080870151838601805191909516905283516001930183905283519091019190915290514391015260c083015160a0830151610dae91906000906114c6565b600360208501515151600381111561114757611147611b8f565b14156112cf576111593415601a610a4f565b600182610120015161116b9190612210565b60c0820180519190915261010083018051602090810151835190910152516040908101519151911515918101919091528201516111b6906111af90339060016114b0565b601b610a4f565b6111d982602001516001600160a01b0316336001600160a01b031614601c610a4f565b6111f68260a001516111ec5760016111ef565b60005b601d610a4f565b33600090815260046020908152604091829020805460ff19166001908117825590810181905591519182527f077cdc57e013a005ebf606427b479e48411eb96c1d763ce6ee76a1461415d38d910160405180910390a16001606084015261125b61191c565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451908416908201526060808701518386018051919095169052608087015184519015159301929092528251600191015290514391015260c08084015190830151610dae91906000906114c6565b50505050565b6112e56003600054146023610a4f565b81516113009015806112f957508251600154145b6024610a4f565b60008080556002805461131290611de6565b80601f016020809104026020016040519081016040528092919081815260200182805461133e90611de6565b801561138b5780601f106113605761010080835404028352916020019161138b565b820191906000526020600020905b81548152906001019060200180831161136e57829003601f168201915b50505050508060200190518101906113a39190611f00565b90506113b56000194310156025610a4f565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a161140834156021610a4f565b8051611420906001600160a01b031633146022610a4f565b61142861191c565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518386018051919095169052608080870151855190151594019390935260a080870151855190151593019290925283514391015260c085015183519092019190915260e0840151915101526112cf8161153a565b60006114be8385308561161d565b949350505050565b6114ce61194c565b60005b600181101561151a578481600181106114ec576114ec6121cd565b6020020151828260018110611503576115036121cd565b60200201528061151281612228565b9150506114d1565b508181846001811061152e5761152e6121cd565b60200201529392505050565b611542611997565b8151516001600160a01b039081168252825160209081015182168184015283516040908101518316818501528185018051519093166060850152825182015115156080808601919091528351820151151560a080870191909152845182015160c08701528451015160e0860152835181015151610100860152925190920151515161012084015260036000554360015590516115e091839101612287565b60405160208183030381529060405260029080519060200190611604929190611a15565b505050565b6116148383836116f7565b61160457600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161168491612367565b60006040518083038185875af1925050503d80600081146116c1576040519150601f19603f3d011682016040523d82523d6000602084013e6116c6565b606091505b50915091506116d7828260016117c8565b50808060200190518101906116ec9190612383565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161175691612367565b60006040518083038185875af1925050503d8060008114611793576040519150601f19603f3d011682016040523d82523d6000602084013e611798565b606091505b50915091506117a9828260026117c8565b50808060200190518101906117be9190612383565b9695505050505050565b606083156117d7575081610461565b8251156117e75782518084602001fd5b60405163100960cb60e01b815260048101839052602401610a6c565b60405180604001604052806000815260200161181d611a99565b905290565b6040805160a0810190915260006080820190815281905b81526000602082018190526040820181905260609091015290565b6040805161014081018252600060e08201818152610100830182905261012083018290528252825160208181019094529081529091820190815260408051606081018252600080825260208281018290529282015291019081526020016118b961194c565b81526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291015290565b6040805160a08101825260009181018281526060820183905260808201929092529081526020810161181d611aac565b60405180602001604052806001905b611981604051806060016040528060008152602001600081526020016000151581525090565b81526020019060019003908161195b5790505090565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260c081016119d661194c565b815260200160008152602001611a08604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b828054611a2190611de6565b90600052602060002090601f016020900481019282611a435760008555611a89565b82601f10611a5c57805160ff1916838001178555611a89565b82800160010185558215611a89579182015b82811115611a89578251825591602001919060010190611a6e565b50611a95929150611ae8565b5090565b604051806020016040528061181d611afd565b6040518060c0016040528060006001600160a01b0316815260200160001515815260200160001515815260200160008152602001611a0861194c565b5b80821115611a955760008155600101611ae9565b6040805160a081019091528060008152602001611839604051806080016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161181d60408051602081019091526000815290565b6001600160a01b0381168114611b6f57600080fd5b50565b600060208284031215611b8457600080fd5b813561046181611b5a565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611bbc57611bbc611b8f565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611c1557611c15611bdc565b60405290565b604051610140810167ffffffffffffffff81118282101715611c1557611c15611bdc565b6040805190810167ffffffffffffffff81118282101715611c1557611c15611bdc565b60405160a0810167ffffffffffffffff81118282101715611c1557611c15611bdc565b6040516080810167ffffffffffffffff81118282101715611c1557611c15611bdc565b600060208284031215611cba57600080fd5b6040516020810181811067ffffffffffffffff82111715611cdd57611cdd611bdc565b60405290508082356001600160e01b031981168114611cfb57600080fd5b905292915050565b60008060008060808587031215611d1957600080fd5b8435611d2481611b5a565b93506020850135611d3481611b5a565b925060408501359150611d4a8660608701611ca8565b905092959194509250565b600060408284031215611d6757600080fd5b50919050565b60005b83811015611d88578181015183820152602001611d70565b838111156112cf5750506000910152565b8281526040602082015260008251806040840152611dbe816060850160208701611d6d565b601f01601f1916919091016060019392505050565b60006101208284031215611d6757600080fd5b600181811c90821680611dfa57607f821691505b60208210811415611d6757634e487b7160e01b600052602260045260246000fd5b805161047481611b5a565b8015158114611b6f57600080fd5b805161047481611e26565b600060608284031215611e5157600080fd5b6040516060810181811067ffffffffffffffff82111715611e7457611e74611bdc565b806040525080915082518152602083015160208201526040830151611e9881611e26565b6040919091015292915050565b600082601f830112611eb657600080fd5b611ebe611bf2565b80606080850186811115611ed157600080fd5b855b81811015611ef457611ee58882611e3f565b85526020909401938201611ed3565b50919695505050505050565b60006101c08284031215611f1357600080fd5b611f1b611c1b565b611f2483611e1b565b8152611f3260208401611e1b565b6020820152611f4360408401611e1b565b6040820152611f5460608401611e1b565b6060820152611f6560808401611e34565b6080820152611f7660a08401611e34565b60a0820152611f888460c08501611ea5565b60c08201526101208084015160e0830152611fa7856101408601611e3f565b6101008301526101a084015181830152508091505092915050565b803561047481611e26565b600060408284031215611fdf57600080fd5b6040516040810181811067ffffffffffffffff8211171561200257612002611bdc565b60405282358152602083013561201781611e26565b60208201529392505050565b600081830361012081121561203757600080fd5b61203f611c3f565b8335815261010080601f198401121561205757600080fd5b61205f611bf2565b612067611c62565b60208701356004811061207957600080fd5b81526080603f198601121561208d57600080fd5b612095611c85565b945060408701356120a581611b5a565b855260608701356120b581611b5a565b6020860152608087013560408601526120d18860a08901611ca8565b60608601528460208201526120e860c08801611fc2565b60408201526120f960e08801611fc2565b6060820152612109838801611fc2565b60808201528152602083015250949350505050565b6001600160a01b038381168252825160208084019190915283015151805161014084019291906004811061215457612154611b8f565b806040860152506020810151828151166060860152826020820151166080860152604081015160a086015263ffffffff60e01b6060820151511660c086015250604081015191506121a960e085018315159052565b60608101511515610100850152608001511515610120909301929092529392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008282101561220b5761220b6121e3565b500390565b60008219821115612223576122236121e3565b500190565b600060001982141561223c5761223c6121e3565b5060010190565b8060005b60018110156112cf5761227184835180518252602080820151908301526040908101511515910152565b6060939093019260209190910190600101612247565b81516001600160a01b031681526101c0810160208301516122b360208401826001600160a01b03169052565b5060408301516122ce60408401826001600160a01b03169052565b5060608301516122e960608401826001600160a01b03169052565b5060808301516122fd608084018215159052565b5060a083015161231160a084018215159052565b5060c083015161232460c0840182612243565b5060e08301516101208381019190915261010084015180516101408501526020810151610160850152604001511515610180840152909201516101a09091015290565b60008251612379818460208701611d6d565b9190910192915050565b60006020828403121561239557600080fd5b815161046181611e2656fea26469706673582212202e6fcc1116be25abdb556f78e8a337d9bbd90ff7f6a027a7daa8c3f593f5ada764736f6c634300080c0033`,
  BytecodeLen: 11182,
  Which: `oD`,
  version: 7,
  views: {
    Bridger_v: `Bridger_v`,
    Creator_v: `Creator_v`,
    balance_NFT_v: `balance_NFT_v`,
    balance_v: `balance_v`,
    bridgingComplete_v: `bridgingComplete_v`,
    lockedNFT_v: `lockedNFT_v`,
    saved_v: `saved_v`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './indexBridge2.rsh:164:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './indexBridge2.rsh:68:75:after expr stmt semicolon',
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
  "claimNFT": claimNFT,
  "completeBridge": completeBridge,
  "lockNFT": lockNFT
  };
export const _APIs = {
  IERC721Receiver: IERC721Receiver,
  claimNFT: claimNFT,
  completeBridge: completeBridge,
  lockNFT: lockNFT
  };
