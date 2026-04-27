export const wixAutomationsTriggers: {
	[key: string]: { appId: string; triggerKey: string; displayName: string };
} = {
	backInStockRequests_wixECommerceBackInStockRequestCreatedStores: {
		appId: '16be6c71-d061-4f56-8cda-c6aa911d1832',
		triggerKey: 'wix_e_commerce-back_in_stock_request_created_stores',
		displayName: '已建立恢復供應請求',
	},
	backInStockRequests_wixECommerceBackInStockStores: {
		appId: '16be6c71-d061-4f56-8cda-c6aa911d1832',
		triggerKey: 'wix_e_commerce-back_in_stock_stores',
		displayName: '產品恢復供應',
	},
	cmsDeprecated_cmsDatasetFormSubmitted: {
		appId: '1973457f-c021-4da5-941f-58444ff761d4',
		triggerKey: 'cms-dataset_form_submitted',
		displayName: 'CMS 表單已提交',
	},
	contacts_contactsContactAssigned: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-contact_assigned',
		displayName: '連絡人已指派',
	},
	contacts_contactsLabelAddedToContact: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-label_added_to_contact',
		displayName: '已向連絡人新增標籤',
	},
	contacts_contactsLabelRemovedFromContact: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-label_removed_from_contact',
		displayName: '已從連絡人移除標籤',
	},
	contacts_contactsNewContactWasCreated: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-new_contact_was_created',
		displayName: '已建立新聯絡人',
	},
	inbox_wixChatMessageReceiveFromUou: {
		appId: '141fbfae-511e-6817-c9f0-48993a7547d1',
		triggerKey: 'wix_chat-message_receive_from_uou',
		displayName: '已收到收件匣訊息（聊天或電子郵件）',
	},
	inbox_wixChatMessageSentToUou: {
		appId: '141fbfae-511e-6817-c9f0-48993a7547d1',
		triggerKey: 'wix_chat-message_sent_to_uou',
		displayName: '聊天訊息已寄送',
	},
	oldWixFormsAndPayments_wixFormsFormSubmit: {
		appId: '14ce1214-b278-a7e4-1373-00cebd1bef7c',
		triggerKey: 'wix_forms-form_submit',
		displayName: '表單已提交',
	},
	payLinks_wixPaymentLinksPaymentLinkPaymentReceived: {
		appId: '324cf725-53d9-4bb2-b8f6-0c8ec9a77f45',
		triggerKey: 'wix_payment_links-payment_link_payment_received',
		displayName: '已收到付款連結款項',
	},
	payLinks_wixPaymentLinksSendPaymentLink: {
		appId: '324cf725-53d9-4bb2-b8f6-0c8ec9a77f45',
		triggerKey: 'wix_payment_links-send_payment_link',
		displayName: '寄送付款連結',
	},
	priceQuotes_wixPriceQuoteQuoteAccepted: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_accepted',
		displayName: '已接受報價單',
	},
	priceQuotes_wixPriceQuoteQuoteExpired: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_expired',
		displayName: '報價逾期',
	},
	priceQuotes_wixPriceQuoteQuoteSent: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_sent',
		displayName: '已寄出報價單',
	},
	recurringInvoices_wixInvoicesRecurringInvoiceCanceled: {
		appId: '35aec784-bbec-4e6e-abcb-d3d724af52cf',
		triggerKey: 'wix_invoices-recurring_invoice_canceled',
		displayName: '定期付款已取消',
	},
	recurringInvoices_wixInvoicesRecurringInvoiceCreated: {
		appId: '35aec784-bbec-4e6e-abcb-d3d724af52cf',
		triggerKey: 'wix_invoices-recurring_invoice_created',
		displayName: '定期付款開始',
	},
	segments_segmentsContactEntersSegment: {
		appId: 'ee070097-0850-4f23-ad8c-3cdd4efd5244',
		triggerKey: 'segments-contact_enters_segment',
		displayName: '連絡人進入分段',
	},
	segments_segmentsContactLeavesSegment: {
		appId: 'ee070097-0850-4f23-ad8c-3cdd4efd5244',
		triggerKey: 'segments-contact_leaves_segment',
		displayName: '連絡人離開分段',
	},
	subscriptions_billingDateUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'billing_date_updated',
		displayName: '訂閱的付款日期已更新',
	},
	subscriptions_customerPaymentMethodUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'customer_payment_method_updated',
		displayName: '顧客的付款方式已更新',
	},
	subscriptions_failedPaymentGracePeriodStarted: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'failed_payment_grace_period_started',
		displayName: '付款失敗 - 寬限期開始',
	},
	subscriptions_itemPriceUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'item_price_updated',
		displayName: '訂閱之商品價格已更新',
	},
	subscriptions_paymentSucceededGracePeriodEnds: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'payment_succeeded_grace_period_ends',
		displayName: '付款成功 - 寬限期結束',
	},
	tasks_tasksTaskOverdue: {
		appId: '146c0d71-352e-4464-9a03-2e868aabe7b9',
		triggerKey: 'tasks-task_overdue',
		displayName: '任務逾期',
	},
	virtualNumbers_virtualNumbersAutomatedSmsLimitExceeded: {
		appId: '94bc563b-675f-41ad-a2a6-5494f211c47b',
		triggerKey: 'virtual_numbers-automated-sms-limit-exceeded',
		displayName: 'Automated Sms Limit Exceeded',
	},
	wixBlog_fnF525Ecd06D494C92A3647A724E191629809947B0Eb855870A828A71Cb2Bd3B31: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey:
			'fn_f525ecd0-6d49-4c92-a364-7a724e191629_809947b0-eb85-5870-a828-a71cb2bd3b31',
		displayName: 'Function trigger',
	},
	wixBlog_wixBlogBlogPostComment: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-blog_post_comment',
		displayName: '部落格文章新留言',
	},
	wixBlog_wixBlogBlogPostLike: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-blog_post_like',
		displayName: '部落格文章獲讚好',
	},
	wixBlog_wixBlogNewBlogPost: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-new_blog_post',
		displayName: '新發佈的部落格文章',
	},
	wixBookings_fn36Fd6F5F469040FeB1D2771A7D7Ce688F85Ee74AB9Ce56B9Bff65147520Ccf8C:
		{
			appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
			triggerKey:
				'fn_36fd6f5f-4690-40fe-b1d2-771a7d7ce688_f85ee74a-b9ce-56b9-bff6-5147520ccf8c',
			displayName: '函式觸發條件',
		},
	wixBookings_function110369A31027526EB16AC016F9B889B1: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'function_110369a3-1027-526e-b16a-c016f9b889b1',
		displayName: '函式觸發條件',
	},
	wixBookings_wixBookingsAnyCheckIn: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-any_check_in',
		displayName: '客戶報到',
	},
	wixBookings_wixBookingsAppointmentConfirmed: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_confirmed',
		displayName: '已核准預約請求',
	},
	wixBookings_wixBookingsAppointmentDeclined: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_declined',
		displayName: '已拒絕預約請求',
	},
	wixBookings_wixBookingsAppointmentRequiresConfirmation: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_requires_confirmation',
		displayName: '已請求預約',
	},
	wixBookings_wixBookingsBookingCanceled: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-booking_canceled',
		displayName: '預約已取消',
	},
	wixBookings_wixBookingsCourseSessionsUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-course_sessions_updated',
		displayName: '課程已更新',
	},
	wixBookings_wixBookingsDoubleBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-double_booked',
		displayName: '時段重複預訂',
	},
	wixBookings_wixBookingsFailedToApplyBookingFee: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-failed_to_apply_booking_fee',
		displayName: '無法套用預訂費用',
	},
	wixBookings_wixBookingsFailedToCollectAppliedBookingFees: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-failed_to_collect_applied_booking_fees',
		displayName: '無法收集已套用的預訂費用',
	},
	wixBookings_wixBookingsNoSessionsLeft: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-no_sessions_left',
		displayName: '沒有剩餘的時段',
	},
	wixBookings_wixBookingsNoShow: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-no_show',
		displayName: '客戶被標記為「缺席」',
	},
	wixBookings_wixBookingsNthCheckIn: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-nth_check_in',
		displayName: '客戶已報到 X 次',
	},
	wixBookings_wixBookingsSessionEnds: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_ends',
		displayName: '時段結束',
	},
	wixBookings_wixBookingsSessionsBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-sessions_booked',
		displayName: '時段已預訂',
	},
	wixBookings_wixBookingsSessionStarts: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_starts',
		displayName: '時段開始',
	},
	wixBookings_wixBookingsSessionUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_updated',
		displayName: '預約或課堂已更新',
	},
	wixDonations_wixDonationsDonationApproved: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_approved',
		displayName: '捐款完成',
	},
	wixDonations_wixDonationsDonationCycle: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_cycle',
		displayName: '已收取定期捐款費用',
	},
	wixDonations_wixDonationsDonationSubscriptionCanceled: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_subscription_canceled',
		displayName: '定期捐款已取消',
	},
	wixEventsTickets_domainEventsWixEventsGuestsV1GuestGuestCheckedIn: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.guests.v1.guest-guest_checked_in',
		displayName: '賓客已簽到',
	},
	wixEventsTickets_domainEventsWixEventsGuestsV1GuestGuestEventStarts: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.guests.v1.guest-guest_event_starts',
		displayName: '活動開始',
	},
	wixEventsTickets_domainEventsWixEventsV3EventPublished: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.event-published',
		displayName: '活動已發佈',
	},
	wixEventsTickets_domainEventsWixEventsV3TicketDefinitionSaleEnded: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.ticket_definition-sale_ended',
		displayName: '票券銷售已結束',
	},
	wixEventsTickets_domainEventsWixEventsV3TicketDefinitionSaleStarted: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.ticket_definition-sale_started',
		displayName: '票券銷售已開始',
	},
	wixEventsTickets_fn03Dabf87Cebf4775A48812A468Ae34281982Be9D060C5Bb8B112F93Bb2642E39:
		{
			appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
			triggerKey:
				'fn_03dabf87-cebf-4775-a488-12a468ae3428_1982be9d-060c-5bb8-b112-f93bb2642e39',
			displayName: '函式觸發條件',
		},
	wixEventsTickets_fn8F57E5Df0Adb49B1A3F31Ad3D744Bcd4Ff59D8057F7C5Ba7A3C300919A3768E9:
		{
			appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
			triggerKey:
				'fn_8f57e5df-0adb-49b1-a3f3-1ad3d744bcd4_ff59d805-7f7c-5ba7-a3c3-00919a3768e9',
			displayName: '函式觸發條件',
		},
	wixEventsTickets_wixEventsDailyReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-daily_report',
		displayName: '每天報表',
	},
	wixEventsTickets_wixEventsDailyRsvpReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-daily_rsvp_report',
		displayName: '每天 回覆出席 報告',
	},
	wixEventsTickets_wixEventsEventEnds: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-event_ends',
		displayName: '活動結束',
	},
	wixEventsTickets_wixEventsInstantOrderReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_order_report',
		displayName: '售票訂單電子郵件',
	},
	wixEventsTickets_wixEventsInstantRsvpNoReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_rsvp_no_report',
		displayName: '有訪客回覆「否」的電子郵件',
	},
	wixEventsTickets_wixEventsInstantRsvpYesReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_rsvp_yes_report',
		displayName: '賓客回覆 "是" 的電子郵件',
	},
	wixEventsTickets_wixEventsNotificationsEventCanceled: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_event_canceled',
		displayName: '活動已取消',
	},
	wixEventsTickets_wixEventsNotificationsEventReminder: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_event_reminder',
		displayName: '活動提醒日期已到',
	},
	wixEventsTickets_wixEventsNotificationsNewSpotsAvailable: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_new_spots_available',
		displayName: '候補名單賓客已開放',
	},
	wixEventsTickets_wixEventsNotificationsOrderConfirmation: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_order_confirmation',
		displayName: '已下達的訂單',
	},
	wixEventsTickets_wixEventsNotificationsOrderConfirmationWithTicketsLink: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_order_confirmation_with_tickets_link',
		displayName: '訂單已確認，但無法產生票券',
	},
	wixEventsTickets_wixEventsNotificationsRsvpConfirmation: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_rsvp_confirmation',
		displayName: '已確認將會出席',
	},
	wixEventsTickets_wixEventsTicketPurchase: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-ticket_purchase',
		displayName: '已預訂票券',
	},
	wixEventsTickets_wixEventsUouAddedToWaitlist: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-uou_added_to_waitlist',
		displayName: '賓客在候補名單上登記',
	},
	wixEventsTickets_wixEventsUouRsvp: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-uou_rsvp',
		displayName: '來賓回覆出席',
	},
	wixFileShare_wixFileShareAccessToFolderApproved: {
		appId: '1537b24e-29d1-6d8f-b8e1-d6860f2f70b9',
		triggerKey: 'wix_file_share-access_to_folder_approved',
		displayName: '給予資料夾存取',
	},
	wixFileShare_wixFileShareRequestedAccessToFolder: {
		appId: '1537b24e-29d1-6d8f-b8e1-d6860f2f70b9',
		triggerKey: 'wix_file_share-requested_access_to_folder',
		displayName: '要求存取資料夾',
	},
	wixForms_fn6E3266E324B547E29B11623Feede7B14294575A72A2D5D6AB56BC6B8Bda74B16: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey:
			'fn_6e3266e3-24b5-47e2-9b11-623feede7b14_294575a7-2a2d-5d6a-b56b-c6b8bda74b16',
		displayName: '函式觸發條件',
	},
	wixForms_fn8951D6BdB6B84016B07742Fd5B93D79E18F07A715Fb95A0D8E3E2D124Acf3846: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey:
			'fn_8951d6bd-b6b8-4016-b077-42fd5b93d79e_18f07a71-5fb9-5a0d-8e3e-2d124acf3846',
		displayName: '函式觸發條件',
	},
	wixForms_functionF85Ee74AB9Ce56B9Bff65147520Ccf8C: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey: 'function_f85ee74a-b9ce-56b9-bff6-5147520ccf8c',
		displayName: '函式觸發條件',
	},
	wixForms_wixFormAppFormSubmitted: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey: 'wix_form_app-form_submitted',
		displayName: '表單已提交',
	},
	wixForum_wixForumForumCommentDeleted: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_comment_deleted',
		displayName: '已刪除論壇留言',
	},
	wixForum_wixForumForumCommentPublished: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_comment_published',
		displayName: '已發佈論壇留言',
	},
	wixForum_wixForumForumPostLiked: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_post_liked',
		displayName: '對論壇文章做出反應',
	},
	wixForum_wixForumForumPostUnliked: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_post_unliked',
		displayName: '移除了論壇文章的反應',
	},
	wixForum_wixForumNewPost: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-new_post',
		displayName: '論壇文章已發佈',
	},
	wixForum_wixForumReactedToComment: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-reacted_to_comment',
		displayName: '對論壇留言做出反應',
	},
	wixForum_wixForumRemovedReactionFromForumComment: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-removed_reaction_from_forum_comment',
		displayName: '移除了論壇留言的反應',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestApproved: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-approved',
		displayName: 'Group Request Approved DE',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-created',
		displayName: '會員請求建立群組',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-rejected',
		displayName: 'Group Request Rejected DE',
	},
	wixGroups_domainEventsWixSocialgroupsV3GroupMemberAccepted: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.socialgroups.v3.group_member-accepted',
		displayName: '參加請求已接受（未使用）',
	},
	wixGroups_domainEventsWixSocialgroupsV3GroupMemberRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.socialgroups.v3.group_member-rejected',
		displayName: '參加請求已拒絕，但此項目未使用',
	},
	wixGroups_wixGroupsCreateGroupReminder: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-create_group_reminder',
		displayName: '提醒建立群組',
	},
	wixGroups_wixGroupsFolloweeCreatesAPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-followee_creates_a_post',
		displayName: '您追蹤的人員建立文章',
	},
	wixGroups_wixGroupsGroupCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_created',
		displayName: '已建立新群組',
	},
	wixGroups_wixGroupsGroupRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_request_rejected',
		displayName: 'Group create request declined',
	},
	wixGroups_wixGroupsGroupUpdated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_updated',
		displayName: '群組已更新',
	},
	wixGroups_wixGroupsInviteMembersReminder: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-invite_members_reminder',
		displayName: '提醒以邀請會員',
	},
	wixGroups_wixGroupsJoinRequestAccepted: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_accepted',
		displayName: '會員請求加入群組已核准',
	},
	wixGroups_wixGroupsJoinRequestCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_created',
		displayName: '會員請求加入群組',
	},
	wixGroups_wixGroupsJoinRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_rejected',
		displayName: '已拒絕會員加入群組的請求',
	},
	wixGroups_wixGroupsMemberAddedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_added_to_group',
		displayName: '會員加入群組',
	},
	wixGroups_wixGroupsMemberAddedToGroupAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_added_to_group_agg',
		displayName: '會員加入組成群組',
	},
	wixGroups_wixGroupsMemberCreatedPendingPostComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_pending_post_comment',
		displayName: 'Member comments on a post (Pending)',
	},
	wixGroups_wixGroupsMemberCreatedPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post',
		displayName: '會員建立文章',
	},
	wixGroups_wixGroupsMemberCreatedPostAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post_agg',
		displayName: '會員建立文章',
	},
	wixGroups_wixGroupsMemberCreatedPostComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post_comment',
		displayName: '會員在文章留言',
	},
	wixGroups_wixGroupsMemberInvitedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_invited_to_group',
		displayName: '會員受邀加入群組',
	},
	wixGroups_wixGroupsMemberLeavesGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_leaves_group',
		displayName: '會員離開群組',
	},
	wixGroups_wixGroupsMemberMentionedYouV3: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_mentioned_you_v3',
		displayName: '會員提及某人',
	},
	wixGroups_wixGroupsMemberMentionsSomeoneV2: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_mentions_someone_v2',
		displayName: 'Member mentions someone',
	},
	wixGroups_wixGroupsMemberPaidForGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_paid_for_group',
		displayName: '會員支付群組費用',
	},
	wixGroups_wixGroupsMemberPpExpired: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_pp_expired',
		displayName: '由於付款方案失效，因此已移除會員',
	},
	wixGroups_wixGroupsMemberReactedToYourComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_comment',
		displayName: '會員對留言做出反應',
	},
	wixGroups_wixGroupsMemberReactedToYourCommentAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_comment_agg',
		displayName: 'Member reacts to a comment aggregated',
	},
	wixGroups_wixGroupsMemberReactedToYourPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_post',
		displayName: '會員對文章做出反應',
	},
	wixGroups_wixGroupsMemberReactedToYourPostAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_post_agg',
		displayName: 'Member reacts to a post aggregated',
	},
	wixGroups_wixGroupsMemberRequestToCreateGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member-request-to-create-group',
		displayName: '會員請求建立群組',
	},
	wixGroups_wixGroupsMemberRoleUpdated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_role_updated',
		displayName: '會員身分已更新',
	},
	wixGroups_wixGroupsMembersMentioned: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-members_mentioned',
		displayName: 'Member mentions someone NOT USED',
	},
	wixGroups_wixGroupsNewMembersJoined: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-new_members_joined',
		displayName: '群組有新會員的一般更新',
	},
	wixGroups_wixGroupsPersonInvitedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-person_invited_to_group',
		displayName: '受邀至群組的人員',
	},
	wixGroups_wixGroupsWeeklyDigest: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-weekly-digest',
		displayName: '每週摘要',
	},
	wixInvoices_wixInvoicesInvoiceOverdue: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_overdue',
		displayName: '請款單逾期',
	},
	wixInvoices_wixInvoicesInvoicePaid: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_paid',
		displayName: '請款單已付清',
	},
	wixInvoices_wixInvoicesInvoicePaymentReceived: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_payment_received',
		displayName: '請款單付款已收到',
	},
	wixInvoices_wixInvoicesInvoiceSent: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_sent',
		displayName: '請款單已寄送',
	},
	wixLoyaltyProgram_fn5105Cf0C67D0479D96E15D1A23Dab32C19C88145C6405Eb980308Af23445A0F3:
		{
			appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
			triggerKey:
				'fn_5105cf0c-67d0-479d-96e1-5d1a23dab32c_19c88145-c640-5eb9-8030-8af23445a0f3',
			displayName: 'Function trigger',
		},
	wixLoyaltyProgram_fnE7Fd7Eaa90Ef46E0A177D808532Fe5A31B4F97E5Ecaf50408179020D820B1Ee8:
		{
			appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
			triggerKey:
				'fn_e7fd7eaa-90ef-46e0-a177-d808532fe5a3_1b4f97e5-ecaf-5040-8179-020d820b1ee8',
			displayName: 'Function trigger',
		},
	wixLoyaltyProgram_function23D95Ad46Eba5E06888E164C2B9C4F5F: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'function_23d95ad4-6eba-5e06-888e-164c2b9c4f5f',
		displayName: 'Function trigger',
	},
	wixLoyaltyProgram_wixLoyaltyLoyaltyPointsReached: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-loyalty_points_reached',
		displayName: '顧客擁有足夠點數來兌換獎勵',
	},
	wixLoyaltyProgram_wixLoyaltyPointsAboutToExpire: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_about_to_expire',
		displayName: '點數在 14 天後過期',
	},
	wixLoyaltyProgram_wixLoyaltyPointsAdjusted: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_adjusted',
		displayName: '點數餘額經手動調整',
	},
	wixLoyaltyProgram_wixLoyaltyPointsEarned: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_earned',
		displayName: '顧客賺取點數',
	},
	wixLoyaltyProgram_wixLoyaltySocialMediaChannelFollowed: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-social_media_channel_followed',
		displayName: '已追蹤社交媒體個人檔案',
	},
	wixLoyaltyProgram_wixLoyaltyTierUpdated: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-tier_updated',
		displayName: '顧客進入等級',
	},
	wixOnlinePrograms_wixOnlineProgramsAccessDenied: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-access_denied',
		displayName: '已拒絕參與者存取',
	},
	wixOnlinePrograms_wixOnlineProgramsCertificateReady: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-certificate_ready',
		displayName: '證書可供下載',
	},
	wixOnlinePrograms_wixOnlineProgramsExportedProgramData: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-exported_program_data',
		displayName: '已匯出參與者資料',
	},
	wixOnlinePrograms_wixOnlineProgramsJoinRequestReceived: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-join_request_received',
		displayName: '已收到計劃加入請求',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberInvitedToJoinAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_invited_to_join_a_program',
		displayName: '會員受邀加入計劃',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinRequestApproved: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_join_request_approved',
		displayName: '會員加入請求已核准',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinRequestWasDeclined: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_join_request_was_declined',
		displayName: '會員的加入請求被拒絕',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinsAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_joins_a_program',
		displayName: '會員加入計劃',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberPaysForAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_pays_for_a_program',
		displayName: '會員支付計劃',
	},
	wixOnlinePrograms_wixOnlineProgramsOfflinePaymentDeclined: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-offline_payment_declined',
		displayName: '離線付款遭拒',
	},
	wixOnlinePrograms_wixOnlineProgramsOfflinePaymentReceived: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-offline_payment_received',
		displayName: '已收到離線計劃付款',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantCompletesAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_completes_a_program',
		displayName: '參與者已完成計劃',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantCompletesAStep: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_completes_a_step',
		displayName: '參與者完成步驟',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantLeavesAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_leaves_a_program',
		displayName: '參與者已退出計劃',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantManuallyAddedToProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_manually_added_to_program',
		displayName: '在計劃中手動新增參與者',
	},
	wixOnlinePrograms_wixOnlineProgramsPaymentFailed: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-payment_failed',
		displayName: '付款失敗',
	},
	wixOnlinePrograms_wixOnlineProgramsProgramDurationEnds: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-program_duration_ends',
		displayName: '計劃結束日期已過',
	},
	wixOnlinePrograms_wixOnlineProgramsProgramEndedWithoutAllStepsCompleted: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-program_ended_without_all_steps_completed',
		displayName: '在未完成所有步驟之情況下結束計劃',
	},
	wixOnlinePrograms_wixOnlineProgramsReminderToCompleteSteps: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-reminder_to_complete_steps',
		displayName: '提醒完成已預定步驟',
	},
	wixOnlinePrograms_wixOnlineProgramsVisitorBlockedFromJoining: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-visitor_blocked_from_joining',
		displayName: '拒絕訪客存取',
	},
	wixPortfolio_wixPortfolioProjectCreated: {
		appId: 'd90652a2-f5a1-4c7c-84c4-d4cdcc41f130',
		triggerKey: 'wix_portfolio-project_created',
		displayName: '建立新專案',
	},
	wixPricingPlans_fn214D1C3FD56B467FA95D927Cd3E367A5765A669949435F2E9Aeb4Bd78D72454D:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_214d1c3f-d56b-467f-a95d-927cd3e367a5_765a6699-4943-5f2e-9aeb-4bd78d72454d',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fn3D1Dd01508B14300Ab44055E149550808Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_3d1dd015-08b1-4300-ab44-055e14955080_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fn46138Fed7Cd244A09Bb30B78C34A397396Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_46138fed-7cd2-44a0-9bb3-0b78c34a3973_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fn53231893Aead479B83Af7D9D556364928Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_53231893-aead-479b-83af-7d9d55636492_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fn60C383A45Aab4CefB96363B5D8Bfe8B78Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_60c383a4-5aab-4cef-b963-63b5d8bfe8b7_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fn77101Bfb43124A51A1FaA840808B231F8Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_77101bfb-4312-4a51-a1fa-a840808b231f_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fnBd14Eb16Cea6446594905052A4E805C296Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_bd14eb16-cea6-4465-9490-5052a4e805c2_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fnE0D72747A2874Da29Fdc0B24A5445E31B6B2579F17Ab5Fa6B0A021F2Ddbacc1E:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_e0d72747-a287-4da2-9fdc-0b24a5445e31_b6b2579f-17ab-5fa6-b0a0-21f2ddbacc1e',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fnEd6Bc2E62F8E49999Fb5B56E5630Ef4296Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_ed6bc2e6-2f8e-4999-9fb5-b56e5630ef42_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_fnF0B130E595564Ed1A714A8Ab84C13Fb596Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_f0b130e5-9556-4ed1-a714-a8ab84c13fb5_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: '函式觸發條件',
		},
	wixPricingPlans_wixPricingPlansPlanCanceled: {
		appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
		triggerKey: 'wix_pricing_plans-plan_canceled',
		displayName: '方案已取消',
	},
	wixPricingPlans_wixPricingPlansPlanPurchased: {
		appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
		triggerKey: 'wix_pricing_plans-plan_purchased',
		displayName: '方案已訂購',
	},
	wixProposals_wixProposalsProposalAccepted: {
		appId: 'b68c2f3d-8a70-4e1f-9432-3cd1fd011965',
		triggerKey: 'wix_proposals-proposal_accepted',
		displayName: '已接受提案',
	},
	wixProposals_wixProposalsSendProposal: {
		appId: 'b68c2f3d-8a70-4e1f-9432-3cd1fd011965',
		triggerKey: 'wix_proposals-send_proposal',
		displayName: '提案已寄送',
	},
	wixRestaurantsOrders_restaurantsDeliveryOrderIsReady: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-delivery-order-is-ready',
		displayName: '外送訂單已準備就緒',
	},
	wixRestaurantsOrders_restaurantsFutureOrderApproved: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-future-order-approved',
		displayName: '未來訂單到期時間',
	},
	wixRestaurantsOrders_restaurantsOrderCanceled: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-canceled',
		displayName: '訂單取消',
	},
	wixRestaurantsOrders_restaurantsOrderEdited: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-edited',
		displayName: '訂單已編輯',
	},
	wixRestaurantsOrders_restaurantsOrderIsInDelivery: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-in-delivery',
		displayName: '訂單正在外送中',
	},
	wixRestaurantsOrders_restaurantsOrderIsPending: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-pending',
		displayName: '訂單已建立',
	},
	wixRestaurantsOrders_restaurantsOrderIsReady: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-ready',
		displayName: '外帶訂單已準備就緒',
	},
	wixRestaurantsOrders_restaurantsOrderWasAccepted: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-was-accepted',
		displayName: '訂單已接受',
	},
	wixRestaurantsOrders_restaurantsOrderWasFulfilled: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-was-fulfilled',
		displayName: '訂單已履行',
	},
	wixRestaurantsOrders2_wixRestaurantsOrdersOrderSubmitted: {
		appId: '13e8d036-5516-6104-b456-c8466db39542',
		triggerKey: 'wix_restaurants_orders-order_submitted',
		displayName: '已提交之訂單',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewCreated: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-created',
		displayName: '已建立評論',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewDeleted: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-deleted',
		displayName: '評論已刪除',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewModerationStatusChanged: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-moderation_status_changed',
		displayName: '評論審查狀態已變更',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewReviewPublished: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-review_published',
		displayName: '評價已發佈',
	},
	wixReviewsApp_wixReviewsReviewRequestCreated: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'wix_reviews_review-request-created',
		displayName: '已建立評價請求',
	},
	wixSiteMembersApp_wixMembersMemberApproves: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_approves',
		displayName: '已核准會員',
	},
	wixSiteMembersApp_wixMembersMemberBlocked: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_blocked',
		displayName: '會員已封鎖',
	},
	wixSiteMembersApp_wixMembersMemberDeleted: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_deleted',
		displayName: '會員已刪除',
	},
	wixSiteMembersApp_wixMembersMemberLogsIn: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_logs_in',
		displayName: '會員登入',
	},
	wixSiteMembersApp_wixMembersUouSignsUp: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-uou_signs_up',
		displayName: '訪客在您的網站註冊',
	},
	wixSiteMembersApp_wixSitemembersAppMemberActivation: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_activation',
		displayName: '將聯絡設定為會員',
	},
	wixSiteMembersApp_wixSitemembersAppMemberEmailConfirmationRequired: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_email_confirmation_required',
		displayName: '需要會員電子郵件確認',
	},
	wixSiteMembersApp_wixSitemembersAppMemberResetPassword: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_reset_password',
		displayName: '網站會員要求重設密碼',
	},
	wixSiteMembersApp_wixSitemembersAppNewMemberRequestsApproval: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-new_member_requests_approval',
		displayName: 'New member requests approval',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerDigitalItemConfirmationIssued:
		{
			appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
			triggerKey:
				'domain_events_wix.ecom.v1.automation_trigger-digital_item_confirmation_issued',
			displayName: '數位項目付款',
		},
	wixStores_domainEventsWixEcomV1AutomationTriggerFulfillmentRequestIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-fulfillment_request_issued',
		displayName: '自動化功能觸發條件履行請求',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderCancellationIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-order_cancellation_issued',
		displayName: '自動化功能訂單取消觸發條件',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderConfirmationIssuedToBuyer:
		{
			appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
			triggerKey:
				'domain_events_wix.ecom.v1.automation_trigger-order_confirmation_issued_to_buyer',
			displayName: '已向買家發出自動化功能觸發條件訂單確認',
		},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderConfirmationIssuedToMerchant:
		{
			appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
			triggerKey:
				'domain_events_wix.ecom.v1.automation_trigger-order_confirmation_issued_to_merchant',
			displayName: '商家已收到訂單確認自動化通知',
		},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderPaymentAdded: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-order_payment_added',
		displayName: '已新增到訂單中的付款',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderUpdatedIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-order_updated_issued',
		displayName: '自動化功能觸發條件訂單已更新發佈',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerReadyForPickupIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-ready_for_pickup_issued',
		displayName: '訂單準備好可以取貨',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerRefundConfirmationIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-refund_confirmation_issued',
		displayName: '發起退款',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerShippingConfirmationIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-shipping_confirmation_issued',
		displayName: '訂單出貨',
	},
	wixStores_fnB56C6504E65648C4A245935C334Fd52B78Eb5D7F788854DdBca71598B432Bfd8:
		{
			appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
			triggerKey:
				'fn_b56c6504-e656-48c4-a245-935c334fd52b_78eb5d7f-7888-54dd-bca7-1598b432bfd8',
			displayName: '函式觸發條件',
		},
	wixStores_function2646Ba8896A8526BBada351Ee357Ad78: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'function_2646ba88-96a8-526b-bada-351ee357ad78',
		displayName: 'Function trigger',
	},
	wixStores_function424205E1E0865E1A8F2F63040Cf1B22B: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'function_424205e1-e086-5e1a-8f2f-63040cf1b22b',
		displayName: '函式觸發條件',
	},
	wixStores_function64Fac571B6Ec5Bd885F526628C2A1688: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'function_64fac571-b6ec-5bd8-85f5-26628c2a1688',
		displayName: 'Function trigger',
	},
	wixStores_wixECommerceCartAbandonment: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wix_e_commerce-cart_abandonment',
		displayName: '已放棄結帳',
	},
	wixStores_wixECommerceOrderPlaced: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wix_e_commerce-order_placed',
		displayName: '已下達的訂單',
	},
	wixStores_wixstoresLegacyOrderPlacedV1: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-legacy_order_placed_v1',
		displayName: '商店訂單已送出',
	},
	wixStores_wixstoresPaymentAdded: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-payment_added',
		displayName: '已對信用卡收取費用',
	},
	wixTableReservations_reservationStarted: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'reservation_started',
		displayName: '訂位開始',
	},
	wixTableReservations_reservationWasCanceled: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'reservation_was_canceled',
		displayName: '訂位遭取消',
	},
	wixTableReservations_uouCreatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'uou_created_reservation',
		displayName: '賓客預訂的桌次',
	},
	wixTableReservations_userCreatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'user_created_reservation',
		displayName: '訂位獲手動新增',
	},
	wixTableReservations_userUpdatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'user_updated_reservation',
		displayName: '訂位時間已更新',
	},
	workflows_wixWorkflowsCardAddedOrMoved: {
		appId: 'ea2821fc-7d97-40a9-9f75-772f29178430',
		triggerKey: 'wix_workflows-card_added_or_moved',
		displayName: '卡片已新增或移動',
	},
};
