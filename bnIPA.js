var BN_IPA = {
  'অ':'ɔ', 'আ':'a', 'ই':'i', 'ঈ':'iː', 'উ':'u', 'ঊ':'uː',
  'ঋ':'ri', 'এ':'e', 'ঐ':'oj', 'ও':'o', 'ঔ':'ow',
  'া':'a', 'ি':'i', 'ী':'iː', 'ু':'u', 'ূ':'uː',
  'ৃ':'ri', 'ে':'e', 'ৈ':'oj', 'ো':'o', 'ৌ':'ow',
  'ক':'k',  'খ':'kʰ',  'গ':'g',  'ঘ':'ɡʰ',  'ঙ':'ŋ',
  'চ':'tʃ', 'ছ':'tʃʰ', 'জ':'dʒ', 'ঝ':'dʒʰ', 'ঞ':'n',
  'ট':'ʈ',  'ঠ':'ʈʰ',  'ড':'ɖ',  'ঢ':'ɖʰ',  'ণ':'ɳ',
  'ত':'t̪', 'থ':'t̪ʰ', 'দ':'d̪',  'ধ':'d̪ʰ',  'ন':'n',
  'প':'p',  'ফ':'pʰ',  'ব':'b',  'ভ':'bʰ', 'ম':'m',
  'য':'dz', 'র':'r', 'ল':'l',
  'শ':'ʃ', 'ষ':'ʂ', 'স':'s', 'হ':'ɦ',
  'ড়':'ɾ', 'ঢ়':'ɽʱ', 'য়':'e̯',
  'ৎ':'t̪', 'ং':'ŋ', 'ঃ':'h','ঁ':'◌̃', '্':'',
  '\'':'ɔ', '@':'æ', 'ফ়':'f', '্য':'j', '্যা':'æ'
};

function bnIPA(bengali){
  var ipa=""
  for (var i = 0, len = bengali.length; i < len; i++) {
    b = bengali[i];
    if(b==='ফ' && bengali[i+1]==='়'){
      i++;
      b = 'ফ়';
    }
    if(b==='্' && bengali[i+1]==='য'){
      i++;
      b = '্য';
      if(bengali[i+1]==='া'){
        i++; b = '্যা';
      }
    }
    if (b in BN_IPA) p = BN_IPA[b];
    else p = b;
    ipa+=p;
  }
  return ipa;
}

function bnIPARef(){
  var ref="";
  for (var bn in BN_IPA){
    ipa = BN_IPA[bn]
    ref+="<span class='ref'><span class='bn'>"+bn+"</span><span class='ipa'>"+ipa+"</span></span> ";
  }
  return ref;
}