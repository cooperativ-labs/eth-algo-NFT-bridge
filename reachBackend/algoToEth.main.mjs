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
            const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = svs;
            return (await ((async () => {
              
              
              return v516;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      Creator_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = svs;
            return (await ((async () => {
              
              
              return v501;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc0
        },
      balance_NFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = svs;
            return (await ((async () => {
              
              
              return v532;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      balance_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = svs;
            return (await ((async () => {
              
              
              return v521;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        },
      lockedNFT_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = svs;
            return (await ((async () => {
              
              
              return v517;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc2
        },
      saved_v: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = svs;
            return (await ((async (_v533 ) => {
                const v533 = stdlib.protect(ctc0, _v533, null);
              
              const v534 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v533), null);
              const v535 = stdlib.fromSome(v534, stdlib.checkedBigNumberify('./indexBridge2.rsh:54:45:decimal', stdlib.UInt_max, '0'));
              
              return v535;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc3
        }
      },
    views: {
      3: [ctc0, ctc0, ctc1, ctc0, ctc2, ctc5, ctc3, ctc4, ctc3]
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
    IERC721Receiver0_72: ctc7,
    adminSaveNFT0_72: ctc8,
    claimNFT0_72: ctc8,
    lockNFT0_72: ctc8
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
  
  
  const v488 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v489 = [v488];
  const v495 = 'I have deployed';
  const v496 = stdlib.protect(ctc5, await interact.getParams(v495), {
    at: './indexBridge2.rsh:39:66:application',
    fs: ['at ./indexBridge2.rsh:38:21:application call to [unknown function] (defined at: ./indexBridge2.rsh:38:25:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v497 = v496.Bridger;
  const v498 = v496.NFT;
  
  const txn1 = await (ctc.sendrecv({
    args: [v497, v498],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3, ctc4],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v502, v503], secs: v505, time: v504, didSend: v33, from: v501 } = txn1;
      
      const v506 = v489[stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '0')];
      const v508 = v506[stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '1')];
      const v509 = v506[stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '2')];
      const v510 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v508, v509];
      const v511 = stdlib.Array_set(v489, stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '0'), v510);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v503
        });
      ;
      
      const v516 = v502;
      const v517 = true;
      const v518 = v504;
      const v520 = v511;
      const v521 = stdlib.checkedBigNumberify('./indexBridge2.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        const v531 = v520[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
        const v532 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v503
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
  const {data: [v502, v503], secs: v505, time: v504, didSend: v33, from: v501 } = txn1;
  const v506 = v489[stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '0')];
  const v508 = v506[stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '1')];
  const v509 = v506[stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '2')];
  const v510 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v508, v509];
  const v511 = stdlib.Array_set(v489, stdlib.checkedBigNumberify('./indexBridge2.rsh:43:17:dot', stdlib.UInt_max, '0'), v510);
  ;
  ;
  const v514 = 'I HAVE DEPLOYED';
  stdlib.protect(ctc0, await interact.iDeployed(v514), {
    at: './indexBridge2.rsh:45:35:application',
    fs: ['at ./indexBridge2.rsh:45:35:application call to [unknown function] (defined at: ./indexBridge2.rsh:45:35:function exp)', 'at ./indexBridge2.rsh:45:35:application call to "liftedInteract" (defined at: ./indexBridge2.rsh:45:35:application)'],
    msg: 'iDeployed',
    who: 'Creator'
    });
  
  let v516 = v502;
  let v517 = true;
  let v518 = v504;
  let v520 = v511;
  let v521 = stdlib.checkedBigNumberify('./indexBridge2.rsh:36:15:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const v531 = v520[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
    const v532 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
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
        args: [v501, v502, v503, v516, v517, v520, v521, v531, v532],
        evt_cnt: 0,
        funcNum: 3,
        lct: v518,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:159:21:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          stdlib.simMapDupe(sim_r, 0, map0);
          
          const {data: [], secs: v1113, time: v1112, didSend: v390, from: v1111 } = txn3;
          
          ;
          const cv516 = v516;
          const cv517 = v517;
          const cv518 = v1112;
          const cv520 = v520;
          const cv521 = v521;
          
          await (async () => {
            const v516 = cv516;
            const v517 = cv517;
            const v518 = cv518;
            const v520 = cv520;
            const v521 = cv521;
            
            if (await (async () => {
              
              return true;})()) {
              const v531 = v520[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
              const v532 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v503
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
      const {data: [], secs: v1113, time: v1112, didSend: v390, from: v1111 } = txn3;
      ;
      const v1114 = stdlib.addressEq(v501, v1111);
      stdlib.assert(v1114, {
        at: './indexBridge2.rsh:159:21:dot',
        fs: ['at ./indexBridge2.rsh:158:40:application call to [unknown function] (defined at: ./indexBridge2.rsh:158:40:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv516 = v516;
      const cv517 = v517;
      const cv518 = v1112;
      const cv520 = v520;
      const cv521 = v521;
      
      v516 = cv516;
      v517 = cv517;
      v518 = cv518;
      v520 = cv520;
      v521 = cv521;
      
      continue;
      }
    else {
      const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn2;
      switch (v640[0]) {
        case 'IERC721Receiver0_72': {
          const v643 = v640[1];
          undefined /* setApiDetails */;
          ;
          const v693 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
          const v694 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
          const v695 = [v532, v693, v694];
          const v696 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v695);
          ;
          const v702 = 'true';
          await txn2.getOutput('IERC721Receiver', 'v702', ctc6, v702);
          const cv516 = v516;
          const cv517 = v517;
          const cv518 = v641;
          const cv520 = v696;
          const cv521 = v521;
          
          v516 = cv516;
          v517 = cv517;
          v518 = cv518;
          v520 = cv520;
          v521 = cv521;
          
          continue;
          break;
          }
        case 'adminSaveNFT0_72': {
          const v760 = v640[1];
          undefined /* setApiDetails */;
          ;
          const v807 = stdlib.add(v532, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v810 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
          const v811 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
          const v812 = [v807, v810, v811];
          const v813 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v812);
          ;
          const v831 = stdlib.addressEq(v639, v501);
          stdlib.assert(v831, {
            at: './indexBridge2.rsh:91:24:application',
            fs: ['at ./indexBridge2.rsh:90:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:90:13:function exp)'],
            msg: 'Only Backend can save NFT',
            who: 'Creator'
            });
          const v832 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v516), null);
          const v833 = stdlib.fromSome(v832, stdlib.checkedBigNumberify('./indexBridge2.rsh:54:45:decimal', stdlib.UInt_max, '0'));
          const v834 = stdlib.eq(v833, stdlib.checkedBigNumberify('./indexBridge2.rsh:92:56:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v834, {
            at: './indexBridge2.rsh:92:24:application',
            fs: ['at ./indexBridge2.rsh:90:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:90:13:function exp)'],
            msg: 'one NFT already locked by this bridger',
            who: 'Creator'
            });
          const v835 = true;
          await txn2.getOutput('adminSaveNFT', 'v835', ctc10, v835);
          const cv516 = v516;
          const cv517 = v517;
          const cv518 = v641;
          const cv520 = v813;
          const cv521 = v521;
          
          v516 = cv516;
          v517 = cv517;
          v518 = cv518;
          v520 = cv520;
          v521 = cv521;
          
          continue;
          break;
          }
        case 'claimNFT0_72': {
          const v877 = v640[1];
          undefined /* setApiDetails */;
          ;
          const v927 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
          const v928 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
          const v929 = [v532, v927, v928];
          const v930 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v929);
          ;
          const v960 = stdlib.addressEq(v639, v502);
          stdlib.assert(v960, {
            at: './indexBridge2.rsh:133:24:application',
            fs: ['at ./indexBridge2.rsh:132:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:132:13:function exp)'],
            msg: 'Only Bridger can claim NFT when bridging',
            who: 'Creator'
            });
          stdlib.assert(v517, {
            at: './indexBridge2.rsh:134:24:application',
            fs: ['at ./indexBridge2.rsh:132:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:132:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v962 = v930[stdlib.checkedBigNumberify('./indexBridge2.rsh:135:32:application', stdlib.UInt_max, '0')];
          const v963 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:135:32:application', stdlib.UInt_max, '0')];
          const v964 = stdlib.gt(v963, stdlib.checkedBigNumberify('./indexBridge2.rsh:135:40:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v964, {
            at: './indexBridge2.rsh:135:24:application',
            fs: ['at ./indexBridge2.rsh:132:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:132:13:function exp)'],
            msg: 'Bridger must have NFT to claim. None available',
            who: 'Creator'
            });
          const v970 = stdlib.sub(v963, stdlib.checkedBigNumberify('./indexBridge2.rsh:137:26:decimal', stdlib.UInt_max, '1'));
          const v973 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '1')];
          const v974 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '2')];
          const v975 = [v970, v973, v974];
          const v976 = stdlib.Array_set(v930, stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '0'), v975);
          ;
          await stdlib.mapSet(map0, v639, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:31:decimal', stdlib.UInt_max, '0'));
          const v977 = true;
          await txn2.getOutput('claimNFT', 'v977', ctc10, v977);
          const cv516 = v516;
          const cv517 = false;
          const cv518 = v641;
          const cv520 = v976;
          const cv521 = v521;
          
          v516 = cv516;
          v517 = cv517;
          v518 = cv518;
          v520 = cv520;
          v521 = cv521;
          
          continue;
          break;
          }
        case 'lockNFT0_72': {
          const v994 = v640[1];
          undefined /* setApiDetails */;
          ;
          const v1041 = stdlib.add(v532, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1044 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
          const v1045 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
          const v1046 = [v1041, v1044, v1045];
          const v1047 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v1046);
          ;
          const v1102 = stdlib.addressEq(v639, v502);
          stdlib.assert(v1102, {
            at: './indexBridge2.rsh:109:24:application',
            fs: ['at ./indexBridge2.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:108:13:function exp)'],
            msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
            who: 'Creator'
            });
          const v1103 = v517 ? false : true;
          stdlib.assert(v1103, {
            at: './indexBridge2.rsh:110:32:application',
            fs: ['at ./indexBridge2.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:108:13:function exp)'],
            msg: 'NFT is already locked. You can only bridge one NFT at a time',
            who: 'Creator'
            });
          await stdlib.mapSet(map0, v639, stdlib.checkedBigNumberify('./indexBridge2.rsh:112:39:decimal', stdlib.UInt_max, '1'));
          const v1104 = true;
          await txn2.getOutput('lockNFT', 'v1104', ctc10, v1104);
          const cv516 = v516;
          const cv517 = true;
          const cv518 = v641;
          const cv520 = v1047;
          const cv521 = v521;
          
          v516 = cv516;
          v517 = cv517;
          v518 = cv518;
          v520 = cv520;
          v521 = cv521;
          
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
    IERC721Receiver0_72: ctc9,
    adminSaveNFT0_72: ctc10,
    claimNFT0_72: ctc10,
    lockNFT0_72: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v577 = stdlib.protect(ctc9, await interact.in(), {
    at: './indexBridge2.rsh:1:23:application',
    fs: ['at ./indexBridge2.rsh:149:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:149:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runIERC721Receiver0_72" (defined at: ./indexBridge2.rsh:146:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'in',
    who: 'IERC721Receiver'
    });
  const v593 = ['IERC721Receiver0_72', v577];
  
  const txn1 = await (ctc.sendrecv({
    args: [v501, v502, v503, v516, v517, v520, v521, v531, v532, v593],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:151:29:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge2.rsh:151:33:decimal', stdlib.UInt_max, '0'), v503]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn1;
      
      switch (v640[0]) {
        case 'IERC721Receiver0_72': {
          const v643 = v640[1];
          sim_r.txns.push({
            kind: 'api',
            who: "IERC721Receiver"
            });
          ;
          const v693 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
          const v694 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
          const v695 = [v532, v693, v694];
          const v696 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v695);
          ;
          const v702 = 'true';
          const v703 = await txn1.getOutput('IERC721Receiver', 'v702', ctc8, v702);
          
          const v1617 = v516;
          const v1618 = v517;
          const v1620 = v696;
          const v1621 = v521;
          const v1622 = v696[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
          const v1623 = v1622[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'adminSaveNFT0_72': {
          const v760 = v640[1];
          
          break;
          }
        case 'claimNFT0_72': {
          const v877 = v640[1];
          
          break;
          }
        case 'lockNFT0_72': {
          const v994 = v640[1];
          
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
  const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn1;
  switch (v640[0]) {
    case 'IERC721Receiver0_72': {
      const v643 = v640[1];
      undefined /* setApiDetails */;
      ;
      const v693 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
      const v694 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
      const v695 = [v532, v693, v694];
      const v696 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v695);
      ;
      const v702 = 'true';
      const v703 = await txn1.getOutput('IERC721Receiver', 'v702', ctc8, v702);
      if (v311) {
        stdlib.protect(ctc0, await interact.out(v643, v703), {
          at: './indexBridge2.rsh:147:13:application',
          fs: ['at ./indexBridge2.rsh:147:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:147:13:function exp)', 'at ./indexBridge2.rsh:154:20:application call to "res" (defined at: ./indexBridge2.rsh:153:13:function exp)', 'at ./indexBridge2.rsh:153:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:153:13:function exp)'],
          msg: 'out',
          who: 'IERC721Receiver'
          });
        }
      else {
        }
      
      const v1617 = v516;
      const v1618 = v517;
      const v1620 = v696;
      const v1621 = v521;
      const v1622 = v696[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
      const v1623 = v1622[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'adminSaveNFT0_72': {
      const v760 = v640[1];
      return;
      break;
      }
    case 'claimNFT0_72': {
      const v877 = v640[1];
      return;
      break;
      }
    case 'lockNFT0_72': {
      const v994 = v640[1];
      return;
      break;
      }
    }
  
  
  };
export async function _adminSaveNFT3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _adminSaveNFT3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _adminSaveNFT3 expects to receive an interact object as its second argument.`));}
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
    IERC721Receiver0_72: ctc10,
    adminSaveNFT0_72: ctc8,
    claimNFT0_72: ctc8,
    lockNFT0_72: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v540 = ctc.selfAddress();
  const v542 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge2.rsh:1:23:application',
    fs: ['at ./indexBridge2.rsh:83:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:83:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runadminSaveNFT0_72" (defined at: ./indexBridge2.rsh:80:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'in',
    who: 'adminSaveNFT'
    });
  const v544 = stdlib.addressEq(v540, v501);
  stdlib.assert(v544, {
    at: './indexBridge2.rsh:84:23:application',
    fs: ['at ./indexBridge2.rsh:83:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:83:17:function exp)', 'at ./indexBridge2.rsh:83:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:83:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runadminSaveNFT0_72" (defined at: ./indexBridge2.rsh:80:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'Only Backend can save NFT',
    who: 'adminSaveNFT'
    });
  const v545 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v516), null);
  const v546 = stdlib.fromSome(v545, stdlib.checkedBigNumberify('./indexBridge2.rsh:54:45:decimal', stdlib.UInt_max, '0'));
  const v547 = stdlib.eq(v546, stdlib.checkedBigNumberify('./indexBridge2.rsh:85:55:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v547, {
    at: './indexBridge2.rsh:85:23:application',
    fs: ['at ./indexBridge2.rsh:83:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:83:17:function exp)', 'at ./indexBridge2.rsh:83:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:83:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runadminSaveNFT0_72" (defined at: ./indexBridge2.rsh:80:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'one NFT already locked by this bridger',
    who: 'adminSaveNFT'
    });
  const v550 = ['adminSaveNFT0_72', v542];
  
  const txn1 = await (ctc.sendrecv({
    args: [v501, v502, v503, v516, v517, v520, v521, v531, v532, v550],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:88:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge2.rsh:88:25:decimal', stdlib.UInt_max, '1'), v503]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn1;
      
      switch (v640[0]) {
        case 'IERC721Receiver0_72': {
          const v643 = v640[1];
          
          break;
          }
        case 'adminSaveNFT0_72': {
          const v760 = v640[1];
          sim_r.txns.push({
            kind: 'api',
            who: "adminSaveNFT"
            });
          ;
          const v807 = stdlib.add(v532, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v810 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
          const v811 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
          const v812 = [v807, v810, v811];
          const v813 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v812);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v503
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v516), null);
          const v835 = true;
          const v836 = await txn1.getOutput('adminSaveNFT', 'v835', ctc5, v835);
          
          const v1662 = v516;
          const v1663 = v517;
          const v1665 = v813;
          const v1666 = v521;
          const v1667 = v813[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
          const v1668 = v1667[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimNFT0_72': {
          const v877 = v640[1];
          
          break;
          }
        case 'lockNFT0_72': {
          const v994 = v640[1];
          
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
  const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn1;
  switch (v640[0]) {
    case 'IERC721Receiver0_72': {
      const v643 = v640[1];
      return;
      break;
      }
    case 'adminSaveNFT0_72': {
      const v760 = v640[1];
      undefined /* setApiDetails */;
      ;
      const v807 = stdlib.add(v532, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v810 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
      const v811 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
      const v812 = [v807, v810, v811];
      const v813 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v812);
      ;
      const v831 = stdlib.addressEq(v639, v501);
      stdlib.assert(v831, {
        at: './indexBridge2.rsh:91:24:application',
        fs: ['at ./indexBridge2.rsh:90:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:90:13:function exp)'],
        msg: 'Only Backend can save NFT',
        who: 'adminSaveNFT'
        });
      const v832 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v516), null);
      const v833 = stdlib.fromSome(v832, stdlib.checkedBigNumberify('./indexBridge2.rsh:54:45:decimal', stdlib.UInt_max, '0'));
      const v834 = stdlib.eq(v833, stdlib.checkedBigNumberify('./indexBridge2.rsh:92:56:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v834, {
        at: './indexBridge2.rsh:92:24:application',
        fs: ['at ./indexBridge2.rsh:90:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:90:13:function exp)'],
        msg: 'one NFT already locked by this bridger',
        who: 'adminSaveNFT'
        });
      const v835 = true;
      const v836 = await txn1.getOutput('adminSaveNFT', 'v835', ctc5, v835);
      if (v311) {
        stdlib.protect(ctc0, await interact.out(v760, v836), {
          at: './indexBridge2.rsh:81:13:application',
          fs: ['at ./indexBridge2.rsh:81:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:81:13:function exp)', 'at ./indexBridge2.rsh:94:20:application call to "res" (defined at: ./indexBridge2.rsh:90:13:function exp)', 'at ./indexBridge2.rsh:90:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:90:13:function exp)'],
          msg: 'out',
          who: 'adminSaveNFT'
          });
        }
      else {
        }
      
      const v1662 = v516;
      const v1663 = v517;
      const v1665 = v813;
      const v1666 = v521;
      const v1667 = v813[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
      const v1668 = v1667[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'claimNFT0_72': {
      const v877 = v640[1];
      return;
      break;
      }
    case 'lockNFT0_72': {
      const v994 = v640[1];
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
    IERC721Receiver0_72: ctc10,
    adminSaveNFT0_72: ctc8,
    claimNFT0_72: ctc8,
    lockNFT0_72: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v562 = ctc.selfAddress();
  const v564 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge2.rsh:1:23:application',
    fs: ['at ./indexBridge2.rsh:124:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:124:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runclaimNFT0_72" (defined at: ./indexBridge2.rsh:121:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'in',
    who: 'claimNFT'
    });
  const v566 = stdlib.addressEq(v562, v502);
  stdlib.assert(v566, {
    at: './indexBridge2.rsh:125:23:application',
    fs: ['at ./indexBridge2.rsh:124:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:124:17:function exp)', 'at ./indexBridge2.rsh:124:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:124:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runclaimNFT0_72" (defined at: ./indexBridge2.rsh:121:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'Only Bridger can claim NFT when bridging',
    who: 'claimNFT'
    });
  stdlib.assert(v517, {
    at: './indexBridge2.rsh:126:23:application',
    fs: ['at ./indexBridge2.rsh:124:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:124:17:function exp)', 'at ./indexBridge2.rsh:124:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:124:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runclaimNFT0_72" (defined at: ./indexBridge2.rsh:121:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v570 = stdlib.gt(v532, stdlib.checkedBigNumberify('./indexBridge2.rsh:127:39:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v570, {
    at: './indexBridge2.rsh:127:23:application',
    fs: ['at ./indexBridge2.rsh:124:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:124:17:function exp)', 'at ./indexBridge2.rsh:124:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:124:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runclaimNFT0_72" (defined at: ./indexBridge2.rsh:121:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'Bridger must have NFT to claim. None available',
    who: 'claimNFT'
    });
  const v573 = ['claimNFT0_72', v564];
  
  const txn1 = await (ctc.sendrecv({
    args: [v501, v502, v503, v516, v517, v520, v521, v531, v532, v573],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:130:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge2.rsh:130:25:decimal', stdlib.UInt_max, '0'), v503]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn1;
      
      switch (v640[0]) {
        case 'IERC721Receiver0_72': {
          const v643 = v640[1];
          
          break;
          }
        case 'adminSaveNFT0_72': {
          const v760 = v640[1];
          
          break;
          }
        case 'claimNFT0_72': {
          const v877 = v640[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimNFT"
            });
          ;
          const v927 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
          const v928 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
          const v929 = [v532, v927, v928];
          const v930 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v929);
          ;
          const v962 = v930[stdlib.checkedBigNumberify('./indexBridge2.rsh:135:32:application', stdlib.UInt_max, '0')];
          const v963 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:135:32:application', stdlib.UInt_max, '0')];
          const v970 = stdlib.sub(v963, stdlib.checkedBigNumberify('./indexBridge2.rsh:137:26:decimal', stdlib.UInt_max, '1'));
          const v973 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '1')];
          const v974 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '2')];
          const v975 = [v970, v973, v974];
          const v976 = stdlib.Array_set(v930, stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '0'), v975);
          sim_r.txns.push({
            kind: 'from',
            to: v639,
            tok: v503
            });
          await stdlib.simMapSet(sim_r, 0, v639, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:31:decimal', stdlib.UInt_max, '0'));
          const v977 = true;
          const v978 = await txn1.getOutput('claimNFT', 'v977', ctc5, v977);
          
          const v1707 = v516;
          const v1708 = false;
          const v1710 = v976;
          const v1711 = v521;
          const v1712 = v976[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
          const v1713 = v1712[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
          sim_r.isHalt = false;
          
          break;
          }
        case 'lockNFT0_72': {
          const v994 = v640[1];
          
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
  const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn1;
  switch (v640[0]) {
    case 'IERC721Receiver0_72': {
      const v643 = v640[1];
      return;
      break;
      }
    case 'adminSaveNFT0_72': {
      const v760 = v640[1];
      return;
      break;
      }
    case 'claimNFT0_72': {
      const v877 = v640[1];
      undefined /* setApiDetails */;
      ;
      const v927 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
      const v928 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
      const v929 = [v532, v927, v928];
      const v930 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v929);
      ;
      const v960 = stdlib.addressEq(v639, v502);
      stdlib.assert(v960, {
        at: './indexBridge2.rsh:133:24:application',
        fs: ['at ./indexBridge2.rsh:132:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:132:13:function exp)'],
        msg: 'Only Bridger can claim NFT when bridging',
        who: 'claimNFT'
        });
      stdlib.assert(v517, {
        at: './indexBridge2.rsh:134:24:application',
        fs: ['at ./indexBridge2.rsh:132:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:132:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v962 = v930[stdlib.checkedBigNumberify('./indexBridge2.rsh:135:32:application', stdlib.UInt_max, '0')];
      const v963 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:135:32:application', stdlib.UInt_max, '0')];
      const v964 = stdlib.gt(v963, stdlib.checkedBigNumberify('./indexBridge2.rsh:135:40:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v964, {
        at: './indexBridge2.rsh:135:24:application',
        fs: ['at ./indexBridge2.rsh:132:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:132:13:function exp)'],
        msg: 'Bridger must have NFT to claim. None available',
        who: 'claimNFT'
        });
      const v970 = stdlib.sub(v963, stdlib.checkedBigNumberify('./indexBridge2.rsh:137:26:decimal', stdlib.UInt_max, '1'));
      const v973 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '1')];
      const v974 = v962[stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '2')];
      const v975 = [v970, v973, v974];
      const v976 = stdlib.Array_set(v930, stdlib.checkedBigNumberify('./indexBridge2.rsh:137:36:application', stdlib.UInt_max, '0'), v975);
      ;
      await stdlib.mapSet(map0, v639, stdlib.checkedBigNumberify('./indexBridge2.rsh:139:31:decimal', stdlib.UInt_max, '0'));
      const v977 = true;
      const v978 = await txn1.getOutput('claimNFT', 'v977', ctc5, v977);
      if (v311) {
        stdlib.protect(ctc0, await interact.out(v877, v978), {
          at: './indexBridge2.rsh:122:13:application',
          fs: ['at ./indexBridge2.rsh:122:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:122:13:function exp)', 'at ./indexBridge2.rsh:142:20:application call to "res" (defined at: ./indexBridge2.rsh:132:13:function exp)', 'at ./indexBridge2.rsh:132:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:132:13:function exp)'],
          msg: 'out',
          who: 'claimNFT'
          });
        }
      else {
        }
      
      const v1707 = v516;
      const v1708 = false;
      const v1710 = v976;
      const v1711 = v521;
      const v1712 = v976[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
      const v1713 = v1712[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
      return;
      
      break;
      }
    case 'lockNFT0_72': {
      const v994 = v640[1];
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
    IERC721Receiver0_72: ctc10,
    adminSaveNFT0_72: ctc8,
    claimNFT0_72: ctc8,
    lockNFT0_72: ctc8
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v501, v502, v503, v516, v517, v520, v521, v531, v532] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc3, ctc4, ctc3, ctc5, ctc7, ctc1, ctc6, ctc1]);
  const v552 = ctc.selfAddress();
  const v554 = stdlib.protect(ctc8, await interact.in(), {
    at: './indexBridge2.rsh:1:23:application',
    fs: ['at ./indexBridge2.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:101:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runlockNFT0_72" (defined at: ./indexBridge2.rsh:98:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'in',
    who: 'lockNFT'
    });
  const v556 = stdlib.addressEq(v552, v502);
  stdlib.assert(v556, {
    at: './indexBridge2.rsh:102:23:application',
    fs: ['at ./indexBridge2.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:101:17:function exp)', 'at ./indexBridge2.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:101:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runlockNFT0_72" (defined at: ./indexBridge2.rsh:98:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
    who: 'lockNFT'
    });
  const v557 = v517 ? false : true;
  stdlib.assert(v557, {
    at: './indexBridge2.rsh:103:31:application',
    fs: ['at ./indexBridge2.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:101:17:function exp)', 'at ./indexBridge2.rsh:101:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:101:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to "runlockNFT0_72" (defined at: ./indexBridge2.rsh:98:13:function exp)', 'at ./indexBridge2.rsh:67:57:application call to [unknown function] (defined at: ./indexBridge2.rsh:67:57:function exp)'],
    msg: 'NFT is already locked. You can only bridge one NFT at a time',
    who: 'lockNFT'
    });
  const v560 = ['lockNFT0_72', v554];
  
  const txn1 = await (ctc.sendrecv({
    args: [v501, v502, v503, v516, v517, v520, v521, v531, v532, v560],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./indexBridge2.rsh:106:21:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./indexBridge2.rsh:106:25:decimal', stdlib.UInt_max, '1'), v503]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn1;
      
      switch (v640[0]) {
        case 'IERC721Receiver0_72': {
          const v643 = v640[1];
          
          break;
          }
        case 'adminSaveNFT0_72': {
          const v760 = v640[1];
          
          break;
          }
        case 'claimNFT0_72': {
          const v877 = v640[1];
          
          break;
          }
        case 'lockNFT0_72': {
          const v994 = v640[1];
          sim_r.txns.push({
            kind: 'api',
            who: "lockNFT"
            });
          ;
          const v1041 = stdlib.add(v532, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1044 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
          const v1045 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
          const v1046 = [v1041, v1044, v1045];
          const v1047 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v1046);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v503
            });
          await stdlib.simMapSet(sim_r, 0, v639, stdlib.checkedBigNumberify('./indexBridge2.rsh:112:39:decimal', stdlib.UInt_max, '1'));
          const v1104 = true;
          const v1105 = await txn1.getOutput('lockNFT', 'v1104', ctc5, v1104);
          
          const v1752 = v516;
          const v1753 = true;
          const v1755 = v1047;
          const v1756 = v521;
          const v1757 = v1047[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
          const v1758 = v1757[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
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
  const {data: [v640], secs: v642, time: v641, didSend: v311, from: v639 } = txn1;
  switch (v640[0]) {
    case 'IERC721Receiver0_72': {
      const v643 = v640[1];
      return;
      break;
      }
    case 'adminSaveNFT0_72': {
      const v760 = v640[1];
      return;
      break;
      }
    case 'claimNFT0_72': {
      const v877 = v640[1];
      return;
      break;
      }
    case 'lockNFT0_72': {
      const v994 = v640[1];
      undefined /* setApiDetails */;
      ;
      const v1041 = stdlib.add(v532, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1044 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '1')];
      const v1045 = v531[stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '2')];
      const v1046 = [v1041, v1044, v1045];
      const v1047 = stdlib.Array_set(v520, stdlib.checkedBigNumberify('./indexBridge2.rsh:67:57:dot', stdlib.UInt_max, '0'), v1046);
      ;
      const v1102 = stdlib.addressEq(v639, v502);
      stdlib.assert(v1102, {
        at: './indexBridge2.rsh:109:24:application',
        fs: ['at ./indexBridge2.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:108:13:function exp)'],
        msg: 'You are not the bridger. Only Bridger can bridge NFT on this contract',
        who: 'lockNFT'
        });
      const v1103 = v517 ? false : true;
      stdlib.assert(v1103, {
        at: './indexBridge2.rsh:110:32:application',
        fs: ['at ./indexBridge2.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:108:13:function exp)'],
        msg: 'NFT is already locked. You can only bridge one NFT at a time',
        who: 'lockNFT'
        });
      await stdlib.mapSet(map0, v639, stdlib.checkedBigNumberify('./indexBridge2.rsh:112:39:decimal', stdlib.UInt_max, '1'));
      const v1104 = true;
      const v1105 = await txn1.getOutput('lockNFT', 'v1104', ctc5, v1104);
      if (v311) {
        stdlib.protect(ctc0, await interact.out(v994, v1105), {
          at: './indexBridge2.rsh:99:13:application',
          fs: ['at ./indexBridge2.rsh:99:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:99:13:function exp)', 'at ./indexBridge2.rsh:115:20:application call to "res" (defined at: ./indexBridge2.rsh:108:13:function exp)', 'at ./indexBridge2.rsh:108:13:application call to [unknown function] (defined at: ./indexBridge2.rsh:108:13:function exp)'],
          msg: 'out',
          who: 'lockNFT'
          });
        }
      else {
        }
      
      const v1752 = v516;
      const v1753 = true;
      const v1755 = v1047;
      const v1756 = v521;
      const v1757 = v1047[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
      const v1758 = v1757[stdlib.checkedBigNumberify('./indexBridge2.rsh:75:44:application', stdlib.UInt_max, '0')];
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
export async function adminSaveNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for adminSaveNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for adminSaveNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _adminSaveNFT3(ctcTop, interact);}
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
    impure: [`IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `adminSaveNFT()byte`, `claimNFT()byte`, `lockNFT()byte`],
    pure: [`Bridger_v()address`, `Creator_v()address`, `balance_NFT_v()uint64`, `balance_v()uint64`, `lockedNFT_v()byte`, `saved_v(address)uint64`],
    sigs: [`Bridger_v()address`, `Creator_v()address`, `IERC721Receiver(address,address,uint64,byte[4])byte[4]`, `adminSaveNFT()byte`, `balance_NFT_v()uint64`, `balance_v()uint64`, `claimNFT()byte`, `lockNFT()byte`, `lockedNFT_v()byte`, `saved_v(address)uint64`]
    },
  appApproval: `BiAVAAEDTAQICe713qkKnqKetAyS7uvnDOnrz/gP2dCEowvI1t6XBrnAzfsHrfj1lQimia/XAgL///////////8BQHqgjQYmAwEAAQEAIjUAMRhBBL4qZEkiWzUBIQVbNQIxGSMSQQAKMQAoIQavZkIEijYaABdJQQE4IjUEIzUGSSEHDEAAlUkhCAxAAFRJIQkMQAA0SSEKDEAAESEKEkQqNf8pNP9QJa9QQgF5IQkSRDYaATYaAlA2GgNQNhoEUDX/KDT/UEIBXSEIEkQ0ASQSRChkKWRQSTUDVwAgNQdCBClJIQsMQAAgIQsSRDQBJBJEIjYaAYgEN0k1/yNbNP8iVU0WNQdCBAIhBxJEKjX/gAEDNP9QJa9QQgEKSSEMDEAAU0khDQxAADNJIQ4MQAATIQ4SRCo1/4ABAjT/UCWvUEIA4iENEkQ0ASQSRChkKWRQSTUDV0ggNQdCA64hDBJENAEkEkQoZClkUEk1A1eTCDUHQgOVSSEPDEAAGSEPEkQ0ASQSRChkKWRQSTUDV3oINQdCA3WB/fCFPRJENAEkEkQoZClkUEk1A1doATUHQgNZNhoCFzUENhoDNhoBF0khEAxAAjFJJAxAAFkkEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/4AEp2XEtLAyBiERD0Q0/zEAEkQ0/zQDVyAgNAMhEls0A1dIIDQDV2gBFzIGNANXaRE0AyETW0ICSEgkNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/VyAgNf4hEls1/VdIIDX8V2gBFzX7V2kRNfohE1s1+VeCETX4gZMBWzX3STUFNfaABGBWMtc09lCwMgYhEQxENPYiVUkhEAxAANZJJAxAAFIkEkQjNP2IArYxADT+EkQ0+xREMQAogAkBAAAAAAAAAAFmgAkAAAAAAAAEUAGwKTUHNP80/jT9NPwjMgY09yMIFjT4VwgIUDT4VxABUDT5QgGDSDT3FjT4VwgIUDT4VxABUDX1MQA0/hJENPtENPVXABFJNfQiW0k18yINRLEisgEjshIhBLIQMQCyFDT9shGzMQAogAkBAAAAAAAAAABmgAkAAAAAAAAD0QGwKTUHNP80/jT9NPwiMgY08yMJFjT0VwgIUDT0VxABUDT5QgEFSSMMQABRSCM0/YgB4jEANP8SRCI0/IgBr0k19SNbNPUiVU0iEkSACQAAAAAAAANDAbApNQc0/zT+NP00/DT7MgY09yMIFjT4VwgIUDT4VxABUDT5QgCuSIAMAAAAAAAAAr50cnVlsIAEdHJ1ZTUHNP80/jT9NPw0+zIGNPcWNPhXCAhQNPhXEAFQNPlCAHYiEkQhFIgBQCI0ARJENARJIhJMNAISEURJNQVJVwAgNf+BIFs1/oAE2emxyjT/UDT+FlCwgRGvSTX9VwARNfwhFIgBBLEisgEishIhBLIQMgqyFDT+shGzMQA0/zT+NP8jMgYhBa80/FcICFA0/FcQAVAiQgAANf81/jX9Nfw1+zX6Nfk1+DT+VwARSTX3Ils19jT4NPlQNPoWUDT7UDT8FlEHCFA0/lA0/xZQNPdQNPYWUChLAVcAf2cpSwFXfxxnSCQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCMxNxJEIjUBIjUCQv+vSTEYYUAABUghBq+JKGKJNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
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
                "name": "v502",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v503",
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
                "name": "v502",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v503",
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
                    "name": "_IERC721Receiver0_72",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_adminSaveNFT0_72",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_72",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_72",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v640",
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
    "name": "_reach_oe_v1104",
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
    "name": "_reach_oe_v702",
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
    "name": "_reach_oe_v835",
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
    "name": "_reach_oe_v977",
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
                    "name": "_IERC721Receiver0_72",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_adminSaveNFT0_72",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_claimNFT0_72",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_lockNFT0_72",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T12",
                "name": "v640",
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
        "name": "v1766",
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
  Bytecode: `0x608060405260405162002a5438038062002a5483398101604081905262000026916200057c565b600080554360035562000038620002f9565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a18051600090819052815160209081018290528251604090810183905283518285018051919091528185018051949094528051518301518451909301929092529051518101519151911515910152620000ef3415600d62000184565b620000f962000354565b8051339052602080840180515183516001600160a01b0391821690840152815183015184519082166040918201529151518385018051919092169052805160019084015251439082015290830151908301516200015a9190600090620001ae565b602082018051606001919091525160006080909101526200017b8162000231565b5050506200078d565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001b862000386565b60005b60018110156200020e57848160018110620001da57620001da620005f1565b6020020151828260018110620001f457620001f4620005f1565b602002015280620002058162000607565b915050620001bb565b5081818460018110620002255762000225620005f1565b60200201529392505050565b6200023b620003d3565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301511515608080870191909152845182015160a08701528451015160c086015283518101515160e086015292519092015151516101008401526003600055436001559051620002ce918391016200067e565b60405160208183030381529060405260029080519060200190620002f49291906200044d565b505050565b6040805160c081019091526000606082018181526080830182905260a08301919091528152602081016200032c62000386565b815260408051606081018252600080825260208281018290529282015291015290565b905290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016200034f620004dc565b60405180602001604052806001905b620003bc604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620003955790505090565b604080516101208101825260008082526020820181905291810182905260608101829052608081019190915260a081016200040d62000386565b81526020016000815260200162000440604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b8280546200045b9062000750565b90600052602060002090601f0160209004810192826200047f5760008555620004ca565b82601f106200049a57805160ff1916838001178555620004ca565b82800160010185558215620004ca579182015b82811115620004ca578251825591602001919060010190620004ad565b50620004d892915062000511565b5090565b6040518060a0016040528060006001600160a01b03168152602001600015158152602001600081526020016200044062000386565b5b80821115620004d8576000815560010162000512565b604080519081016001600160401b03811182821017156200055957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200057757600080fd5b919050565b600081830360608112156200059057600080fd5b6200059a62000528565b835181526040601f1983011215620005b157600080fd5b620005bb62000528565b9150620005cb602085016200055f565b8252620005db604085016200055f565b6020830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200062a57634e487b7160e01b600052601160045260246000fd5b5060010190565b8060005b600181101562000678576200066184835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010162000635565b50505050565b81516001600160a01b031681526020808301516101a0830191620006ac908401826001600160a01b03169052565b506040830151620006c860408401826001600160a01b03169052565b506060830151620006e460608401826001600160a01b03169052565b506080830151620006f9608084018215159052565b5060a08301516200070e60a084018262000631565b5060c08301516101008381019190915260e084015180516101208501526020810151610140850152604001511515610160840152909201516101809091015290565b600181811c908216806200076557607f821691505b602082108114156200078757634e487b7160e01b600052602260045260246000fd5b50919050565b6122b7806200079d6000396000f3fe6080604052600436106100eb5760003560e01c80638323075711610084578063bee2660911610056578063bee2660914610251578063d2b339bd14610259578063d76a47691461026e578063e43ffb9f1461028357005b806383230757146101fe578063a1c6864014610213578063ab53f2c61461021b578063ae53e2851461023e57005b8063672756ad116100bd578063672756ad1461019257806369e13bd7146101aa57806373b4522c146101d6578063819938fc146101e957005b80631e93b0f1146100f45780633894aea5146101185780633a3dbe72146101455780633bc5b7bf1461016557005b366100f257005b005b34801561010057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561012457600080fd5b5061012d610298565b6040516001600160a01b03909116815260200161010f565b34801561015157600080fd5b50610105610160366004611a79565b61035b565b34801561017157600080fd5b50610185610180366004611a79565b610459565b60405161010f9190611aac565b61019a610485565b604051901515815260200161010f565b6101bd6101b8366004611c0a565b6104b5565b60405190516001600160e01b031916815260200161010f565b6100f26101e4366004611c5c565b61052c565b3480156101f557600080fd5b5061012d610550565b34801561020a57600080fd5b50600154610105565b61019a610613565b34801561022757600080fd5b50610230610643565b60405161010f929190611ca0565b6100f261024c366004611cda565b6106e0565b61019a610700565b34801561026557600080fd5b50610105610726565b34801561027a57600080fd5b5061019a6107ea565b34801561028f57600080fd5b506101056108ad565b60006003600054141561034c576000600280546102b490611ced565b80601f01602080910402602001604051908101604052809291908181526020018280546102e090611ced565b801561032d5780601f106103025761010080835404028352916020019161032d565b820191906000526020600020905b81548152906001019060200180831161031057829003601f168201915b50505050508060200190518101906103459190611e07565b5192915050565b6103586000600861096c565b90565b6000600360005414156104485760006002805461037790611ced565b80601f01602080910402602001604051908101604052809291908181526020018280546103a390611ced565b80156103f05780601f106103c5576101008083540402835291602001916103f0565b820191906000526020600020905b8154815290600101906020018083116103d357829003601f168201915b50505050508060200190518101906104089190611e07565b9050600161041584610992565b51600181111561042757610427611a96565b14610433576000610441565b61043c83610992565b604001515b9392505050565b6104546000600c61096c565b919050565b604080516060810182526000808252602082018190529181019190915261047f82610992565b92915050565b600061048f61171a565b602081015151600290526104a1611739565b6104ab8282610a64565b6040015192915050565b6040805160208101909152600081526104cc61171a565b6020818101805151600090528051518201516001600160a01b038981169091528151518301519088169083015280515182015160400186905251510151606001839052610517611739565b6105218282610a64565b519695505050505050565b610534611739565b61054c61054636849003840184611ec2565b8261120a565b5050565b6000600360005414156106075760006002805461056c90611ced565b80601f016020809104026020016040519081016040528092919081815260200182805461059890611ced565b80156105e55780601f106105ba576101008083540402835291602001916105e5565b820191906000526020600020905b8154815290600101906020018083116105c857829003601f168201915b50505050508060200190518101906105fd9190611e07565b6060015192915050565b6103586000600761096c565b600061061d61171a565b6020810151516001905261062f611739565b6106398282610a64565b6020015192915050565b60006060600054600280805461065890611ced565b80601f016020809104026020016040519081016040528092919081815260200182805461068490611ced565b80156106d15780601f106106a6576101008083540402835291602001916106d1565b820191906000526020600020905b8154815290600101906020018083116106b457829003601f168201915b50505050509050915091509091565b6106e8611739565b61054c6106fa36849003840184611f18565b82610a64565b600061070a61171a565b6020810151516003905261071c611739565b6105fd8282610a64565b6000600360005414156107de5760006002805461074290611ced565b80601f016020809104026020016040519081016040528092919081815260200182805461076e90611ced565b80156107bb5780601f10610790576101008083540402835291602001916107bb565b820191906000526020600020905b81548152906001019060200180831161079e57829003601f168201915b50505050508060200190518101906107d39190611e07565b610100015192915050565b6103586000600961096c565b6000600360005414156108a15760006002805461080690611ced565b80601f016020809104026020016040519081016040528092919081815260200182805461083290611ced565b801561087f5780601f106108545761010080835404028352916020019161087f565b820191906000526020600020905b81548152906001019060200180831161086257829003601f168201915b50505050508060200190518101906108979190611e07565b6080015192915050565b6103586000600b61096c565b600060036000541415610964576000600280546108c990611ced565b80601f01602080910402602001604051908101604052809291908181526020018280546108f590611ced565b80156109425780601f1061091757610100808354040283529160200191610942565b820191906000526020600020905b81548152906001019060200180831161092557829003601f168201915b505050505080602001905181019061095a9190611e07565b60c0015192915050565b6103586000600a5b8161054c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff1660018111156109de576109de611a96565b1415610a55576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610a1f57610a1f611a96565b6001811115610a3057610a30611a96565b81528154610100900460ff161515602082015260019091015460409091015292915050565b60008082526020820152919050565b610a74600360005414601d61096c565b8151610a8f901580610a8857508251600154145b601e61096c565b600080805560028054610aa190611ced565b80601f0160208091040260200160405190810160405280929190818152602001828054610acd90611ced565b8015610b1a5780601f10610aef57610100808354040283529160200191610b1a565b820191906000526020600020905b815481529060010190602001808311610afd57829003601f168201915b5050505050806020019051810190610b329190611e07565b9050610b3c61176b565b610b4b6000194310601f61096c565b7f10274362ae12430bf790d953f6db461dd3740ec137ea015d7042f3b81bd489ac3385604051610b7c929190612013565b60405180910390a16000602085015151516003811115610b9e57610b9e611a96565b1415610ce357610bb03415600e61096c565b61010082015181515260e08201805160209081015183519091015251604090810151825190151590820152820151610bf690610bef90339060006113d4565b600f61096c565b60208181018051637472756560e01b90525160405190516001600160e01b03191681527f16de6d316dada81782406a3d8eb09d04910e89745282c79c6c3d025efdbbe5d5910160405180910390a160208101518352610c53611833565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606086015182850180519190941690526080860151835190151592019190915290514391015260a08301518251610cbc91906000906113ea565b6020820180516060019190915260c0840151905160800152610cdd8161145e565b50611204565b6001602085015151516003811115610cfd57610cfd611a96565b1415610e7c57610d0f3415601061096c565b6001826101000151610d2191906120d8565b604080830180519290925260e08401805160209081015184519091015251810151915191151591810191909152820151610d6990610d6290339060016113d4565b601161096c565b8151610d81906001600160a01b03163314601261096c565b610dcd60006001610d958560600151610992565b516001811115610da757610da7611a96565b14610db3576000610dc5565b610dc08460600151610992565b604001515b14601361096c565b604051600181527fdc71de834bbe773a1e85102cd451ba2eefead69ace89a1e90ffd05813c020b809060200160405180910390a160016020840152610e10611833565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608601518285018051919094169052608086015183519015159201919091529051439082015260a084015190830151610cbc91906000906113ea565b6002602085015151516003811115610e9657610e96611a96565b141561107157610ea83415601461096c565b6101008201516060820180519190915260e08301805160209081015183519091015251604090810151825190151591015260a08301519051610eed91906000906113ea565b8160800181905250610f0f610f0833846040015160006113d4565b601561096c565b610f3282602001516001600160a01b0316336001600160a01b031614601661096c565b610f418260800151601761096c565b60808101515151610f55901515601861096c565b60808101515151610f6890600190612106565b60a08201805191909152608082018051516020908101518351909101525151604090810151915191151591810191909152820151610fa890336001611520565b336000908152600460209081526040808320805460ff19166001908117825590810193909355519182527fecd15dfe9c9e4bb3e024409ab194cb4122d74c52b91fb4eeff33af5a65d22aa0910160405180910390a16001604084015261100c611833565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519084169082015260608601518285018051919094169052825160009201829052915143920191909152608083015160a0840151610cbc92906113ea565b600360208501515151600381111561108b5761108b611a96565b14156112045761109d3415601961096c565b60018261010001516110af91906120d8565b60c0820180519190915260e083018051602090810151835190910152516040908101519151911515918101919091528201516110f9906110f290339060016113d4565b601a61096c565b61111c82602001516001600160a01b0316336001600160a01b031614601b61096c565b611139826080015161112f576001611132565b60005b601c61096c565b33600090815260046020908152604091829020805460ff19166001908117825590810181905591519182527fd53c19e96a7200d82b03a4396049fd62f7532c54dc54b3cf56048b65daf6cb47910160405180910390a16001606084015261119e611833565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190841690820152606086015182850180519190941690528251600192019190915290514391015260a083015160c0830151610cbc91906000906113ea565b50505050565b61121a600360005414602261096c565b815161123590158061122e57508251600154145b602361096c565b60008080556002805461124790611ced565b80601f016020809104026020016040519081016040528092919081815260200182805461127390611ced565b80156112c05780601f10611295576101008083540402835291602001916112c0565b820191906000526020600020905b8154815290600101906020018083116112a357829003601f168201915b50505050508060200190518101906112d89190611e07565b90506112ea600019431015602461096c565b60408051338152845160208083019190915285015115158183015290517f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c69181900360600190a161133d3415602061096c565b8051611355906001600160a01b03163314602161096c565b61135d611833565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451908416908201526060808601518386018051919095169052608080870151855190151594019390935283514392019190915260a085015183519091015260c0840151915101526112048161145e565b60006113e283853085611534565b949350505050565b6113f2611863565b60005b600181101561143e57848160018110611410576114106120f0565b6020020151828260018110611427576114276120f0565b6020020152806114368161211d565b9150506113f5565b5081818460018110611452576114526120f0565b60200201529392505050565b6114666118ae565b8151516001600160a01b0390811682528251602090810151821681840152835160409081015183168185015281850180515190931660608086019190915283518301511515608080870191909152845182015160a08701528451015160c086015283518101515160e0860152925190920151515161010084015260036000554360015590516114f79183910161217c565b6040516020818303038152906040526002908051906020019061151b929190611925565b505050565b61152b83838361160e565b61151b57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161159b91612248565b60006040518083038185875af1925050503d80600081146115d8576040519150601f19603f3d011682016040523d82523d6000602084013e6115dd565b606091505b50915091506115ee828260016116df565b50808060200190518101906116039190612264565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161166d91612248565b60006040518083038185875af1925050503d80600081146116aa576040519150601f19603f3d011682016040523d82523d6000602084013e6116af565b606091505b50915091506116c0828260026116df565b50808060200190518101906116d59190612264565b9695505050505050565b606083156116ee575081610441565b8251156116fe5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610989565b6040518060400160405280600081526020016117346119a9565b905290565b6040805160a0810190915260006080820190815281905b81526000602082018190526040820181905260609091015290565b6040805161014081018252600060e082018181526101008301829052610120830182905282528251602081810190945290815290918201908152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291019081526020016117f0611863565b8152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291015290565b6040805160a0810182526000918101828152606082018390526080820192909252908152602081016117346119bc565b60405180602001604052806001905b611898604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816118725790505090565b604080516101208101825260008082526020820181905291810182905260608101829052608081019190915260a081016118e6611863565b815260200160008152602001611918604051806060016040528060008152602001600081526020016000151581525090565b8152602001600081525090565b82805461193190611ced565b90600052602060002090601f0160209004810192826119535760008555611999565b82601f1061196c57805160ff1916838001178555611999565b82800160010185558215611999579182015b8281111561199957825182559160200191906001019061197e565b506119a59291506119ef565b5090565b6040518060200160405280611734611a04565b6040518060a0016040528060006001600160a01b0316815260200160001515815260200160008152602001611918611863565b5b808211156119a557600081556001016119f0565b6040805160a081019091528060008152602001611750604051806080016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200161173460408051602081019091526000815290565b6001600160a01b0381168114611a7657600080fd5b50565b600060208284031215611a8b57600080fd5b813561044181611a61565b634e487b7160e01b600052602160045260246000fd5b8151606082019060028110611ac357611ac3611a96565b808352506020830151151560208301526040830151604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715611b1c57611b1c611ae3565b60405290565b604051610120810167ffffffffffffffff81118282101715611b1c57611b1c611ae3565b6040805190810167ffffffffffffffff81118282101715611b1c57611b1c611ae3565b60405160a0810167ffffffffffffffff81118282101715611b1c57611b1c611ae3565b6040516080810167ffffffffffffffff81118282101715611b1c57611b1c611ae3565b600060208284031215611bc157600080fd5b6040516020810181811067ffffffffffffffff82111715611be457611be4611ae3565b60405290508082356001600160e01b031981168114611c0257600080fd5b905292915050565b60008060008060808587031215611c2057600080fd5b8435611c2b81611a61565b93506020850135611c3b81611a61565b925060408501359150611c518660608701611baf565b905092959194509250565b600060408284031215611c6e57600080fd5b50919050565b60005b83811015611c8f578181015183820152602001611c77565b838111156112045750506000910152565b8281526040602082015260008251806040840152611cc5816060850160208701611c74565b601f01601f1916919091016060019392505050565b60006101208284031215611c6e57600080fd5b600181811c90821680611d0157607f821691505b60208210811415611c6e57634e487b7160e01b600052602260045260246000fd5b805161045481611a61565b8015158114611a7657600080fd5b805161045481611d2d565b600060608284031215611d5857600080fd5b6040516060810181811067ffffffffffffffff82111715611d7b57611d7b611ae3565b806040525080915082518152602083015160208201526040830151611d9f81611d2d565b6040919091015292915050565b600082601f830112611dbd57600080fd5b611dc5611af9565b80606080850186811115611dd857600080fd5b855b81811015611dfb57611dec8882611d46565b85526020909401938201611dda565b50919695505050505050565b60006101a08284031215611e1a57600080fd5b611e22611b22565b611e2b83611d22565b8152611e3960208401611d22565b6020820152611e4a60408401611d22565b6040820152611e5b60608401611d22565b6060820152611e6c60808401611d3b565b6080820152611e7e8460a08501611dac565b60a08201526101008084015160c0830152611e9d856101208601611d46565b60e083015261018084015181830152508091505092915050565b803561045481611d2d565b600060408284031215611ed457600080fd5b6040516040810181811067ffffffffffffffff82111715611ef757611ef7611ae3565b604052823581526020830135611f0c81611d2d565b60208201529392505050565b6000818303610120811215611f2c57600080fd5b611f34611b46565b8335815261010080601f1984011215611f4c57600080fd5b611f54611af9565b611f5c611b69565b602087013560048110611f6e57600080fd5b81526080603f1986011215611f8257600080fd5b611f8a611b8c565b94506040870135611f9a81611a61565b85526060870135611faa81611a61565b602086015260808701356040860152611fc68860a08901611baf565b6060860152846020820152611fdd60c08801611eb7565b6040820152611fee60e08801611eb7565b6060820152611ffe838801611eb7565b60808201528152602083015250949350505050565b6001600160a01b038381168252825160208084019190915283015151805161014084019291906004811061204957612049611a96565b806040860152506020810151828151166060860152826020820151166080860152604081015160a086015263ffffffff60e01b6060820151511660c0860152506040810151915061209e60e085018315159052565b60608101511515610100850152608001511515610120909301929092529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156120eb576120eb6120c2565b500190565b634e487b7160e01b600052603260045260246000fd5b600082821015612118576121186120c2565b500390565b6000600019821415612131576121316120c2565b5060010190565b8060005b60018110156112045761216684835180518252602080820151908301526040908101511515910152565b606093909301926020919091019060010161213c565b81516001600160a01b031681526020808301516101a08301916121a9908401826001600160a01b03169052565b5060408301516121c460408401826001600160a01b03169052565b5060608301516121df60608401826001600160a01b03169052565b5060808301516121f3608084018215159052565b5060a083015161220660a0840182612138565b5060c08301516101008381019190915260e084015180516101208501526020810151610140850152604001511515610160840152909201516101809091015290565b6000825161225a818460208701611c74565b9190910192915050565b60006020828403121561227657600080fd5b815161044181611d2d56fea2646970667358221220c46ca49f62ab3e6974fae304e6abc60c3c3f5334b6e31d8d0211b8eef3c1679564736f6c634300080c0033`,
  BytecodeLen: 10836,
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
  2: {
    at: './indexBridge2.rsh:162:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './indexBridge2.rsh:67:57:after expr stmt semicolon',
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
