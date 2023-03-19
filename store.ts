import { reactive } from 'vue'
import {UserData} from "@/class/implement/UserData";
import {WrapperData} from "@/class/implement/WrapperData";
import {FileListData} from "@/class/implement/FileListData";
import {PostListWrapper} from "@/class/implement/PostListWrapper";
import {ExploredDirectoryWrapper} from "@/class/implement/ExploredDirectoryWrapper";
import {FileNodeWrapper} from "@/class/implement/FileNodeWrapper";


export const userInfoStore = reactive<UserData>({
    name: 'taechnique',
    blog: 'https://taech.io',
    company: 'Herit Corporation',
    position: 'Backend Server Developer',
    profile_image: 'https://avatars.githubusercontent.com/u/65699391?v=4'
})

export const fileListStore = reactive<FileListData>({
    file_list: []
})

export const postListStore = reactive<PostListWrapper>({
    latest_index: 0,
    postDataList: []
})

export const postCallStore = reactive({
    is_calling: true
})

export const searchInputStore = reactive({
    input_text: '',
    result_list: []
})

export const spinnerStore = reactive({
    isOn: false
})

export const mobileNaviStore = reactive({
    isActive: false
})

export const menuClickableStore = reactive({
    isNotClickable: false
})


export const darkModeStore = reactive({
    isDarkMode: true
})

export const explorerHeaderStore = reactive({
    isActive: false
})

export const postMapStore = reactive({
    map: new Map()
})
