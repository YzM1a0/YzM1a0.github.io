const getPublicationInfo = (types) => {
    //static/miuiplus.webp
    const pub_list = [
        {
            author: "Yongzhu Miao, Jintao Tang, Shasha Li and Ting Wang",
            title: 'MPT4LM: Multi-modal Prompt Tuning Makes Pre-trained Large Language Models Better Vision-Language Learners',
            venues: '',
            abbr: 'ECAI 2024',
            ccf: 'CCF-B',
            type: 'Conference Paper',
            pdf: '',
            code: 'https://github.com/YzM1a0/MPT4LM',
            page: '',
            slide: '',
            comment: ''
        },
        {
            author: "Yongzhu Miao, Shasha Li, Jintao Tang and Ting Wang",
            title: 'MuDPT: Multi-modal Deep-symphysis Prompt Tuning for Large Pre-trained Vision-Language Models',
            venues: '',
            abbr: 'ICME 2023',
            ccf: 'CCF-B',
            type: 'Conference Paper',
            pdf: 'https://ieeexplore.ieee.org/document/10219840',
            code: 'https://github.com/YzM1a0/MuDPT',
            page: '',
            slide: '',
            comment: ''
        },
    ]
    if (types == "all"){
        return pub_list
    }
    let new_pub_list = []
    for (const item of pub_list){
        if(item.type == types){
            new_pub_list.push(item)
        }
    }
    
    return new_pub_list
}

export default getPublicationInfo;