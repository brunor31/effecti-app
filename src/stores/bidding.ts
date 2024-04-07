import { defineStore } from 'pinia'
import type { Bidding } from '@/types/Bidding'
import { ref,computed } from 'vue'
import BiddingService from '@/services/biddingService'

export const useBiddingStore = defineStore('bidding', () => {

    const biddings = ref<Bidding[]>([]);

    const getBiddings = computed(() => {
        return biddings.value;
    })

    const requestBiddings = async () => {
        try {
            const response = await BiddingService.getBiddings();
            biddings.value = response;
        } catch (error) {
            throw error;
        }
    }

    return { getBiddings, requestBiddings }
    
});

