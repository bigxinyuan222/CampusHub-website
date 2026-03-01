import { get } from "./http";

// API 接口地址
const apiUrls = {
    // 活动相关
    getActivityList: "/api/v1/activity/lists",
    getActivityDetail: "/api/v1/activity",
    getActivityCategoryList: "/api/v1/activity/categories",
    searchActivity: "/api/v1/activity/search",
};

// 类型定义
export interface Activity {
    id: number;
    title: string;
    coverUrl: string; // 活动封面图片URL
    coverType: number; // 封面类型，1为图片，2为视频
    content: string;
    categoryId: number;
    categoryName: string;
    contactPhone: string;
    registerStartTime: number;
    registerEndTime: number;
    activityStartTime: number;
    activityEndTime: number;
    location: string;
    addressDetail: string;
    longitude: number;
    latitude: number;
    maxParticipants: number;
    currentParticipants: number;
    status: number; // 活动状态，1为未开始，2为进行中，3为已结束
    createdAt: string;
    tagIds: number[];
    tags: {
        id: number;
        name: string;
        color: string;
    }[];
}

export interface ActivityListResponse {
    total: number;
    items: Activity[];
    page: number;
    pageSize: number;
}

// 接口调用函数
export const api = {
    // 获取活动列表
    getActivityList: (params: { page: number; pageSize: number; categoryId?: number; status?: number }) => {
        return get<ActivityListResponse>(
            `${apiUrls.getActivityList}?page=${params.page}&pageSize=${params.pageSize}&categoryId=${params.categoryId || ''}&status=${params.status || ''}`
        );
    },

    // 获取活动详情
    getActivityDetail: (id: string) => {
        return get<Activity>(`${apiUrls.getActivityDetail}/${id}`);
    },

    // 搜索活动
    searchActivity: (params: { keyword: string; page: number; pageSize: number }) => {
        return get<ActivityListResponse>(
            `${apiUrls.searchActivity}?keyword=${encodeURIComponent(params.keyword)}&page=${params.page}&pageSize=${params.pageSize}`
        );
    },

    // 获取活动分类列表
    getActivityCategoryList: () => {
        return get<any>(apiUrls.getActivityCategoryList);
    }
};