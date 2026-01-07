export const wixAutomationsTriggers: {
	[key: string]: { appId: string; triggerKey: string; displayName: string };
} = {
	backInStockRequests_wixECommerceBackInStockRequestCreatedStores: {
		appId: '16be6c71-d061-4f56-8cda-c6aa911d1832',
		triggerKey: 'wix_e_commerce-back_in_stock_request_created_stores',
		displayName: '再入荷通知リクエスト作成',
	},
	backInStockRequests_wixECommerceBackInStockStores: {
		appId: '16be6c71-d061-4f56-8cda-c6aa911d1832',
		triggerKey: 'wix_e_commerce-back_in_stock_stores',
		displayName: '商品が再入荷した時',
	},
	cms_cmsDatasetFormSubmitted: {
		appId: '1973457f-c021-4da5-941f-58444ff761d4',
		triggerKey: 'cms-dataset_form_submitted',
		displayName: 'CMS フォームを提出',
	},
	contacts_contactsContactAssigned: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-contact_assigned',
		displayName: '連絡先が割り当てられました',
	},
	contacts_contactsLabelAddedToContact: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-label_added_to_contact',
		displayName: 'ラベルが連絡先に追加された時',
	},
	contacts_contactsLabelRemovedFromContact: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-label_removed_from_contact',
		displayName: 'ラベルが連絡先から削除された時',
	},
	contacts_contactsNewContactWasCreated: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-new_contact_was_created',
		displayName: '新規連絡先が作成された時',
	},
	inbox_wixChatMessageReceiveFromUou: {
		appId: '141fbfae-511e-6817-c9f0-48993a7547d1',
		triggerKey: 'wix_chat-message_receive_from_uou',
		displayName: 'Inbox メッセージを受信した時（チャットまたはメール）',
	},
	inbox_wixChatMessageSentToUou: {
		appId: '141fbfae-511e-6817-c9f0-48993a7547d1',
		triggerKey: 'wix_chat-message_sent_to_uou',
		displayName: 'チャットでメッセージを送信した時',
	},
	oldWixFormsAndPayments_wixFormsFormSubmit: {
		appId: '14ce1214-b278-a7e4-1373-00cebd1bef7c',
		triggerKey: 'wix_forms-form_submit',
		displayName: 'フォームが提出された時',
	},
	payLinks_wixPaymentLinksPaymentLinkPaymentReceived: {
		appId: '324cf725-53d9-4bb2-b8f6-0c8ec9a77f45',
		triggerKey: 'wix_payment_links-payment_link_payment_received',
		displayName: '支払済み',
	},
	payLinks_wixPaymentLinksSendPaymentLink: {
		appId: '324cf725-53d9-4bb2-b8f6-0c8ec9a77f45',
		triggerKey: 'wix_payment_links-send_payment_link',
		displayName: '支払いリンクを送信',
	},
	priceQuotes_wixPriceQuoteQuoteAccepted: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_accepted',
		displayName: '見積書が承諾された時',
	},
	priceQuotes_wixPriceQuoteQuoteExpired: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_expired',
		displayName: '見積書期限切れ',
	},
	priceQuotes_wixPriceQuoteQuoteSent: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_sent',
		displayName: '見積書が送信された時',
	},
	recurringInvoices_wixInvoicesRecurringInvoiceCanceled: {
		appId: '35aec784-bbec-4e6e-abcb-d3d724af52cf',
		triggerKey: 'wix_invoices-recurring_invoice_canceled',
		displayName: '定期払いがキャンセルされた時',
	},
	recurringInvoices_wixInvoicesRecurringInvoiceCreated: {
		appId: '35aec784-bbec-4e6e-abcb-d3d724af52cf',
		triggerKey: 'wix_invoices-recurring_invoice_created',
		displayName: '定期払いが開始した時',
	},
	segments_segmentsContactEntersSegment: {
		appId: 'ee070097-0850-4f23-ad8c-3cdd4efd5244',
		triggerKey: 'segments-contact_enters_segment',
		displayName: '連絡先がセグメントに追加された時',
	},
	segments_segmentsContactLeavesSegment: {
		appId: 'ee070097-0850-4f23-ad8c-3cdd4efd5244',
		triggerKey: 'segments-contact_leaves_segment',
		displayName: '連絡先がセグメントから削除された時',
	},
	subscriptions_billingDateUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'billing_date_updated',
		displayName: '定期購入の支払い日が更新',
	},
	subscriptions_customerPaymentMethodUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'customer_payment_method_updated',
		displayName: '顧客のお支払い方法が更新された時',
	},
	subscriptions_failedPaymentGracePeriodStarted: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'failed_payment_grace_period_started',
		displayName: '支払い失敗のため猶予期間が始まる時',
	},
	subscriptions_itemPriceUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'item_price_updated',
		displayName: '定期購入サービスのアイテム価格が更新された時',
	},
	subscriptions_paymentSucceededGracePeriodEnds: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'payment_succeeded_grace_period_ends',
		displayName: '支払い完了 - 猶予期間の終了',
	},
	tasks_tasksTaskOverdue: {
		appId: '146c0d71-352e-4464-9a03-2e868aabe7b9',
		triggerKey: 'tasks-task_overdue',
		displayName: 'タスクの期限が切れた時',
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
		displayName: 'ブログ記事新着コメント',
	},
	wixBlog_wixBlogBlogPostLike: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-blog_post_like',
		displayName: 'ブログ記事への「いいね！」',
	},
	wixBlog_wixBlogNewBlogPost: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-new_blog_post',
		displayName: '新しいブログ記事公開',
	},
	wixBookings_fn36Fd6F5F469040FeB1D2771A7D7Ce688F85Ee74AB9Ce56B9Bff65147520Ccf8C:
		{
			appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
			triggerKey:
				'fn_36fd6f5f-4690-40fe-b1d2-771a7d7ce688_f85ee74a-b9ce-56b9-bff6-5147520ccf8c',
			displayName: 'Function trigger',
		},
	wixBookings_function110369A31027526EB16AC016F9B889B1: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'function_110369a3-1027-526e-b16a-c016f9b889b1',
		displayName: 'Function trigger',
	},
	wixBookings_wixBookingsAnyCheckIn: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-any_check_in',
		displayName: '顧客が到着',
	},
	wixBookings_wixBookingsAppointmentConfirmed: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_confirmed',
		displayName: '予約リクエストが承認された時',
	},
	wixBookings_wixBookingsAppointmentDeclined: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_declined',
		displayName: '予約リクエストが拒否された時',
	},
	wixBookings_wixBookingsAppointmentRequiresConfirmation: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_requires_confirmation',
		displayName: '予約リクエスト',
	},
	wixBookings_wixBookingsBookingCanceled: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-booking_canceled',
		displayName: '予約がキャンセルされた時',
	},
	wixBookings_wixBookingsCourseSessionsUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-course_sessions_updated',
		displayName: 'コースの更新',
	},
	wixBookings_wixBookingsDoubleBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-double_booked',
		displayName: 'セッションの重複予約',
	},
	wixBookings_wixBookingsFailedToApplyBookingFee: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-failed_to_apply_booking_fee',
		displayName: '予約料金が適用されませんでした',
	},
	wixBookings_wixBookingsFailedToCollectAppliedBookingFees: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-failed_to_collect_applied_booking_fees',
		displayName: 'Failed to collect applied booking fees',
	},
	wixBookings_wixBookingsNoSessionsLeft: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-no_sessions_left',
		displayName: '残りセッションがなくなった時',
	},
	wixBookings_wixBookingsNoShow: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-no_show',
		displayName: '顧客が「無断欠席」とマークされた時',
	},
	wixBookings_wixBookingsNthCheckIn: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-nth_check_in',
		displayName: '顧客が X 回来場した時',
	},
	wixBookings_wixBookingsSessionEnds: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_ends',
		displayName: 'セッションが終了した時',
	},
	wixBookings_wixBookingsSessionsBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-sessions_booked',
		displayName: 'セッションが予約された時',
	},
	wixBookings_wixBookingsSessionStarts: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_starts',
		displayName: 'セッションが開始される時',
	},
	wixBookings_wixBookingsSessionUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_updated',
		displayName: 'プライベート予約もしくはクラスの更新',
	},
	wixChat_wixChatChatFormSubmitted: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-chat_form_submitted',
		displayName: 'Pre-chat form submitted',
	},
	wixChat_wixChatNewChatMessage: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-new_chat_message',
		displayName: 'チャットでメッセージを受信した時',
	},
	wixChat_wixChatVisitorOnLiveSite: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-visitor_on_live_site',
		displayName: 'サイトに訪問者がいる時',
	},
	wixDonations_wixDonationsDonationApproved: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_approved',
		displayName: '寄付が行われた時',
	},
	wixDonations_wixDonationsDonationCycle: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_cycle',
		displayName: '継続寄付の課金が完了した時',
	},
	wixDonations_wixDonationsDonationSubscriptionCanceled: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_subscription_canceled',
		displayName: '継続寄付がキャンセルされた時',
	},
	wixEventsTickets_domainEventsWixEventsGuestsV1GuestGuestCheckedIn: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.guests.v1.guest-guest_checked_in',
		displayName: '来場済みゲスト',
	},
	wixEventsTickets_domainEventsWixEventsGuestsV1GuestGuestEventStarts: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.guests.v1.guest-guest_event_starts',
		displayName: 'イベント開始',
	},
	wixEventsTickets_domainEventsWixEventsV3EventPublished: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.event-published',
		displayName: 'イベントが公開された時',
	},
	wixEventsTickets_domainEventsWixEventsV3TicketDefinitionSaleEnded: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.ticket_definition-sale_ended',
		displayName: 'チケット販売は終了しました',
	},
	wixEventsTickets_domainEventsWixEventsV3TicketDefinitionSaleStarted: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.ticket_definition-sale_started',
		displayName: 'チケット販売を開始',
	},
	wixEventsTickets_fn03Dabf87Cebf4775A48812A468Ae34281982Be9D060C5Bb8B112F93Bb2642E39:
		{
			appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
			triggerKey:
				'fn_03dabf87-cebf-4775-a488-12a468ae3428_1982be9d-060c-5bb8-b112-f93bb2642e39',
			displayName: 'Function trigger',
		},
	wixEventsTickets_fn8F57E5Df0Adb49B1A3F31Ad3D744Bcd4Ff59D8057F7C5Ba7A3C300919A3768E9:
		{
			appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
			triggerKey:
				'fn_8f57e5df-0adb-49b1-a3f3-1ad3d744bcd4_ff59d805-7f7c-5ba7-a3c3-00919a3768e9',
			displayName: 'Function trigger',
		},
	wixEventsTickets_wixEventsDailyReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-daily_report',
		displayName: 'Daily report',
	},
	wixEventsTickets_wixEventsDailyRsvpReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-daily_rsvp_report',
		displayName: 'Daily RSVP report',
	},
	wixEventsTickets_wixEventsEventEnds: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-event_ends',
		displayName: 'イベントが終了した時',
	},
	wixEventsTickets_wixEventsInstantOrderReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_order_report',
		displayName: 'Ticket order email',
	},
	wixEventsTickets_wixEventsInstantRsvpNoReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_rsvp_no_report',
		displayName: 'Guest RSVPd NO email',
	},
	wixEventsTickets_wixEventsInstantRsvpYesReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_rsvp_yes_report',
		displayName: 'Guest RSVPd YES email',
	},
	wixEventsTickets_wixEventsNotificationsEventCanceled: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_event_canceled',
		displayName: 'イベントがキャンセルされる',
	},
	wixEventsTickets_wixEventsNotificationsEventReminder: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_event_reminder',
		displayName: 'イベントリマインダーの日付が到来する',
	},
	wixEventsTickets_wixEventsNotificationsNewSpotsAvailable: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_new_spots_available',
		displayName: 'キャンセル待ちリストに空き枠ができる',
	},
	wixEventsTickets_wixEventsNotificationsOrderConfirmation: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_order_confirmation',
		displayName: '受注',
	},
	wixEventsTickets_wixEventsNotificationsOrderConfirmationWithTicketsLink: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_order_confirmation_with_tickets_link',
		displayName: '注文は確認されたがチケットが生成されない',
	},
	wixEventsTickets_wixEventsNotificationsRsvpConfirmation: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_rsvp_confirmation',
		displayName: '参加申込が確認される',
	},
	wixEventsTickets_wixEventsTicketPurchase: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-ticket_purchase',
		displayName: 'チケットが注文された時',
	},
	wixEventsTickets_wixEventsUouAddedToWaitlist: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-uou_added_to_waitlist',
		displayName: 'ゲストがキャンセル待ちに登録された時',
	},
	wixEventsTickets_wixEventsUouRsvp: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-uou_rsvp',
		displayName: 'ゲストが出欠を連絡した時',
	},
	wixFileShare_wixFileShareAccessToFolderApproved: {
		appId: '1537b24e-29d1-6d8f-b8e1-d6860f2f70b9',
		triggerKey: 'wix_file_share-access_to_folder_approved',
		displayName: 'フォルダアクセス権付与',
	},
	wixFileShare_wixFileShareRequestedAccessToFolder: {
		appId: '1537b24e-29d1-6d8f-b8e1-d6860f2f70b9',
		triggerKey: 'wix_file_share-requested_access_to_folder',
		displayName: 'フォルダアクセス権リクエスト',
	},
	wixForms_fn6E3266E324B547E29B11623Feede7B14294575A72A2D5D6AB56BC6B8Bda74B16: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey:
			'fn_6e3266e3-24b5-47e2-9b11-623feede7b14_294575a7-2a2d-5d6a-b56b-c6b8bda74b16',
		displayName: 'Function trigger',
	},
	wixForms_fn8951D6BdB6B84016B07742Fd5B93D79E18F07A715Fb95A0D8E3E2D124Acf3846: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey:
			'fn_8951d6bd-b6b8-4016-b077-42fd5b93d79e_18f07a71-5fb9-5a0d-8e3e-2d124acf3846',
		displayName: 'Function trigger',
	},
	wixForms_functionF85Ee74AB9Ce56B9Bff65147520Ccf8C: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey: 'function_f85ee74a-b9ce-56b9-bff6-5147520ccf8c',
		displayName: 'Function trigger',
	},
	wixForms_wixFormAppFormSubmitted: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey: 'wix_form_app-form_submitted',
		displayName: 'フォームが提出された時',
	},
	wixForum_wixForumForumCommentDeleted: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_comment_deleted',
		displayName: 'フォーラムのコメントが削除された時',
	},
	wixForum_wixForumForumCommentPublished: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_comment_published',
		displayName: 'フォーラムのコメントが公開された時',
	},
	wixForum_wixForumForumPostLiked: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_post_liked',
		displayName: 'フォーラム記事にリアクションした時',
	},
	wixForum_wixForumForumPostUnliked: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_post_unliked',
		displayName: 'フォーラム記事からリアクションが削除された時',
	},
	wixForum_wixForumNewPost: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-new_post',
		displayName: 'フォーラム記事が公開',
	},
	wixForum_wixForumReactedToComment: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-reacted_to_comment',
		displayName: 'フォーラムのコメントにリアクションした時',
	},
	wixForum_wixForumRemovedReactionFromForumComment: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-removed_reaction_from_forum_comment',
		displayName: 'フォーラムのコメントからリアクションが削除された時',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestApproved: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-approved',
		displayName: 'Group Request Approved DE',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-created',
		displayName: 'メンバーがグループの作成をリクエストした時',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-rejected',
		displayName: 'Group Request Rejected DE',
	},
	wixGroups_domainEventsWixSocialgroupsV3GroupMemberAccepted: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.socialgroups.v3.group_member-accepted',
		displayName: 'Join Request Accepted NOT USED',
	},
	wixGroups_domainEventsWixSocialgroupsV3GroupMemberRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.socialgroups.v3.group_member-rejected',
		displayName: 'Join Request Rejected NOT USED',
	},
	wixGroups_wixGroupsCreateGroupReminder: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-create_group_reminder',
		displayName: 'グループ作成のリマインダー',
	},
	wixGroups_wixGroupsFolloweeCreatesAPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-followee_creates_a_post',
		displayName: 'フォローしているユーザーが投稿を作成した時',
	},
	wixGroups_wixGroupsGroupCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_created',
		displayName: '新規グループの作成',
	},
	wixGroups_wixGroupsGroupRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_request_rejected',
		displayName: 'Group create request declined',
	},
	wixGroups_wixGroupsGroupUpdated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_updated',
		displayName: 'グループが更新された時',
	},
	wixGroups_wixGroupsInviteMembersReminder: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-invite_members_reminder',
		displayName: 'メンバー招待のリマインダー',
	},
	wixGroups_wixGroupsJoinRequestAccepted: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_accepted',
		displayName: 'グループへの参加リクエストが承認された時',
	},
	wixGroups_wixGroupsJoinRequestCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_created',
		displayName: 'メンバーがグループへの参加をリクエストした時',
	},
	wixGroups_wixGroupsJoinRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_rejected',
		displayName: 'グループへのメンバー参加リクエストの却下',
	},
	wixGroups_wixGroupsMemberAddedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_added_to_group',
		displayName: 'メンバーがグループに参加した時',
	},
	wixGroups_wixGroupsMemberAddedToGroupAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_added_to_group_agg',
		displayName: 'メンバーがグループに参加した時',
	},
	wixGroups_wixGroupsMemberCreatedPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post',
		displayName: 'メンバーが記事を作成した時',
	},
	wixGroups_wixGroupsMemberCreatedPostAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post_agg',
		displayName: 'メンバーが投稿を作成した時',
	},
	wixGroups_wixGroupsMemberCreatedPostComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post_comment',
		displayName: 'メンバーが投稿にコメントした時',
	},
	wixGroups_wixGroupsMemberInvitedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_invited_to_group',
		displayName: 'グループに招待されたメンバー',
	},
	wixGroups_wixGroupsMemberLeavesGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_leaves_group',
		displayName: 'メンバーがグループを退会した時',
	},
	wixGroups_wixGroupsMemberMentionedYouV3: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_mentioned_you_v3',
		displayName: 'メンバーが誰かについてメンション',
	},
	wixGroups_wixGroupsMemberMentionsSomeoneV2: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_mentions_someone_v2',
		displayName: 'Member mentions someone',
	},
	wixGroups_wixGroupsMemberPaidForGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_paid_for_group',
		displayName: 'メンバーがグループの支払いをした時',
	},
	wixGroups_wixGroupsMemberPpExpired: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_pp_expired',
		displayName: '支払いプランの有効期限が切れたため、削除されたメンバー',
	},
	wixGroups_wixGroupsMemberReactedToYourComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_comment',
		displayName: 'メンバーがコメントにリアクションした時',
	},
	wixGroups_wixGroupsMemberReactedToYourCommentAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_comment_agg',
		displayName: 'Member reacts to a comment aggregated',
	},
	wixGroups_wixGroupsMemberReactedToYourPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_post',
		displayName: 'メンバーが記事にリアクションした時',
	},
	wixGroups_wixGroupsMemberReactedToYourPostAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_post_agg',
		displayName: 'Member reacts to a post aggregated',
	},
	wixGroups_wixGroupsMemberRequestToCreateGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member-request-to-create-group',
		displayName: 'メンバーがグループの作成をリクエストした時',
	},
	wixGroups_wixGroupsMemberRoleUpdated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_role_updated',
		displayName: 'メンバーの役割が更新された時',
	},
	wixGroups_wixGroupsMembersMentioned: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-members_mentioned',
		displayName: 'Member mentions someone NOT USED',
	},
	wixGroups_wixGroupsNewMembersJoined: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-new_members_joined',
		displayName: 'グループへの新規メンバー参加（一般的な更新）',
	},
	wixGroups_wixGroupsPersonInvitedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-person_invited_to_group',
		displayName: 'グループに招待されたユーザー',
	},
	wixGroups_wixGroupsWeeklyDigest: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-weekly-digest',
		displayName: '週刊ダイジェスト',
	},
	wixInvoices_wixInvoicesInvoiceOverdue: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_overdue',
		displayName: '請求書の期限が切れた時',
	},
	wixInvoices_wixInvoicesInvoicePaid: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_paid',
		displayName: '請求書の支払いが完了した時',
	},
	wixInvoices_wixInvoicesInvoicePaymentReceived: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_payment_received',
		displayName: '請求書の支払いを受領',
	},
	wixInvoices_wixInvoicesInvoiceSent: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_sent',
		displayName: '請求書が送信された時',
	},
	wixLoyaltyProgram_function23D95Ad46Eba5E06888E164C2B9C4F5F: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'function_23d95ad4-6eba-5e06-888e-164c2b9c4f5f',
		displayName: 'Function trigger',
	},
	wixLoyaltyProgram_wixLoyaltyLoyaltyPointsReached: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-loyalty_points_reached',
		displayName: '顧客のポイントが特典を獲得できる数に達した時',
	},
	wixLoyaltyProgram_wixLoyaltyPointsAboutToExpire: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_about_to_expire',
		displayName: 'ポイントの有効期限が残り14日間',
	},
	wixLoyaltyProgram_wixLoyaltyPointsAdjusted: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_adjusted',
		displayName: 'ポイント残高が手動で更新された時',
	},
	wixLoyaltyProgram_wixLoyaltyPointsEarned: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_earned',
		displayName: '顧客がポイントを獲得した時',
	},
	wixLoyaltyProgram_wixLoyaltySocialMediaChannelFollowed: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-social_media_channel_followed',
		displayName: 'ソーシャルメディアのプロフィールをフォロー',
	},
	wixLoyaltyProgram_wixLoyaltyTierUpdated: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-tier_updated',
		displayName: '顧客がランクに到達した時',
	},
	wixOnlinePrograms_wixOnlineProgramsAccessDenied: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-access_denied',
		displayName: 'Participant access denied',
	},
	wixOnlinePrograms_wixOnlineProgramsCertificateReady: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-certificate_ready',
		displayName: '認定証がダウンロード可能',
	},
	wixOnlinePrograms_wixOnlineProgramsExportedProgramData: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-exported_program_data',
		displayName: 'Participant data exported',
	},
	wixOnlinePrograms_wixOnlineProgramsJoinRequestReceived: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-join_request_received',
		displayName: 'オンラインプログラムへの参加リクエストを受信',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberInvitedToJoinAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_invited_to_join_a_program',
		displayName: 'サイト会員がプログラムに招待された時',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinRequestApproved: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_join_request_approved',
		displayName: 'サイト会員の参加リクエストが承認された',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinRequestWasDeclined: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_join_request_was_declined',
		displayName: 'サイト会員の参加リクエストが却下された',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinsAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_joins_a_program',
		displayName: 'サイト会員がプログラムに参加した時',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberPaysForAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_pays_for_a_program',
		displayName: 'サイト会員がプログラムの支払いをした時',
	},
	wixOnlinePrograms_wixOnlineProgramsOfflinePaymentDeclined: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-offline_payment_declined',
		displayName: 'オフライン決済が却下',
	},
	wixOnlinePrograms_wixOnlineProgramsOfflinePaymentReceived: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-offline_payment_received',
		displayName: 'オンラインプログラムのオフライン決済を受信',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantCompletesAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_completes_a_program',
		displayName: '参加者がオンラインプログラムを完了した時',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantCompletesAStep: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_completes_a_step',
		displayName: '参加者がステップを完了した時',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantLeavesAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_leaves_a_program',
		displayName: '参加者がオンラインプログラムを退会する時',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantManuallyAddedToProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_manually_added_to_program',
		displayName: '参加者を手動でプログラムに追加',
	},
	wixOnlinePrograms_wixOnlineProgramsPaymentFailed: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-payment_failed',
		displayName: '支払いが失敗',
	},
	wixOnlinePrograms_wixOnlineProgramsProgramDurationEnds: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-program_duration_ends',
		displayName: 'プログラム終了日が過ぎた',
	},
	wixOnlinePrograms_wixOnlineProgramsProgramEndedWithoutAllStepsCompleted: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-program_ended_without_all_steps_completed',
		displayName: 'すべてのステップを完了せずにプログラムが終了',
	},
	wixOnlinePrograms_wixOnlineProgramsReminderToCompleteSteps: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-reminder_to_complete_steps',
		displayName: '予定されているステップ完了のリマインダー',
	},
	wixOnlinePrograms_wixOnlineProgramsVisitorBlockedFromJoining: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-visitor_blocked_from_joining',
		displayName: '訪問者の参加をブロック',
	},
	wixPortfolio_wixPortfolioProjectCreated: {
		appId: 'd90652a2-f5a1-4c7c-84c4-d4cdcc41f130',
		triggerKey: 'wix_portfolio-project_created',
		displayName: '作成された新規プロジェクト',
	},
	wixPricingPlans_fn3D1Dd01508B14300Ab44055E149550808Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_3d1dd015-08b1-4300-ab44-055e14955080_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: 'Function trigger',
		},
	wixPricingPlans_fn46138Fed7Cd244A09Bb30B78C34A397396Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_46138fed-7cd2-44a0-9bb3-0b78c34a3973_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: 'Function trigger',
		},
	wixPricingPlans_fn53231893Aead479B83Af7D9D556364928Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_53231893-aead-479b-83af-7d9d55636492_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: 'Function trigger',
		},
	wixPricingPlans_fn60C383A45Aab4CefB96363B5D8Bfe8B78Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_60c383a4-5aab-4cef-b963-63b5d8bfe8b7_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: 'Function trigger',
		},
	wixPricingPlans_fn77101Bfb43124A51A1FaA840808B231F8Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_77101bfb-4312-4a51-a1fa-a840808b231f_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: 'Function trigger',
		},
	wixPricingPlans_fnBd14Eb16Cea6446594905052A4E805C296Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_bd14eb16-cea6-4465-9490-5052a4e805c2_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: 'Function trigger',
		},
	wixPricingPlans_fnE0D72747A2874Da29Fdc0B24A5445E31B6B2579F17Ab5Fa6B0A021F2Ddbacc1E:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_e0d72747-a287-4da2-9fdc-0b24a5445e31_b6b2579f-17ab-5fa6-b0a0-21f2ddbacc1e',
			displayName: 'Function trigger',
		},
	wixPricingPlans_fnEd6Bc2E62F8E49999Fb5B56E5630Ef4296Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_ed6bc2e6-2f8e-4999-9fb5-b56e5630ef42_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: 'Function trigger',
		},
	wixPricingPlans_fnF0B130E595564Ed1A714A8Ab84C13Fb596Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_f0b130e5-9556-4ed1-a714-a8ab84c13fb5_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: 'Function trigger',
		},
	wixPricingPlans_wixPricingPlansPlanCanceled: {
		appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
		triggerKey: 'wix_pricing_plans-plan_canceled',
		displayName: 'プランが変更されたとき',
	},
	wixPricingPlans_wixPricingPlansPlanPurchased: {
		appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
		triggerKey: 'wix_pricing_plans-plan_purchased',
		displayName: 'プランが購入されたとき',
	},
	wixProposals_wixProposalsProposalAccepted: {
		appId: 'b68c2f3d-8a70-4e1f-9432-3cd1fd011965',
		triggerKey: 'wix_proposals-proposal_accepted',
		displayName: '提案書が承諾された時',
	},
	wixProposals_wixProposalsSendProposal: {
		appId: 'b68c2f3d-8a70-4e1f-9432-3cd1fd011965',
		triggerKey: 'wix_proposals-send_proposal',
		displayName: '提案書が送信された時',
	},
	wixRestaurantsOrders_wixRestaurantsOrdersOrderSubmitted: {
		appId: '13e8d036-5516-6104-b456-c8466db39542',
		triggerKey: 'wix_restaurants_orders-order_submitted',
		displayName: '送信済みの注文',
	},
	wixRestaurantsOrdersNew_restaurantsDeliveryOrderIsReady: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-delivery-order-is-ready',
		displayName: '出荷準備が完了した時',
	},
	wixRestaurantsOrdersNew_restaurantsFutureOrderApproved: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-future-order-approved',
		displayName: '事前注文の期限',
	},
	wixRestaurantsOrdersNew_restaurantsOrderCanceled: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-canceled',
		displayName: '注文がキャンセルされた時',
	},
	wixRestaurantsOrdersNew_restaurantsOrderEdited: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-edited',
		displayName: '注文が編集された時',
	},
	wixRestaurantsOrdersNew_restaurantsOrderIsInDelivery: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-in-delivery',
		displayName: '注文が配達中のとき',
	},
	wixRestaurantsOrdersNew_restaurantsOrderIsPending: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-pending',
		displayName: '注文が作成されたとき',
	},
	wixRestaurantsOrdersNew_restaurantsOrderIsReady: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-ready',
		displayName: '店頭受け取りの準備が完了した時',
	},
	wixRestaurantsOrdersNew_restaurantsOrderWasAccepted: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-was-accepted',
		displayName: '注文の受付が完了した時',
	},
	wixRestaurantsOrdersNew_restaurantsOrderWasFulfilled: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-was-fulfilled',
		displayName: '配送が完了した時',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewCreated: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-created',
		displayName: 'レビュー作成済み',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewDeleted: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-deleted',
		displayName: 'レビュー削除済み',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewModerationStatusChanged: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-moderation_status_changed',
		displayName: 'レビューの承認ステータスが変更された時',
	},
	wixReviewsApp_wixReviewsReviewRequestCreated: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'wix_reviews_review-request-created',
		displayName: 'Review request created',
	},
	wixSiteMembersApp_wixMembersMemberApproves: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_approves',
		displayName: 'サイト会員を承認した時',
	},
	wixSiteMembersApp_wixMembersMemberBlocked: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_blocked',
		displayName: 'メンバーをブロックした時',
	},
	wixSiteMembersApp_wixMembersMemberDeleted: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_deleted',
		displayName: 'メンバーは削除済み',
	},
	wixSiteMembersApp_wixMembersMemberLogsIn: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_logs_in',
		displayName: 'サイト会員がログインした時',
	},
	wixSiteMembersApp_wixMembersUouSignsUp: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-uou_signs_up',
		displayName: 'サイト訪問者が新規登録した時',
	},
	wixSiteMembersApp_wixSitemembersAppMemberActivation: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_activation',
		displayName: 'Set contact as member',
	},
	wixSiteMembersApp_wixSitemembersAppMemberEmailConfirmationRequired: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_email_confirmation_required',
		displayName: '会員のメールアドレス確認が必要な時',
	},
	wixSiteMembersApp_wixSitemembersAppMemberResetPassword: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_reset_password',
		displayName: 'サイト会員がパスワードのリセットをリクエストした時',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderPaymentAdded: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-order_payment_added',
		displayName: '注文に支払いが追加',
	},
	wixStores_fnB56C6504E65648C4A245935C334Fd52B78Eb5D7F788854DdBca71598B432Bfd8:
		{
			appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
			triggerKey:
				'fn_b56c6504-e656-48c4-a245-935c334fd52b_78eb5d7f-7888-54dd-bca7-1598b432bfd8',
			displayName: 'Function trigger',
		},
	wixStores_function2646Ba8896A8526BBada351Ee357Ad78: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'function_2646ba88-96a8-526b-bada-351ee357ad78',
		displayName: 'Function trigger',
	},
	wixStores_function424205E1E0865E1A8F2F63040Cf1B22B: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'function_424205e1-e086-5e1a-8f2f-63040cf1b22b',
		displayName: 'Function trigger',
	},
	wixStores_function64Fac571B6Ec5Bd885F526628C2A1688: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'function_64fac571-b6ec-5bd8-85f5-26628c2a1688',
		displayName: 'Function trigger',
	},
	wixStores_wixECommerceCartAbandonment: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wix_e_commerce-cart_abandonment',
		displayName: '購入手続きが完了されなかった時',
	},
	wixStores_wixECommerceOrderPlaced: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wix_e_commerce-order_placed',
		displayName: '受注',
	},
	wixStores_wixstoresLegacyOrderPlacedV1: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-legacy_order_placed_v1',
		displayName: 'ショップで商品が注文された時',
	},
	wixStores_wixstoresPaymentAdded: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-payment_added',
		displayName: 'クレジットカード請求',
	},
	wixTableReservations_reservationStarted: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'reservation_started',
		displayName: '座席予約が開始された時',
	},
	wixTableReservations_reservationWasCanceled: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'reservation_was_canceled',
		displayName: '座席予約がキャンセルされた時',
	},
	wixTableReservations_uouCreatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'uou_created_reservation',
		displayName: 'ゲストが座席を予約',
	},
	wixTableReservations_userCreatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'user_created_reservation',
		displayName: '座席予約が手動で追加された時',
	},
	wixTableReservations_userUpdatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'user_updated_reservation',
		displayName: '座席予約時間が更新されました',
	},
	workflows_wixWorkflowsCardAddedOrMoved: {
		appId: 'ea2821fc-7d97-40a9-9f75-772f29178430',
		triggerKey: 'wix_workflows-card_added_or_moved',
		displayName: 'カードが作成または移動された時',
	},
};
