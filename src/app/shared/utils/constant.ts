export const defaultRequestList = {
  listTextSearch: [],
  code: null,
  page: 0,
  name: null,
  size: 10, // -: desc | +: asc,
};
export const DEFAULT_REQUEST_LIST = {
  listTextSearch: [],
  code: null,
  page: 1,
  name: null,
  currentPage: 0,
  pageSize: 10,
  sort: 'created_Date,DESC', // -: desc | +: asc,
};



export const DATE_UTC_FORMAT = 'yyyy-MM-ddTHH:mm:ss';
export const DATE_UTC_FORMAT_V2 = 'yyyy/MM/dd HH:mm:ss';
export const DATE_EXCEL = 'YYYYMMDD';
export const startDate = 'startDate'
export const endDate = 'endDate'
export const pageSizeOption = [10, 20, 50, 100]
export const PAGE_SIZE_OPTION = [10, 20, 50, 100]

export const REGEX = {
  MOBILE: /(^[+]?(|0-9)+([0-9]){6,}$)/, //Số điện thoại ít nhất 6 số
  VN_PHONE_NUMBER: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
  MULTIPLE_EMAIL: /^([a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}){1,2}(\]?)(\s*,\s*|\s*$))*$/,
  EMAIL: /^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z]{2,}){1,2}$/,
  $NOT_SPECIAL_CHARACTERS: /^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆẾỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴýÝỶỸÝửữựỳỵỷỹ -]{0,1000}$/,
  NOT_SPECIAL_CHARACTERS: /^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆẾỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴýÝỶỸÝửữựỳỵỷỹ -]{0,1000}$/,
  VALIDATE_CODE: /^[a-zA-Z0-9 _-]+$/,
  VALIDATE_CODE_NOT_SPACE: /^[a-zA-Z0-9_]+$/,
  VALIDATE_CODE_NOT_SPACE_AND: /^[a-zA-Z0-9_]+$/,
  VALIDATE_CODE_DEPARTMENT: /^[a-zA-Z&0-9_-]+$/,
  VALIDATE_CODE_DOT: /^[a-zA-Z&0-9.]+$/,
  ONLY_NUMBER: /^[0-9]*$/,
  TEXT_AND_SPACE: /^[A-Za-z\s]+$/,
  YEAR: /^([1][9][0-9][0-9]|[2][0-9][0-9][0-9]|[3][0][0][0])$/,
  CUSTOM_EMAIL: /^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/,
  ONLY_NUMBER_AND_PLUS: /^[0-9+]*$/,
  CUSTOM_PHONE: /^[+]?[0-9]{0,12}$/,
  PERCENTAGE: /^[1-9](?:,[0-9]){0,2}$|^[1-9]\d(?:,[0-9]\d){0,2}$|^[1-9](?:,[0-9]\d){0,2}$|^[1-9]\d(?:,[0-9]){0,2}$|^[1-9]\d{0,2}(?:,[0-9]\d){0,2}$|^[1-9]\d{0,2}(?:,[0-9]){0,2}$/,
  NUMBER_AND_COMMA: /^[0-9,]+$/,
  LIMIT: /\b([a-zA-Z]){1,2}[0-9]{1,3}\b/,
  NUMBER_AND_DOTS: /^[0-9.]+$/,
  NUMBER_INTEGER: /^[1-9]\d*$/,
  NUMBER_INTEGER_LIMIT_ONE_HUNDRED: /^([1-9]?\d|100)$/,
  FLOAT_NUMBER_02: /^\d+(\.\d{1,2})?$/,
  PERCENT_FLOAT_NUMBER_01: /^\d+(\.\d{1,2})?$/
};


export const TOOLTIP = {
  PLACEMENT_TOP: 'top'
};

export const EMPLOYEE = {
  EMPLOYEE_STATUS: {
    QUIT_JOB: 37,
    DOING: 36,
  },
};
export const INSTALLATION = {
  INSTALLATION_STATUS: {
    NO: 1,
    YES: 2,
    FAIL: 3
  },
  INSTALLATION_CONNECT: {
    NO: "disconnect",
    YES: "connect"
  }
};


export const ALERT = {
  ALERT_STATUS: {
    WARNING: 'WARNING',
    CRITICAL: 'CRITICAL',
    ACTIVE: 'ACTIVE',
    ALERTING: 'ALERTING',
  },
  ALERT_SRC: {
    ELK: 'ELK',
    PROMETHEUS: 'Prometheus' || 'PROMETHEUS',
    AOM: 'AOM',
    SMS: 'SMS',
  }
}

