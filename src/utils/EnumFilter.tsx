enum Filter {
    AUCTION = "AUCTION",
    END = "END",
    DONE = "DONE",
    CANCLE = "CANCLE"
};

enum BidFilter {
    BIDDING = "BIDDING",
    DONE = "DONE",
    FAIL = "FAIL",
    SUCCESS = "SUCCESS"
};

export const FilterToEnum = (serverValue: string) => {
    switch (serverValue) {
        case "경매중":
            return Filter.AUCTION;
        case "경매종료":
            return Filter.END;
        case "교환완료":
            return Filter.DONE;
        case "입찰실패":
            return Filter.CANCLE;
        default:
            return null;
    }
};

export const BidFilterToEnum = (serverValue: string) => {
    switch (serverValue) {
        case "입찰중":
            return BidFilter.BIDDING;
        case "교환완료":
            return BidFilter.DONE;
        case "입찰실패":
            return BidFilter.FAIL;
        case "입찰성공":
            return BidFilter.SUCCESS;
        default:
            return null;
    }
};