export const COLUMNS = {
  INVENTORY: [
    {name: "STT", checked: true, index: 1, disabled: true},
  ],
  KPI_SERVICE_QUALITY: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Mã KPI", checked: true, index: 1, disabled: false},
    {name: "Tên KPI", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Đánh giá", checked: true, index: 1, disabled: false},
    {name: "Chu kỳ", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],

  KPI_DEPLOYMENT_EQUIPMENT: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Số lượng máy chủ không đạt KPI", checked: true, index: 1, disabled: false},
    {name: "Chu kỳ", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],

  PARTNER: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã đối tác", checked: true, index: 1, disabled: true},
    {name: "Tên đối tác", checked: true, index: 1, disabled: false},
    {name: "Mã số thuế/Số giấy phép kinh doanh", checked: true, index: 1, disabled: false},
    {name: "Nhóm đối tác", checked: true, index: 1, disabled: false},
    {name: "Đối tác ngành", checked: true, index: 1, disabled: false},
    {name: "Số hồ sơ", checked: true, index: 1, disabled: false},
    {name: "Tình trạng hợp tác", checked: true, index: 1, disabled: false},
    {name: "Tên viết tắt", checked: false, index: 1, disabled: false},
    {name: "Đầu mối liên hệ", checked: false, index: 1, disabled: false},
    {name: "Ngành kinh doanh chính", checked: false, index: 1, disabled: false},
    {name: "Người đại diện pháp luật", checked: false, index: 1, disabled: false},
    {name: "Năm bắt đầu kinh doanh", checked: false, index: 1, disabled: false},
    // {name: "Số giấy phép kinh doanh", checked: false, index: 1, disabled: false},
    {name: "Tỉnh/Thành phố", checked: false, index: 1, disabled: false},
    {name: "Quận/Huyện", checked: false, index: 1, disabled: false},
    {name: "Phường/Xã", checked: false, index: 1, disabled: false},
    {name: "Địa chỉ chi tiết", checked: false, index: 1, disabled: false},
    {name: "Số điện thoại", checked: false, index: 1, disabled: false},
    {name: "Email", checked: false, index: 1, disabled: false},
    {name: "Ghi chú", checked: false, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  PRODUCT: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã sản phẩm", checked: true, index: 1, disabled: true},
    {name: "Tên sản phẩm", checked: true, index: 1, disabled: false},
    {name: "Loại sản phẩm", checked: true, index: 1, disabled: false},
    {name: "Thương hiệu", checked: true, index: 1, disabled: false},
    {name: "Nhận định hình thức hợp tác", checked: true, index: 1, disabled: false},
    {name: "Phạm vi hợp tác", checked: false, index: 1, disabled: false},
    {name: "Mô tả sản phẩm", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  DEPARTMENT: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã đơn vị", checked: true, index: 1, disabled: true},
    {name: "Tên đơn vị", checked: true, index: 1, disabled: false},
    {name: "Tên đơn vị cha", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  ALERT: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Nguồn cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Tên cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "TT_ID", checked: true, index: 1, disabled: false},
    {name: "Thời gian bắt đầu", checked: true, index: 1, disabled: false},
    {name: "Thời gian tồn", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  ELK: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Tên cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Nội dung cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Thời gian", checked: true, index: 1, disabled: false},
    {name: "TG Tồn", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  PROMETHEUS: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên Dashboard", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Tên cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Giá trị", checked: true, index: 1, disabled: false},
    {name: "Nội dung cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Thời gian", checked: true, index: 1, disabled: false},
    {name: "TG Tồn", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  AOM: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Tên cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Nội dung cảnh báo", checked: true, index: 1, disabled: false},
    {name: "IP", checked: true, index: 1, disabled: false},
    {name: "Tên ứng dụng", checked: true, index: 1, disabled: false},
    {name: "Thời gian", checked: true, index: 1, disabled: false},
    {name: "TG tồn", checked: true, index: 1, disabled: false},
  ],
  USER: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã nhân viên", checked: true, index: 1, disabled: false},
    {name: "Tên nhân viên", checked: true, index: 1, disabled: true},
    {name: "Quyền", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: false}
  ],
  SETTINGS_CONFIG: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Job", checked: true, index: 1, disabled: false},
    {name: "Link_Dashboard", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: false}
  ],
  APPMANAGER: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Loại cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Tên cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Nội dung cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Người phụ trách", checked: true, index: 1, disabled: false},
    {name: "Thời gian", checked: true, index: 1, disabled: false},
    {name: "TG tồn", checked: true, index: 1, disabled: false},
  ],
  EMPLOYEE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã nhân viên", checked: true, index: 1, disabled: true},
    {name: "Tên nhân viên", checked: true, index: 1, disabled: false},
    {name: "Số điện thoại", checked: true, index: 1, disabled: false},
    {name: "Email", checked: true, index: 1, disabled: false},
    {name: "Tên đơn vị", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  PROFILE_PARTNER: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã hồ sơ", checked: true, index: 1, disabled: true},
    {name: "Tên hồ sơ", checked: true, index: 1, disabled: false},
    {name: "Tên văn bản bắt buộc", checked: true, index: 1, disabled: false},
    {name: "Tên văn bản", checked: true, index: 1, disabled: false},
    {name: "Ngày ký", checked: true, index: 1, disabled: false},
    {name: "Ngày hết hạn", checked: true, index: 1, disabled: false},
    {name: "Tình trạng hồ sơ", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  PARTNER_PROFILE_TABLE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: 'Mã hồ sơ', checked: true, index: 1, disabled: true},
    {name: 'Tên đối tác', checked: true, index: 1, disabled: false},
    {name: 'Tình trạng hồ sơ', checked: true, index: 1, disabled: false},
    {name: 'Trạng thái báo cáo kết quả hợp tác', checked: true, index: 1, disabled: false},
    {name: 'Trạng thái báo cáo doanh thu chi phí, tỷ suất lợi nhuận', checked: true, index: 1, disabled: false},
    {name: 'Tên sản phẩm', checked: true, index: 1, disabled: false},
    {name: 'Đơn vị', checked: true, index: 1, disabled: false},
    {name: 'Tên hồ sơ', checked: false, index: 1, disabled: false},
    {name: 'Đối tác ngành', checked: false, index: 1, disabled: false},
    {name: 'Tỷ lệ chia sẻ của VTS', checked: false, index: 1, disabled: false},
    {name: 'Tỷ lệ chia sẻ của đối tác', checked: false, index: 1, disabled: false},
    {name: 'Mục tiêu doanh thu', checked: false, index: 1, disabled: false},
    {name: 'Đơn vị chủ trì hợp tác', checked: false, index: 1, disabled: false},
    {name: 'Đơn vị chủ trì kinh doanh', checked: false, index: 1, disabled: false},
    {name: 'Đầu mối', checked: false, index: 1, disabled: false},
    {name: 'Đối tác làm gì', checked: false, index: 1, disabled: false},
    {name: 'VTS làm gì', checked: false, index: 1, disabled: false},
    {name: 'Hành động', checked: true, index: 1, disabled: true},
  ],
  REPORT_TABLE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên báo cáo", checked: true, index: 1, disabled: true},
    {name: "Mã hồ sơ", checked: false, index: 1, disabled: false},
    {name: "Tên hồ sơ", checked: false, index: 1, disabled: false},
    {name: "Tên đối tác", checked: true, index: 1, disabled: false},
    {name: "Trạng thái báo cáo kết quả hợp tác", checked: true, index: 1, disabled: false},
    {name: "Đơn vị", checked: true, index: 1, disabled: false},
    {name: "Loại báo cáo", checked: true, index: 1, disabled: false},
    {name: "Thời gian gửi báo cáo", checked: true, index: 1, disabled: false},
    {name: "Danh sách file", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  PERMISSION_TABLE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã nhóm quyền", checked: true, index: 2, disabled: true},
    {name: "Tên nhóm quyền", checked: true, index: 3, disabled: false},
    {name: "Số quyền", checked: true, index: 4, disabled: false},
    {name: "Trạng thái", checked: true, index: 5, disabled: false},
    {name: "Hành động", checked: true, index: 6, disabled: true},
  ],
  COST_REVENUE_TABLE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: 'Mã hồ sơ', checked: true, index: 1, disabled: true},
    {name: 'Tên hồ sơ', checked: true, index: 1, disabled: false},
    {name: 'Trạng thái báo cáo doanh thu chi phí tỷ suất lợi nhuận', checked: true, index: 1, disabled: false},
    {name: 'Tên đối tác', checked: true, index: 1, disabled: false},
    {name: 'Đơn vị', checked: true, index: 1, disabled: false},
    {name: 'Tên sản phẩm', checked: true, index: 1, disabled: false},
    {name: 'Loại báo cáo', checked: true, index: 1, disabled: false},
    {name: 'Doanh thu chia sẻ với đối tác theo kế hoạch', checked: false, index: 1, disabled: false},
    {name: 'Doanh thu thực hiện chia sẻ với đối tác', checked: false, index: 1, disabled: false},
    {name: 'Doanh thu sản phẩm/dịch vụ', checked: false, index: 1, disabled: false},
    {name: 'Lợi nhuận trước thuế/Doanh thu theo phương án hợp tác', checked: false, index: 1, disabled: false},
    {name: 'Lợi nhuận trước thuế/Doanh thu thực tế', checked: false, index: 1, disabled: false},
    {
      name: 'Tỷ lệ doanh thu chia sẻ thực tế/Doanh thu chia sẻ theo kế hoạch',
      checked: false,
      index: 1,
      disabled: false
    },
    {name: 'Tỷ lệ lợi nhuận trước thuế/kế hoạch', checked: false, index: 1, disabled: false},
    {name: 'Ngày tạo', checked: false, index: 1, disabled: false},
    {name: 'Hành động', checked: true, index: 1, disabled: true}
  ],
  INCIDENT_MANAGEMENT_TABLE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Mô tả lỗi", checked: true, index: 1, disabled: false},
    {name: "Nguyên nhân sơ bộ", checked: false, index: 1, disabled: false},
    {name: "Thời gian phát sinh", checked: true, index: 1, disabled: false},
    {name: "Thời gian kết thúc", checked: true, index: 1, disabled: false},
    {name: "Thời gian xử lý lỗi", checked: true, index: 1, disabled: false},
    {name: "Đơn vị chịu trách nhiệm", checked: false, index: 1, disabled: false},
    {name: "Nhân sự xử lý sự cố", checked: false, index: 1, disabled: false},
    {name: "Mức độ quan trọng của hệ thống", checked: false, index: 1, disabled: false},
    {name: "Kết luận", checked: false, index: 1, disabled: false},
    {name: "Mức độ sự cố", checked: false, index: 1, disabled: false},
    {name: "Phân loại sự cố", checked: false, index: 1, disabled: false},
    {name: "KPI thời gian xử lý lỗi", checked: false, index: 1, disabled: false},
    {name: "KPI đóng sự cố", checked: false, index: 1, disabled: false},
    {name: "Gửi cảnh báo", checked: false, index: 1, disabled: false},
    {name: "Lỗi gửi cảnh báo", checked: false, index: 1, disabled: false},
    {name: "Trạng thái sự cố", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  SMS: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Nguồn cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Loại cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Tên cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Nội dung", checked: true, index: 1, disabled: false},
    {name: "Thời gian", checked: true, index: 1, disabled: false},
    {name: "Thời gian tồn", checked: true, index: 1, disabled: false},
  ],
  SOAR: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Ticket_ID", checked: true, index: 1, disabled: false},
    {name: "Mức độ", checked: true, index: 1, disabled: false},
    {name: "Nội dung", checked: true, index: 1, disabled: false},
    {name: "Thời gian", checked: true, index: 1, disabled: false},
    {name: "Thời gian thực hiện còn lại", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: true},
    {name: "TT_ID", checked: true, index: 1, disabled: true},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  SYSTEM_MANAGEMENTS: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã hệ thống trên Jira", checked: false, index: 1, disabled: false},
    {name: "Tên hệ thống trên DCIM", checked: false, index: 1, disabled: false},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Loại hình triển khai", checked: false, index: 1, disabled: false},
    {name: "Đơn vị vận hành", checked: true, index: 1, disabled: false},
    {name: "Đơn vị sản phẩm", checked: true, index: 1, disabled: false},
    {name: "Mức độ quan trọng", checked: true, index: 1, disabled: false},
    {name: "Hạ tầng triển khai", checked: true, index: 1, disabled: false},
    {name: "Phân loại khách hàng", checked: false, index: 1, disabled: false},
    {name: "Khách hàng", checked: false, index: 1, disabled: false},
    {name: "Trạng thái hoạt động", checked: false, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: false},
  ],

  CHECKLIST_CONFIG: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên checklist", checked: true, index: 1, disabled: false},
    {name: "Thực thi", checked: true, index: 1, disabled: false},
    {name: "Kịch bản checklist", checked: true, index: 1, disabled: false},
    {name: "User thực hiện", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: false},
  ],
  CHECKLIST_SCHEDULE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên checklist", checked: true, index: 1, disabled: false},
    {name: "Thực thi", checked: true, index: 1, disabled: false},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Hạ tầng triển khai", checked: true, index: 1, disabled: false},
    {name: "Máy chủ", checked: true, index: 1, disabled: false},
    {name: "Ngày bắt đầu thực thi", checked: true, index: 1, disabled: false},
    {name: "Thực thi tự động", checked: true, index: 1, disabled: false},
    {name: "Chu kỳ lặp lại", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  CHECKLIST_EXECUTE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên checklist", checked: true, index: 1, disabled: false},
    {name: "Thực thi", checked: true, index: 1, disabled: false},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Hạ tầng triển khai", checked: true, index: 1, disabled: false},
    {name: "Máy chủ", checked: true, index: 1, disabled: false},
    {name: "Thời gian thực thi", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  IMPACT_MANAGEMENTS: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Số CR", checked: true, index: 1, disabled: false},
    {name: "Tên CR", checked: true, index: 1, disabled: false},
    {name: "Quy trình", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Kết quả thực hiện", checked: true, index: 1, disabled: false},
    {name: "Tuần", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: false},
  ],
  APP_PARAMS: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Loại tham số", checked: true, index: 1, disabled: false},
    {name: "Mã tham số", checked: true, index: 1, disabled: false},
    {name: "Tên tham số", checked: true, index: 1, disabled: false},
    {name: "Giá trị", checked: true, index: 1, disabled: false},
    {name: "Chức năng", checked: true, index: 1, disabled: false},
    {name: "Mô tả", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  O_EMPLOYEE_TABLE: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã nhân viên", checked: true, index: 1, disabled: false},
    {name: "Họ tên", checked: true, index: 1, disabled: false},
    {name: "Chức vụ", checked: true, index: 1, disabled: false},
    {name: "Email", checked: true, index: 1, disabled: false},
    {name: "Số điện thoại", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  TICKET: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã ticket", checked: true, index: 1, disabled: false},
    {name: "Mức độ TT", checked: true, index: 1, disabled: false},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Tên cảnh báo", checked: true, index: 1, disabled: false},
    {name: "Đơn vị nhận TT", checked: true, index: 1, disabled: false},
    {name: "Đầu mối nhận TT", checked: true, index: 1, disabled: false},
    {name: "KPI tiếp nhận", checked: false, index: 1, disabled: false},
    {name: "KPI xử lý", checked: false, index: 1, disabled: false},
    {name: "Trạng thái TT", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  KASPERSKY : [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Nhóm", checked: true, index: 1, disabled: false},
    {name: "Thiết bị", checked: true, index: 1, disabled: false},
    {name: "Đối tượng đã phát hiện", checked: true, index: 1, disabled: false},
    {name: "Loại đối tượng", checked: true, index: 1, disabled: false},
    {name: "Tài khoản", checked: true, index: 1, disabled: false},
    {name: "Địa chỉ IP", checked: true, index: 1, disabled: false},
    {name: "Thời gian phát hiện", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  HAND_OVER: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Ca trực", checked: true, index: 1, disabled: false},
    {name: "Nhân viên trực", checked: true, index: 1, disabled: false},
    {name: "Nhân viên chỉ huy", checked: true, index: 1, disabled: false},
    {name: "Thời gian vào ca trực", checked: true, index: 1, disabled: false},
    {name: "Thời gian bàn giao", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  PENTEST: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Tên lỗ hổng", checked: true, index: 1, disabled: false},
    {name: "Mức độ lỗi", checked: true, index: 1, disabled: false},
    {name: "Trạng thái", checked: true, index: 1, disabled: false},
    {name: "Thời gian phát hiện", checked: true, index: 1, disabled: false},
    {name: "Thời gian hoàn thiện khắc phục", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  NAC: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Mã thiết bị", checked: true, index: 1, disabled: false},
    {name: "Địa chỉ IP", checked: true, index: 1, disabled: false},
    {name: "Mức độ lỗi", checked: true, index: 1, disabled: false},
    {name: "Mã chính sách", checked: true, index: 1, disabled: false},
    {name: "Thời gian phát hiện", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  MAINTENANCE_MANAGEMENT: [
    {name: "STT", checked: true, title: "0", disabled: false, width: '50px', styleText: 'text-center'},
    {name: "Mã công việc", checked: true, title: "id", disabled: false, width: '100px', styleText: 'text-right'},
    {name: "Tên công việc", checked: true, title: "name", disabled: false, width: '180px', styleText: ''},
    {name: "Mã hệ thống trên DCIM", checked: true, title: "systemCode", disabled: false, width: '180px', styleText: ''},
    {name: "Tên hệ thống", checked: true, title: "systemName", disabled: false, width: '180px', styleText: ''},
    {name: "Ngày bắt đầu thực hiện", checked: true, title: "startDate", disabled: false, width: '200px', styleText: 'text-center'},
    {name: "Ngày kết thúc", checked: true, title: "endDate", disabled: false, width: '200px', styleText: 'text-center'},
    {name: "Đầu mối tạo việc", checked: true, title: "createUserEmail", disabled: false, width: '230px', styleText: ''},
    {name: "Đầu mối chủ trì", checked: true, title: "empEmailLead", disabled: false, width: '230px', styleText: ''},
    {name: "Đầu mối phối hợp", checked: true, title: "empEmailCoordination", disabled: false, width: '230px', styleText: ''},
    {name: "Người phê duyệt", checked: true, title: "empEmailApprove", disabled: false, width: '230px', styleText: ''},
    {name: "Trạng thái", checked: true, title: "status", disabled: false, width: '200px', styleText: ''},
    {name: "Hành động", checked: true, title: "end", disabled: true, width: '180px', styleText: 'text-center'},
  ],
  WSG: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên người dùng", checked: true, index: 1, disabled: false},
    {name: "Rule_action", checked: true, index: 1, disabled: false},
    {name: "Mức độ lỗi", checked: true, index: 1, disabled: false},
    {name: "URL", checked: true, index: 1, disabled: false},
    {name: "Địa chỉ IP", checked: true, index: 1, disabled: false},
    {name: "Thời gian phát hiện", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  CUSTOMER_CRM : [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "Tên khách hàng", checked: true, index: 1, disabled: false},
    {name: "Kiểu hợp đồng", checked: true, index: 1, disabled: false},
    {name: "Số hợp đồng", checked: true, index: 1, disabled: true},
    {name: "Ngày bắt đầu thực hiện", checked: true, index: 1, disabled: true},
    {name: "Ngày hết hạn thực hiện", checked: true, index: 1, disabled: true},
  ],
  WORKLOAD: [
    {name: "STT", checked: true, index: 1, disabled: true},
    {name: "TT_ID", checked: true, index: 1, disabled: false},
    {name: "Mức độ TT", checked: true, index: 1, disabled: false},
    {name: "Tên hệ thống", checked: true, index: 1, disabled: false},
    {name: "Đơn vị nhận TT", checked: true, index: 1, disabled: false},
    {name: "Hành động", checked: true, index: 1, disabled: true},
  ],
  SCRIPT_MANAGEMENT: [
    {name: "STT", checked: true, title: "0", disabled: false, width: '50px', styleText: 'text-center max-width-50'},
    {name: "Loại kịch bản", checked: true, title: "typeName", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Tên kịch bản", checked: true, title: "name", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Hệ thống", checked: true, title: "systemName", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Hạ tầng triển khai", checked: true, title: "infraDeploymentNames", disabled: false, width: '250px', styleText: 'max-width-250'},
    {name: "Máy chủ", checked: true, title: "serverIps", disabled: false, width: '250px', styleText: 'max-width-250'},
    {name: "Hành động", checked: true, title: "actionName", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "User thực hiện", checked: true, title: "userProcess", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Trạng thái", checked: true, title: "statusName", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Hành động", checked: true, title: "end", disabled: false, width: '180px', styleText: ''},
  ],
  EXECUTE_IMPACT: [
    {name: "STT", checked: true, title: "0", disabled: false, width: '50px', styleText: 'text-center max-width-50'},
    {name: "Tên kịch bản", checked: true, title: "name", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Hệ thống", checked: true, title: "systemName", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Hạ tầng triển khai", checked: true, title: "infraDeploymentNames", disabled: false, width: '250px', styleText: 'max-width-250'},
    {name: "IP Máy chủ", checked: true, title: "serverIps", disabled: false, width: '250px', styleText: 'max-width-250'},
    {name: "Hành động", checked: true, title: "actionName", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Ngày thực thi", checked: true, title: "executionDateStr", disabled: false, width: '150px', styleText: 'text-center max-width-150'},
    {name: "Người thực thi", checked: true, title: "userExecutionName", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Kết quả", checked: true, title: "result", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Hành động", checked: true, title: "end", disabled: false, width: '180px', styleText: 'text-center max-width-180'},
  ],
  PT_MANAGEMENT: [
    {name: "STT", checked: true, title: "0", disabled: false, width: '50px', styleText: 'text-center max-width-50'},
    {name: "Mã ticket vấn đề", checked: true, title: "code", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Tên ticket vấn đề", checked: true, title: "name", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Phân loại ticket vấn đề", checked: true, title: "typeProblem", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Mức ưu tiên", checked: true, title: "priorityLevel", disabled: false, width: '150px', styleText: 'max-width-250'},
    {name: "Trạng thái", checked: true, title: "status", disabled: false, width: '200px', styleText: 'max-width-250'},
    {name: "Thời gian tạo", checked: true, title: "createdDateStr", disabled: false, width: '180px', styleText: 'text-center max-width-150'},
    {name: "Thời gian đóng vấn đề", checked: true, title: "closeDateStr", disabled: false, width: '180px', styleText: 'text-center max-width-150'},
    {name: "Hành động", checked: true, title: "end", disabled: false, width: '180px', styleText: ''},
  ],
  PT_LOG: [
    {name: "STT", checked: true, title: "0", disabled: false, width: '50px', styleText: 'text-center max-width-50'},
    {name: "Nhân sự thực hiện", checked: true, title: "userChange", disabled: false, width: '150px', styleText: 'max-width-150'},
    {name: "Thời gian thực hiện", checked: true, title: "issueDateStr", disabled: false, width: '150px', styleText: 'text-center max-width-150'},
    {name: "Hành động", checked: true, title: "actionName", disabled: false, width: '150px', styleText: 'max-width-150px'},
    {name: "Nội dung thay đổi", checked: true, title: "note", disabled: false, width: '350px', styleText: 'max-width-250'},
  ],
}

export const TEXT_NO_RESULTS = 'component.base.select.not-found-content';

export const STATUS_CODE_ERROR = {
  LICENSE_EXISTED: 'EDT001',
  TAX_CODE_EXISTED: 'EDT002',
  PART_CODE_NOT_ALLOWED: 'EDT003',
  PERMISSION_CODE_NOT_ALLOWED: 'EDT003',
  PRODUCT_CODE_EXISTED: 'SP001',
  DEPARTMENT_CODE_EXISTED: 'DV001',
  ALERT_CODE_EXISTED: 'CB001',
  USER_CODE_EXITED: 'NV001'
};

export const ROLE_LIST = {
  CATEGORY: "CATEGORY", // Quản lý danh mục
  DIRECTORY_PARTNER_VIEW_LIST: "NHOM_QUYEN_FULL",

  PERMISSION: "PERMISSION", // Phân quyền
  MANAGE_COOPERS_PROFILE: "MANAGE_COOPERS_PROFILE", // quanr lý hồ sơ,kết quả hợp tác
  MANAGE_COOPERS_PROFILE_VIEW_LIST: "MANAGE_COOPERS_PROFILE_VIEW_LIST", // hồ sơ hợp tác
  MANAGE_COST_REVENUE_PROFIT_MARGIN_VIEW_LIST: "MANAGE_COST_REVENUE_PROFIT_MARGIN_VIEW_LIST", // Quản lý doanh thu, chi phí và tỷ suất lợi nhuận
  DIRECTORY_PARTNER_CREATE: "DIRECTORY_PARTNER_CREATE", // Thêm mới đối tác
  DIRECTORY_PARTNER_EDIT: "DIRECTORY_PARTNER_EDIT", // Cập nhật đối tác
  DIRECTORY_PARTNER_VIEW_DETAIL: "DIRECTORY_PARTNER_VIEW_DETAIL", // Xem chi tiết đối tác
  DIRECTORY_PARTNER_DELETE: "DIRECTORY_PARTNER_DELETE", // Xóa đối tác
  DIRECTORY_PRODUCT_VIEW_LIST: "DIRECTORY_PRODUCT_VIEW_LIST", // Sản phẩm
  DIRECTORY_PRODUCT_EXPORT: "DIRECTORY_PRODUCT_EXPORT", // Eport sản phẩm
  DIRECTORY_PRODUCT_CREATE: "DIRECTORY_PRODUCT_CREATE", // Thêm mới sản phẩm
  DIRECTORY_PRODUCT_EDIT: "DIRECTORY_PRODUCT_EDIT", // Cập nhật sản phẩm
  DIRECTORY_PRODUCT_VIEW_DETAIL: "DIRECTORY_PRODUCT_VIEW_DETAIL", // Xem chi tiết sản phẩm
  DIRECTORY_PRODUCT_DELETE: "DIRECTORY_PRODUCT_DELETE", // Xóa sản phẩm
  DIRECTORY_UNIT_VIEW_LIST: "DIRECTORY_UNIT_VIEW_LIST", // Đơn vị + Cảnh báo
  // DIRECTORY_UNIT_VIEW_LIST: "QUẢN LÝ CẢNH BÁO", // Đơn vị + Cảnh báo
  DIRECTORY_UNIT_EXPORT: "DIRECTORY_UNIT_EXPORT", // Export đơn vị
  DIRECTORY_UNIT_CREATE: "DIRECTORY_UNIT_CREATE", // Thêm mới đơn vị
  DIRECTORY_UNIT_EDIT: "DIRECTORY_UNIT_EDIT", // Cập nhật đơn vị
  DIRECTORY_UNIT_ADD_PERSONNEL_TO_UNIT: "DIRECTORY_UNIT_ADD_PERSONNEL_TO_UNIT", // Thêm nhân viên vào đơn vị
  DIRECTORY_UNIT_VIEW_DETAIL: "DIRECTORY_UNIT_VIEW_DETAIL", // Xem chi tiết đơn vị
  DIRECTORY_UNIT_DELETE: "DIRECTORY_UNIT_DELETE", // Xóa đơn vị
  DIRECTORY_PERSONNEL_VIEW_LIST: "DIRECTORY_PERSONNEL_VIEW_LIST", // Nhân viên
  DIRECTORY_PERSONNEL_EXPORT: "DIRECTORY_PERSONNEL_EXPORT", // Export nhân viên
  DIRECTORY_PERSONNEL_VIEW_DETAIL: "DIRECTORY_PERSONNEL_VIEW_DETAIL", // Xem chi tiết nhân viên
  CONFIG: "CONFIG", // Cấu hình
  DIRECTORY_CONFIG_GENERAL: "DIRECTORY_CONFIG_GENERAL", // Cấu hình SMS
  DIRECTORY_CONFIG_OBJECT: "DIRECTORY_CONFIG_OBJECT", // Cấu hình đối tượng
  PERMISSION_MANAGE_GROUP_PERMISSION_VIEW_LIST: "PERMISSION_MANAGE_GROUP_PERMISSION_VIEW_LIST", // Quản lý nhóm quyền
  PERMISSION_MANAGE_GROUP_PERMISSION_EXPORT: "PERMISSION_MANAGE_GROUP_PERMISSION_EXPORT", // Export nhóm quyền
  PERMISSION_MANAGE_GROUP_PERMISSION_CREATE: "PERMISSION_MANAGE_GROUP_PERMISSION_CREATE", // Thêm mới nhóm quyền
  PERMISSION_MANAGE_GROUP_PERMISSION_EDIT: "PERMISSION_MANAGE_GROUP_PERMISSION_EDIT", // Cập nhập nhóm quyền
  PERMISSION_MANAGE_GROUP_PERMISSION_ADD_PERSONNEL_TO_GROUP_PERMISSION: "PERMISSION_MANAGE_GROUP_PERMISSION_ADD_PERSONNEL_TO_GROUP_PERMISSION", // Thêm mới nhân viên vào nhóm quyền
  PERMISSION_MANAGE_GROUP_PERMISSION_VIEW_DETAIL: "PERMISSION_MANAGE_GROUP_PERMISSION_VIEW_DETAIL", // Xem chi tiết nhóm quyền
  PERMISSION_MANAGE_GROUP_PERMISSION_DELETE: "PERMISSION_MANAGE_GROUP_PERMISSION_DELETE", // Xóa nhóm quyền
  MANAGE_COOPERS_PROFILE_EXPORT: "MANAGE_COOPERS_PROFILE_EXPORT", // Export hồ sơ hợp tác
  MANAGE_COOPERS_PROFILE_CREATE: "MANAGE_COOPERS_PROFILE_CREATE", // Thêm mới hồ sơ hợp tác
  MANAGE_COOPERS_PROFILE_UPLOADFILE: "MANAGE_COOPERS_PROFILE_UPLOADFILE", // Tải file đính kèm
  MANAGE_COOPERS_PROFILE_EDIT: "MANAGE_COOPERS_PROFILE_EDIT", // Cập nhật hồ sơ hợp tác
  MANAGE_COOPERS_PROFILE_VIEW_DETAIL: "MANAGE_COOPERS_PROFILE_VIEW_DETAIL",  // Xem chi tiết hồ sơ hợp tác
  MANAGE_COOPERS_PROFILE_DELETE: "MANAGE_COOPERS_PROFILE_DELETE", // Xóa hồ sơ hợp tác
  MANAGE_COOPERS_PROFILE_REPORT_VIEW_LIST: "MANAGE_COOPERS_PROFILE_REPORT_VIEW_LIST", // Báo cáo kết quả hợp tác
  MANAGE_COOPERS_PROFILE_REPORT_EXPORT: "MANAGE_COOPERS_PROFILE_REPORT_EXPORT", // Export báo cáo kết quả hợp tác
  MANAGE_COOPERS_PROFILE_REPORT_CREATE: "MANAGE_COOPERS_PROFILE_REPORT_CREATE", // Tạo báo cáo kết quả hợp tác
  MANAGE_COST_REVENUE_PROFIT_MARGIN_EXPORT: "MANAGE_COST_REVENUE_PROFIT_MARGIN_EXPORT", // Export doanh thu, chi phí và tỷ suất lợi nhuận
  MANAGE_COST_REVENUE_PROFIT_MARGIN_CREATE: "MANAGE_COST_REVENUE_PROFIT_MARGIN_CREATE", // Thêm mới doanh thu, chi phí, tỷ suất lợi nhuận
  MANAGE_COST_REVENUE_PROFIT_MARGIN_EDIT: "MANAGE_COST_REVENUE_PROFIT_MARGIN_EDIT", // Cập nhật doanh thu, chi phí, tỷ suất lợi nhuận
  MANAGE_COST_REVENUE_PROFIT_MARGIN_VIEW_DETAIL: "MANAGE_COST_REVENUE_PROFIT_MARGIN_VIEW_DETAIL", // Xem chi tiết doanh thu, chí phí, tỷ suất lợi nhuận
  MANAGE_COST_REVENUE_PROFIT_MARGIN_DELETE: "MANAGE_COST_REVENUE_PROFIT_MARGIN_DELETE", // Xóa doanh thu, chi phí, tỷ suất lợi nhuận
  DIRECTORY_PARTNER_EXPORT: "DIRECTORY_PARTNER_EXPORT", // Export đối tác,
  MANAGE_COOPERS_PROFILE_CREATE_REPORT: "MANAGE_COOPERS_PROFILE_CREATE_REPORT",  // tạo báo cáo kết quả hợp tác
  MANAGE_COOPERS_PROFILE_REPORT_PRODUCT_REVENUE: "MANAGE_COOPERS_PROFILE_REPORT_PRODUCT_REVENUE", // Báo cáo đối tác, sản phẩm hợp tác

  INCIDENT_MANAGEMENT: "INCIDENT_MANAGEMENT", // Quản lý sự cố
  INCIDENT_MANAGEMENT_EDIT: "INCIDENT_MANAGEMENT_EDIT", // Cập nhật sự cố
  INCIDENT_MANAGEMENT_DELETE: "INCIDENT_MANAGEMENT_DELETE", // Xóa sự cố
  INCIDENT_MANAGEMENT_LOCK: "INCIDENT_MANAGEMENT_LOCK",  // Khóa sự cố
  INCIDENT_MANAGEMENT_VIEW: "INCIDENT_MANAGEMENT_VIEW",  // Xem sự cố

  SYSTEM_MANAGEMENT: "SYSTEM_MANAGEMENT",  // Quản lý các hệ thống
}

export const PARTNER = {
  PARTNER_STATUS: {
    END_OF_COOPERATION: 2,
    COOPERATION: 1,
  },
  PARTNER_STATUS_LIST: [
    {value: 'ALL', label: 'Tất cả', selected: true},
    {value: 'COOPERATION', label: 'Đang hợp tác', selected: false},
    {value: 'END_OF_COOPERATION', label: 'Dừng hợp tác', selected: false},
  ],
  PARTNER_STATUS_CREATE: [
    {value: 'COOPERATION', label: 'Đang hợp tác', selected: true},
    {value: 'END_OF_COOPERATION', label: 'Dừng hợp tác', selected: false},
  ],
  BUSINESS_FIELD: [
    {value: "SUPPLY_OF_GOODS", label: 'Cung cấp hàng hóa'},
    {value: "CONSTRUCTION_AND_ASSEMBLY", label: 'Xây lắp'},
    {value: "ADVISORY", label: 'Tư vấn'},
    {value: "LOCATION_FOR_RENT", label: 'Cho thuê vị trí'},
    {value: "WARRANTY_AND_REPAIR", label: 'Bảo hành sửa chữa'},
  ],
  PARTNER_GROUP_SELECT: [
    {value: "PERSONAL", label: 'Cá nhân'},
    {value: "FOREIGN_ENTERPRISES", label: 'Doanh nghiệp nước ngoài'},
    {value: "DOMESTIC_COMPANY", label: 'Doanh nghiệp trong nước'},
    {value: "ADMINISTRATIVE_UNITS", label: 'Đơn vị hành chính'},
    {value: "MILITARY_AGENCY", label: 'Cơ quan quân sự'},
  ],
  BUSINESS_FIELD_VIEW: new Map([
    ["SUPPLY_OF_GOODS", "Cung cấp hàng hóa"],
    ["CONSTRUCTION_AND_ASSEMBLY", "Xây lắp"],
    ["ADVISORY", "Tư vấn"],
    ["LOCATION_FOR_RENT", "Cho thuê vị trí"],
    ["WARRANTY_AND_REPAIR", "Bảo hành sửa chữa"],
  ]),
  PARTNER_GROUP: new Map([
    ["PERSONAL", "Cá nhân"],
    ["FOREIGN_ENTERPRISES", "Doanh nghiệp nước ngoài"],
    ["DOMESTIC_COMPANY", "Doanh nghiệp trong nước"],
    ["ADMINISTRATIVE_UNITS", "Đơn vị hành chính"],
    ["MILITARY_AGENCY", "Cơ quan quân sự"],
  ]),
  PARTNER_STATUS_VIEW: new Map([
    ["COOPERATION", "Đang hợp tác"],
    ["END_OF_COOPERATION", "Dừng hợp tác"]
  ]),
};

export const APP_PARAMS_TYPE = {
  SERVICE_STATUS: "SERVICE_STATUS",
  SETTING_STATUS: "SETUP_STATUS",
  CONNECT_STATUS: "CONNECT_STATUS",
  PARTNER_STATUS: 'PARTNER_STATUS',
  PARTNER_GROUP: 'PARTNER_GROUP',
  BUSINESS_FIELD: 'BUSINESS_FIELD',
  PRODUCT_TYPE: 'PRODUCT_TYPE',
  BRAND_TYPE: 'BRAND_TYPE',
  PARTNER_PRODUCT_TYPE: 'PARTNER_PRODUCT_TYPE',
  PARTNER_SCOPE: 'PARTNER_SCOPE',
  EMPLOYEE_STATUS: 'EMPLOYEE_STATUS',
  REPORT_TYPE: 'REPORT_TYPE',
  PERMISSION_STATUS: 'PERMISSION_STATUS',
  STATUS_DOCUMENT: 'STATUS_DOCUMENT',
  INFRA_DEPLOYMENT: 'INFRA_DEPLOYMENT',
  OPERATING_EMPLOYEE_POSITION: 'OPERATING_EMPLOYEE_POSITION',
  LIST_DEPARTMENT_TYPE: 'LIST_DEPARTMENT_TYPE',
  TYPE_OF_SERVICE: 'TYPE_OF_SERVICE'
}

export const SCROLL_TABLE = {
  SCROLL_X: '1200px',
  SCROLL_Y: '60vh'
}

export const ENV = {
  PROD: 'PROD',
  TEST: 'TEST'
}

export const REPORT = {
  REPORT_TYPE: [
    {value: null, label: 'Tất cả'},
    {value: 1, label: 'Quý', selected: true},
    {value: 2, label: 'Năm'},
  ],
  REPORT_TYPE_CREATE: [
    {value: 1, label: 'Quý'},
    {value: 2, label: 'Năm'},
  ],
  PRECIOUS: [
    {name: '1', id: 1},
    {name: '2', id: 2,},
    {name: '3', id: 3},
    {name: '4', id: 4}
  ]
}

export const EXCEL_DATE_FORMAT = 'YYYYMMDD';

export const RESPONSE_CODE = {
  OK: '200',
  NOT_OK: '500'
}

export const INFRASTRUCTURE = {
  PROD: 1,
  TEST: 2
}

export const PAUSE = {
  ALERT_PAUSE: {
    PAUSE: 1,
    CONTINUE: 0,
  }
}

export const PERMISSION = {
  PERMISSION_STATUS: {
    ACTIVE: 38,
    INACTIVE: 39,
  },
  INCIDENT_MANAGEMENT: {
    SEARCH: 'INCIDENT_SEARCH',
    CREATE: 'INCIDENT_CREATE',
    UPDATE: 'INCIDENT_UPDATE',
    EXPORT: 'INCIDENT_EXPORT',
    IMPORT: 'INCIDENT_IMPORT',
    DELETE: 'INCIDENT_DELETE',
    VIEW: 'INCIDENT_VIEW',
    SEND: 'INCIDENT_SEND',
    STOP_SEND: 'INCIDENT_STOP_SEND',
    LOCK: 'INCIDENT_LOCK',
  },
  //Thinh
  KPI_SERVICE_QUALITY: {
    CREATE: 'KPI_SERVICE_QUALITY_CREATE',
    UPDATE: 'KPI_SERVICE_QUALITY_UPDATE',
    EXPORT: 'KPI_SERVICE_QUALITY_EXPORT',
    IMPORT: 'KPI_SERVICE_QUALITY_IMPORT',
    DELETE: 'KPI_SERVICE_QUALITY_DELETE',
    VIEW: 'KPI_SERVICE_QUALITY_VIEW',
  },

  KPI_DEPLOYMENT_EQUIPMENT: {
    SEARCH: 'KPI_DEPLOYMENT_EQUIPMENT_SEARCH',
    EXPORT: 'KPI_DEPLOYMENT_EQUIPMENT_EXPORT',
    VIEW: 'KPI_DEPLOYMENT_EQUIPMENT_VIEW',
  },

  SYSTEM_MANAGEMENT: {
    SEARCH: 'SYSTEM_SEARCH',
    CREATE: 'SYSTEM_CREATE',
    UPDATE: 'SYSTEM_UPDATE',
    EXPORT: 'SYSTEM_EXPORT',
    DELETE: 'SYSTEM_DELETE',
    IMPORT: 'SYSTEM_IMPORT',
  },
  ALERT_MANAGEMENT: {
    SEARCH: 'ALERT_SEARCH',
    UPDATE: 'ALERT_UPDATE',
    EXPORT: 'ALERT_EXPORT',
    DELETE: 'ALERT_DELETE',
    PAUSE: 'ALERT_PAUSE',
    LINK_MONITOR: 'ALERT_LINK_MONITOR',
    CREATE_TT: 'CREATE_TT',
  },
  ELK_MANAGEMENT: {
    SEARCH: 'ELK_SEARCH',
    EXPORT: 'ELK_EXPORT',
    LINK_MONITOR: 'ELK_LINK_MONITOR'
  },
  PROMETHEUS_MANAGEMENT: {
    SEARCH: 'PROMETHEUS_SEARCH',
    EXPORT: 'PROMETHEUS_EXPORT',
    LINK_MONITOR: 'PROMETHEUS_LINK_MONITOR'
  },
  AOM_MANAGEMENT: {
    SEARCH: 'AOM_SEARCH',
    EXPORT: 'AOM_EXPORT',
  },
  SMS_MANAGEMENT: {
    SEARCH: 'SMS_SEARCH',
    EXPORT: 'SMS_EXPORT',
  },
  SOAR_MANAGEMENT: {
    SEARCH: 'SOAR_SEARCH',
    EXPORT: 'SOAR_EXPORT',
    UPDATE: 'SOAR_UPDATE'
  },
  UNIT_MANAGEMENT: {
    SEARCH: 'UNIT_SEARCH',
    CREATE: 'UNIT_CREATE',
    UPDATE: 'UNIT_UPDATE',
    DELETE: 'UNIT_DELETE',
  },
  USER_MANAGEMENT: {
    SEARCH: 'USER_SEARCH',
    CREATE: 'USER_CREATE',
    UPDATE: 'USER_UPDATE',
    DELETE: 'USER_DELETE',
    DETAIl: 'USER_DETAIL',
  },
  PERMISSION_MANAGEMENT: {
    SEARCH: 'PERMISSION_SEARCH',
    CREATE: 'PERMISSION_CREATE',
    UPDATE: 'PERMISSION_UPDATE',
    DELETE: 'PERMISSION_DELETE',
    PERMISSION: 'PERMISSION_PERMISSION',
  },
  IMPACT_MANAGEMENT: {
    IMPORT: 'IMPORT_IMPACT',
    DELETE: 'IMPORT_DELETE',
    UPDATE: 'IMPORT_UPDATE',
    CREATE: 'IMPORT_CREATE',

  },
  ALERT_CONFIG_MANAGEMENT: {
    COMMON: 'ALERT_CONFIG_COMMON',
    TELEGRAM: 'ALERT_CONFIG_TELEGRAM',
    SOAR: 'ALERT_CONFIG_SOAR',
    PROMETHEUS_CREATE: 'ALERT_CONFIG_PROMETHEUS_CREATE',
    PROMETHEUS_UPDATE: 'ALERT_CONFIG_PROMETHEUS_UPDATE',
    PROMETHEUS_DELETE: 'ALERT_CONFIG_PROMETHEUS_DELETE',
  },
  APP_PARAMS_MANAGEMENT: {
    SEARCH: 'APP_PARAMS_SEARCH',
    CREATE: 'APP_PARAMS_CREATE',
    UPDATE: 'APP_PARAMS_UPDATE',
    DELETE: 'APP_PARAMS_DELETE',
  },
  FUNCTION_MANAGEMENT: {
    SEARCH: 'FUNCTION_SEARCH',
    CREATE: 'FUNCTION_CREATE',
    UPDATE: 'FUNCTION_UPDATE',
    DELETE: 'FUNCTION_DELETE',
  },
  INCIDENT_DASHBOARD: {
    VIEW_DASHBOARD: 'CV_DB',
    VIEW_REPORT: 'INCIDENT_VIEW_REPORT',
    EXPORT_TT: 'EXPORT_TT',
    EXPORT_INCIDENT: 'EXPORT_INCIDENT',
    VIEW_TO_DETAIL_TT: 'VIEW_TO_DETAIL_TT'
  },
  /// Duy
  TT_ALERT: {
    EXPORT_TT: 'EXPORT_TT_ALERT',
    UPDATE_TT: 'UPDATE_TT',
  },
  RESOURCE_VM: {
    CREATE: 'RESOURCE_VM_CREATE',
    IMPORT: 'RESOURCE_VM_IMPORT',
    EXPORT: 'RESOURCE_VM_EXPORT',
    UPDATE: 'RESOURCE_VM_UPDATE',
    DCIM: 'RESOURCE_VM_DCIM',
  },
  LIFECYCLE:{
    SETUP: 'LIFECYCLE_SETUP',
    EXTEND: 'LIFECYCLE_EXTEND',
    SETUP_ALERT: 'LIFECYCLE_SETUP_ALERT',
    CREATE_EMAIL: 'LIFECYCLE_CREATE_EMAIL',
    UPDATE_EMAIL: 'LIFECYCLE_UPDATE_EMAIL',
    DELETE_EMAIL: 'LIFECYCLE_DELETE_EMAIL',
    SETUP_TELEGRAM: 'LIFECYCLE_SETUP_TELEGRAM',
  },
  MAINTENANCE: {
    CREATE: 'MAINTENANCE_CREATE',
    UPDATE: 'MAINTENANCE_UPDATE',
    EXPORT: 'MAINTENANCE_EXPORT',
    IMPORT: 'MAINTENANCE_IMPORT',
    DELETE: 'MAINTENANCE_DELETE',
    VIEW: 'MAINTENANCE_VIEW',
    ACCEPT: 'MAINTENANCE_ACCEPT'
  },
  HAND_OVER: {
    CHECKIN: 'HANDOVER_CHECKIN',
    CHECKOUT: 'HANDOVER_CHECKOUT',
    DETAIL: 'HANDOVER_DETAIL_ALERT',
    VIEW: 'HANDOVER_VIEW_REPORT',
    REPORT: 'HANDOVER_REPORT',
    RPCONFIRM: 'HANDOVER_CHECKOUT_CONFIRM'

  },
  DASHBOARD_VHKT: {
    EXPORT: 'DASHBOARD_VHKT_EXPORT',
    DETAIL: 'DASHBOARD_VHKT_DETAIL'

  },
  RESOURCE_ALLOCATE: {
    CREATE_VM: 'RESOURCE_ALLOCATE_CREATE_VM',
    UPDATE: 'RESOURCE_ALLOCATE_UPDATE',
    CREATE_SV: 'RESOURCE_ALLOCATE_CREATE_SV',
    IMPORT: 'RESOURCE_ALLOCATE_IMPORT'
  },
  DEPLOYMENT_APP: {
    IMPORT_RQ: 'DEPLOYMENT_APP_IMPORT_RQ',
    IMPORT_SYNC: 'DEPLOYMENT_APP_IMPORT_SYNC',
    IMPORT_RECONFIG: 'DEPLOYMENT_APP_IMPORT_RECONF',
    UPDATE: 'DEPLOYMENT_APP_IMPORT_UPDATE',
    IMPORT_NM: 'DEPLOYMENT_APP_IMPORT_NM',

  },
  RECALL: {
    RESOURCE: 'RECALL_RESOURCE',
    EXPORT: 'RECALL_EXPORT',
  },
  SR_MANAGEMENT: {
    SYNC: 'SR_MANAGEMENT_SYNC',
    CREATE: 'SR_MANAGEMENT_CREATE',
    UPDATE: 'SR_MANAGEMENT_UPDATE',
    DELETE: 'SR_MANAGEMENT_DELETE',
    DOWNLOAD: 'SR_MANAGEMENT_DOWNLOAD_FILE',

  },

  RISK_MANAGER:{
    SEARCH: 'RISK_SEARCH',
    CREATE: 'RISK_CREATE',
    UPDATE: 'RISK_UPDATE',
    EXPORT: 'RISK_EXPORT',
    DELETE: 'RISK_DELETE',
    IMPORT: 'RISK_IMPORT',
  },
  EXECUTE_CHECKLIST: {
    VIEW: 'EXECUTE_CHECKLIST_VIEW',
    EXECUTION: 'EXECUTE_CHECKLIST_EXECUTION',
    ADD: 'EXECUTE_CHECKLIST_ADD'
  },

  SCRIPT_MANAGEMENT: {
    CREATE: 'SCRIPT_CREATE',
    UPDATE: 'SCRIPT_UPDATE',
    EXPORT: 'SCRIPT_EXPORT',
    IMPORT: 'SCRIPT_IMPORT',
    DELETE: 'SCRIPT_DELETE',
    VIEW: 'SCRIPT_VIEW',
    ACCEPT: 'SCRIPT_ACCEPT'
  },
  EXECUTE_IMPACT: {
    VIEW: 'EXECUTE_IMPACT_VIEW',
    EXECUTION: 'EXECUTE_IMPACT_EXECUTION',
    ADD: 'EXECUTE_IMPACT_ADD'
  },
  PT_MANAGEMENT: {
    CREATE: 'PT_CREATE',
    UPDATE: 'PT_UPDATE',
    EXPORT: 'PT_EXPORT',
    IMPORT: 'PT_IMPORT',
    DELETE: 'PT_DELETE',
    VIEW: 'PT_VIEW',
  },



}

export const DASHBOARD_TYPE = {
  VH: {
    label: 'VH',
    value: 1
  },
  CTN: {
    label: 'CTN',
    value: 2
  },
  HT: {
    label: 'HT',
    value: 3
  },
  KPI: {
    label: 'KPI',
    value: 4
  }
}

export const PARTNER_PROFILE = {
  PROFILE_STATUS: [
    {value: 1, label: 'Đã ký NDA/MOU'},
    {value: 2, label: 'Đã ký thỏa thuận hợp tác'},
    {value: 3, label: 'Đã ký thỏa thuận hợp tác và đang kinh doanh'},
    {value: 4, label: 'Thanh lý hợp đồng hợp tác'},
  ],
  PROFILE_STATUS_VIEW: new Map([
    [1, 'Đã ký NDA/MOU'],
    [2, 'Đã ký thỏa thuận hợp tác'],
    [3, 'Đã ký thỏa thuận hợp tác và đang kinh doanh'],
    [4, 'Thanh lý hợp đồng hợp tác']
  ]),
  BUSINESS_FIELD: [
    {value: 1, label: 'Cung cấp hàng hóa'},
    {value: 2, label: 'Xây lắp'},
    {value: 3, label: 'Tư vấn'},
    {value: 4, label: 'Cho thuê vị trí'},
    {value: 5, label: 'Bảo hành sửa chữa'},
  ],
  BUSINESS_FIELD_VIEW: new Map([
    [1, "Cung cấp hàng hóa"],
    [2, "Xây lắp"],
    [3, "Tư vấn"],
    [4, "Cho thuê vị trí"],
    [5, "Bảo hành sửa chữa"],
  ])
}

export const REVENUE_REPORT_TYPE = {
  MONTHS: 33,
  PRECIOUS: 34,
  YEAR: 35,
}

export const REVENUE_REPORT_TYPE_LIST = [
  {id: 33, name: 'Tháng'},
  {id: 34, name: 'Quý'},
  {id: 35, name: 'Năm'},
]

export const searchRequestList = {
  name: null
};

export const TICKET_ALERT = {
  TICKET_ALERT_LEVELWARNING: {
    HIGH: 'HIGH',
    MEDIUM: 'MEDIUM',
    LOW: 'LOW'
  },

}

export const DEPARTMENT_TYPE_LIST = {
  DT_PB: 'DT_PB',
  DT_BGD: 'DT_BGD'
}

export const EMPLOYEE_POSITION_LIST = {
  TRUONGPHONG: 'TRUONGPHONG',
  NV: 'NV',
  GD: 'GD'
}

export const INFRA_DEPLOYMENT = {
  DEV: [
    'INFRA_DEPLOYMENT_3',
    'INFRA_DEPLOYMENT_4'
  ],
  PROD: [
    'INFRA_DEPLOYMENT_1',
    'INFRA_DEPLOYMENT_2',
    'INFRA_DEPLOYMENT_5'
  ]
}

export const DEFAULT_UNIT_ID = {
  VTS: {
    id: 94,
    code: "VTS",
    name: "VTS"
  }
}

export const INFRA_DEPLOYMENT_CAN_RECALL = [
  'INFRA_DEPLOYMENT_1',
  'INFRA_DEPLOYMENT_3'
]

export const RESOURCE_RECALL = {
  STATUS: {
    MOI: 'Mới',
    DANGTHUCHIEN: "Đang thực hiện",
    THANHCONG: "Thành công",
    THATBAI: "Thất bại"
  }
}
