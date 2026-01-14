export const wixAutomationsTriggers: {
	[key: string]: { appId: string; triggerKey: string; displayName: string };
} = {
	backInStockRequests_wixECommerceBackInStockRequestCreatedStores: {
		appId: '16be6c71-d061-4f56-8cda-c6aa911d1832',
		triggerKey: 'wix_e_commerce-back_in_stock_request_created_stores',
		displayName: 'Solicitação de estoque criada',
	},
	backInStockRequests_wixECommerceBackInStockStores: {
		appId: '16be6c71-d061-4f56-8cda-c6aa911d1832',
		triggerKey: 'wix_e_commerce-back_in_stock_stores',
		displayName: 'Produto está de volta ao estoque',
	},
	cms_cmsDatasetFormSubmitted: {
		appId: '1973457f-c021-4da5-941f-58444ff761d4',
		triggerKey: 'cms-dataset_form_submitted',
		displayName: 'Formulário do CMS é enviado',
	},
	contacts_contactsContactAssigned: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-contact_assigned',
		displayName: 'Contato atribuído',
	},
	contacts_contactsLabelAddedToContact: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-label_added_to_contact',
		displayName: 'Etiqueta é adicionada ao contato',
	},
	contacts_contactsLabelRemovedFromContact: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-label_removed_from_contact',
		displayName: 'Etiqueta é removida do contato',
	},
	contacts_contactsNewContactWasCreated: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-new_contact_was_created',
		displayName: 'Novo contato é criado',
	},
	inbox_wixChatMessageReceiveFromUou: {
		appId: '141fbfae-511e-6817-c9f0-48993a7547d1',
		triggerKey: 'wix_chat-message_receive_from_uou',
		displayName: 'Mensagem é recebida no Inbox (chat ou email)',
	},
	inbox_wixChatMessageSentToUou: {
		appId: '141fbfae-511e-6817-c9f0-48993a7547d1',
		triggerKey: 'wix_chat-message_sent_to_uou',
		displayName: 'Mensagem do chat é enviada',
	},
	oldWixFormsAndPayments_wixFormsFormSubmit: {
		appId: '14ce1214-b278-a7e4-1373-00cebd1bef7c',
		triggerKey: 'wix_forms-form_submit',
		displayName: 'Formulário é enviado',
	},
	payLinks_wixPaymentLinksPaymentLinkPaymentReceived: {
		appId: '324cf725-53d9-4bb2-b8f6-0c8ec9a77f45',
		triggerKey: 'wix_payment_links-payment_link_payment_received',
		displayName: 'Pagamento é recebido',
	},
	payLinks_wixPaymentLinksSendPaymentLink: {
		appId: '324cf725-53d9-4bb2-b8f6-0c8ec9a77f45',
		triggerKey: 'wix_payment_links-send_payment_link',
		displayName: 'Enviar um link de pagamento',
	},
	priceQuotes_wixPriceQuoteQuoteAccepted: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_accepted',
		displayName: 'Orçamento é aceito',
	},
	priceQuotes_wixPriceQuoteQuoteExpired: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_expired',
		displayName: 'Orçamento expirou',
	},
	priceQuotes_wixPriceQuoteQuoteSent: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_sent',
		displayName: 'Orçamento é enviado',
	},
	recurringInvoices_wixInvoicesRecurringInvoiceCanceled: {
		appId: '35aec784-bbec-4e6e-abcb-d3d724af52cf',
		triggerKey: 'wix_invoices-recurring_invoice_canceled',
		displayName: 'Pagamento recorrente é cancelado',
	},
	recurringInvoices_wixInvoicesRecurringInvoiceCreated: {
		appId: '35aec784-bbec-4e6e-abcb-d3d724af52cf',
		triggerKey: 'wix_invoices-recurring_invoice_created',
		displayName: 'Pagamento recorrente começa',
	},
	segments_segmentsContactEntersSegment: {
		appId: 'ee070097-0850-4f23-ad8c-3cdd4efd5244',
		triggerKey: 'segments-contact_enters_segment',
		displayName: 'Contato entra no segmento',
	},
	segments_segmentsContactLeavesSegment: {
		appId: 'ee070097-0850-4f23-ad8c-3cdd4efd5244',
		triggerKey: 'segments-contact_leaves_segment',
		displayName: 'Contato sai do segmento',
	},
	subscriptions_billingDateUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'billing_date_updated',
		displayName: 'Data do pagamento da assinatura atualizada',
	},
	subscriptions_customerPaymentMethodUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'customer_payment_method_updated',
		displayName: 'Método de pagamento do cliente atualizado',
	},
	subscriptions_failedPaymentGracePeriodStarted: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'failed_payment_grace_period_started',
		displayName: 'Falha no pagamento (início do período de carência)',
	},
	subscriptions_itemPriceUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'item_price_updated',
		displayName: 'Preço do item da assinatura atualizado',
	},
	subscriptions_paymentSucceededGracePeriodEnds: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'payment_succeeded_grace_period_ends',
		displayName: 'Pagamento bem-sucedido (período de carência encerrado)',
	},
	tasks_tasksTaskOverdue: {
		appId: '146c0d71-352e-4464-9a03-2e868aabe7b9',
		triggerKey: 'tasks-task_overdue',
		displayName: 'Tarefa está atrasada',
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
		displayName: 'Novo comentário no post do blog',
	},
	wixBlog_wixBlogBlogPostLike: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-blog_post_like',
		displayName: 'Curtida no post do blog',
	},
	wixBlog_wixBlogNewBlogPost: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-new_blog_post',
		displayName: 'Novo post do blog é publicado',
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
		displayName: 'Cliente faz check-in',
	},
	wixBookings_wixBookingsAppointmentConfirmed: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_confirmed',
		displayName: 'Solicitação de agendamento é aprovada',
	},
	wixBookings_wixBookingsAppointmentDeclined: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_declined',
		displayName: 'Solicitação de agendamento é recusada',
	},
	wixBookings_wixBookingsAppointmentRequiresConfirmation: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_requires_confirmation',
		displayName: 'Agendamento é solicitado',
	},
	wixBookings_wixBookingsBookingCanceled: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-booking_canceled',
		displayName: 'Agendamento é cancelado',
	},
	wixBookings_wixBookingsCourseSessionsUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-course_sessions_updated',
		displayName: 'Curso é atualizado',
	},
	wixBookings_wixBookingsDoubleBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-double_booked',
		displayName: 'Sessão com reserva duplicada',
	},
	wixBookings_wixBookingsFailedToApplyBookingFee: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-failed_to_apply_booking_fee',
		displayName: 'Falha ao aplicar taxa de agendamento',
	},
	wixBookings_wixBookingsFailedToCollectAppliedBookingFees: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-failed_to_collect_applied_booking_fees',
		displayName: 'Failed to collect applied booking fees',
	},
	wixBookings_wixBookingsNoSessionsLeft: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-no_sessions_left',
		displayName: 'Nenhuma sessão restante',
	},
	wixBookings_wixBookingsNoShow: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-no_show',
		displayName: 'Cliente é marcado como "Não compareceu"',
	},
	wixBookings_wixBookingsNthCheckIn: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-nth_check_in',
		displayName: 'Cliente fez check-in X vezes',
	},
	wixBookings_wixBookingsSessionEnds: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_ends',
		displayName: 'Sessão termina',
	},
	wixBookings_wixBookingsSessionsBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-sessions_booked',
		displayName: 'Sessão é agendada',
	},
	wixBookings_wixBookingsSessionStarts: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_starts',
		displayName: 'Sessão começa',
	},
	wixBookings_wixBookingsSessionUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_updated',
		displayName: 'Agendamento ou aula é atualizada',
	},
	wixChat_wixChatChatFormSubmitted: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-chat_form_submitted',
		displayName: 'Pre-chat form submitted',
	},
	wixChat_wixChatNewChatMessage: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-new_chat_message',
		displayName: 'Mensagem do chat recebida',
	},
	wixChat_wixChatVisitorOnLiveSite: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-visitor_on_live_site',
		displayName: 'Visitante no site',
	},
	wixDonations_wixDonationsDonationApproved: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_approved',
		displayName: 'Doação é feita',
	},
	wixDonations_wixDonationsDonationCycle: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_cycle',
		displayName: 'Doação recorrente é cobrada',
	},
	wixDonations_wixDonationsDonationSubscriptionCanceled: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_subscription_canceled',
		displayName: 'Doação recorrente é cancelada',
	},
	wixEventsTickets_domainEventsWixEventsGuestsV1GuestGuestCheckedIn: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.guests.v1.guest-guest_checked_in',
		displayName: 'Convidado fez check-in',
	},
	wixEventsTickets_domainEventsWixEventsGuestsV1GuestGuestEventStarts: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.guests.v1.guest-guest_event_starts',
		displayName: 'Evento começa',
	},
	wixEventsTickets_domainEventsWixEventsV3EventPublished: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.event-published',
		displayName: 'Evento é publicado',
	},
	wixEventsTickets_domainEventsWixEventsV3TicketDefinitionSaleEnded: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.ticket_definition-sale_ended',
		displayName: 'Venda de ingressos é encerrada',
	},
	wixEventsTickets_domainEventsWixEventsV3TicketDefinitionSaleStarted: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.ticket_definition-sale_started',
		displayName: 'Início da venda de ingressos',
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
		displayName: 'Evento termina',
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
		displayName: 'Evento cancelado',
	},
	wixEventsTickets_wixEventsNotificationsEventReminder: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_event_reminder',
		displayName: 'A data do lembrete do evento chegou',
	},
	wixEventsTickets_wixEventsNotificationsNewSpotsAvailable: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_new_spots_available',
		displayName: 'Novo vaga aberta para convidados na lista de espera',
	},
	wixEventsTickets_wixEventsNotificationsOrderConfirmation: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_order_confirmation',
		displayName: 'Pedido é feito',
	},
	wixEventsTickets_wixEventsNotificationsOrderConfirmationWithTicketsLink: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_order_confirmation_with_tickets_link',
		displayName: 'Pedido confirmado, mas o ingresso não foi gerado',
	},
	wixEventsTickets_wixEventsNotificationsRsvpConfirmation: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_rsvp_confirmation',
		displayName: 'RSVP confirmado',
	},
	wixEventsTickets_wixEventsTicketPurchase: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-ticket_purchase',
		displayName: 'Ingresso é adquirido',
	},
	wixEventsTickets_wixEventsUouAddedToWaitlist: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-uou_added_to_waitlist',
		displayName: 'Convidado é adicionado à lista de espera',
	},
	wixEventsTickets_wixEventsUouRsvp: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-uou_rsvp',
		displayName: 'RSVP de convidado',
	},
	wixFileShare_wixFileShareAccessToFolderApproved: {
		appId: '1537b24e-29d1-6d8f-b8e1-d6860f2f70b9',
		triggerKey: 'wix_file_share-access_to_folder_approved',
		displayName: 'Acesso à pasta concedido',
	},
	wixFileShare_wixFileShareRequestedAccessToFolder: {
		appId: '1537b24e-29d1-6d8f-b8e1-d6860f2f70b9',
		triggerKey: 'wix_file_share-requested_access_to_folder',
		displayName: 'Acesso à pasta solicitado',
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
		displayName: 'Formulário é enviado',
	},
	wixForum_wixForumForumCommentDeleted: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_comment_deleted',
		displayName: 'Comentário do fórum excluído',
	},
	wixForum_wixForumForumCommentPublished: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_comment_published',
		displayName: 'Comentário do fórum é publicado',
	},
	wixForum_wixForumForumPostLiked: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_post_liked',
		displayName: 'Nova curtida no post do fórum',
	},
	wixForum_wixForumForumPostUnliked: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_post_unliked',
		displayName: 'Removeu reação do post do fórum',
	},
	wixForum_wixForumNewPost: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-new_post',
		displayName: 'Post do fórum é publicado',
	},
	wixForum_wixForumReactedToComment: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-reacted_to_comment',
		displayName: 'Reagiu ao comentário do fórum',
	},
	wixForum_wixForumRemovedReactionFromForumComment: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-removed_reaction_from_forum_comment',
		displayName: 'Removeu reação do comentário do fórum',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestApproved: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-approved',
		displayName: 'Group Request Approved DE',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-created',
		displayName: 'Membro solicita criar um grupo',
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
		displayName: 'Lembrete para criar grupo',
	},
	wixGroups_wixGroupsFolloweeCreatesAPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-followee_creates_a_post',
		displayName: 'Alguém que você segue cria um post',
	},
	wixGroups_wixGroupsGroupCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_created',
		displayName: 'Novo grupo criado',
	},
	wixGroups_wixGroupsGroupRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_request_rejected',
		displayName: 'Group create request declined',
	},
	wixGroups_wixGroupsGroupUpdated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_updated',
		displayName: 'Grupo atualizado',
	},
	wixGroups_wixGroupsInviteMembersReminder: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-invite_members_reminder',
		displayName: 'Lembrete para convidar membros',
	},
	wixGroups_wixGroupsJoinRequestAccepted: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_accepted',
		displayName: 'Solicitação de entrada em um grupo aprovada',
	},
	wixGroups_wixGroupsJoinRequestCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_created',
		displayName: 'Membro solicita entrar em um grupo',
	},
	wixGroups_wixGroupsJoinRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_rejected',
		displayName: 'Solicitação de membro para entrar no grupo é recusada',
	},
	wixGroups_wixGroupsMemberAddedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_added_to_group',
		displayName: 'Membro entra em um grupo',
	},
	wixGroups_wixGroupsMemberAddedToGroupAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_added_to_group_agg',
		displayName: 'Membro entra em um grupo',
	},
	wixGroups_wixGroupsMemberCreatedPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post',
		displayName: 'Membro cria um post',
	},
	wixGroups_wixGroupsMemberCreatedPostAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post_agg',
		displayName: 'Membros criam posts',
	},
	wixGroups_wixGroupsMemberCreatedPostComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post_comment',
		displayName: 'Membro comenta em um post',
	},
	wixGroups_wixGroupsMemberInvitedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_invited_to_group',
		displayName: 'Membro convidado para o grupo',
	},
	wixGroups_wixGroupsMemberLeavesGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_leaves_group',
		displayName: 'Membro sai de um grupo',
	},
	wixGroups_wixGroupsMemberMentionedYouV3: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_mentioned_you_v3',
		displayName: 'Membro mencionou alguém',
	},
	wixGroups_wixGroupsMemberMentionsSomeoneV2: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_mentions_someone_v2',
		displayName: 'Member mentions someone',
	},
	wixGroups_wixGroupsMemberPaidForGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_paid_for_group',
		displayName: 'Membro paga por um grupo',
	},
	wixGroups_wixGroupsMemberPpExpired: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_pp_expired',
		displayName: 'Membro removido porque o plano de pagamento expirou',
	},
	wixGroups_wixGroupsMemberReactedToYourComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_comment',
		displayName: 'Membro reage a um comentário',
	},
	wixGroups_wixGroupsMemberReactedToYourCommentAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_comment_agg',
		displayName: 'Member reacts to a comment aggregated',
	},
	wixGroups_wixGroupsMemberReactedToYourPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_post',
		displayName: 'Membro reage a um post',
	},
	wixGroups_wixGroupsMemberReactedToYourPostAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_post_agg',
		displayName: 'Member reacts to a post aggregated',
	},
	wixGroups_wixGroupsMemberRequestToCreateGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member-request-to-create-group',
		displayName: 'Membro solicita criar um grupo',
	},
	wixGroups_wixGroupsMemberRoleUpdated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_role_updated',
		displayName: 'Função do membro atualizada',
	},
	wixGroups_wixGroupsMembersMentioned: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-members_mentioned',
		displayName: 'Member mentions someone NOT USED',
	},
	wixGroups_wixGroupsNewMembersJoined: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-new_members_joined',
		displayName: 'Grupo tem nova atualização genérica de membros',
	},
	wixGroups_wixGroupsPersonInvitedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-person_invited_to_group',
		displayName: 'Pessoa convidada para o grupo',
	},
	wixGroups_wixGroupsWeeklyDigest: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-weekly-digest',
		displayName: 'Resumo semanal',
	},
	wixInvoices_wixInvoicesInvoiceOverdue: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_overdue',
		displayName: 'Fatura está vencida',
	},
	wixInvoices_wixInvoicesInvoicePaid: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_paid',
		displayName: 'Fatura é paga',
	},
	wixInvoices_wixInvoicesInvoicePaymentReceived: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_payment_received',
		displayName: 'Pagamento da fatura é recebido',
	},
	wixInvoices_wixInvoicesInvoiceSent: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_sent',
		displayName: 'Fatura é enviada',
	},
	wixLoyaltyProgram_function23D95Ad46Eba5E06888E164C2B9C4F5F: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'function_23d95ad4-6eba-5e06-888e-164c2b9c4f5f',
		displayName: 'Function trigger',
	},
	wixLoyaltyProgram_wixLoyaltyLoyaltyPointsReached: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-loyalty_points_reached',
		displayName: 'Cliente tem pontos suficientes para recompensas',
	},
	wixLoyaltyProgram_wixLoyaltyPointsAboutToExpire: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_about_to_expire',
		displayName: 'Pontos expiram em 14 dias',
	},
	wixLoyaltyProgram_wixLoyaltyPointsAdjusted: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_adjusted',
		displayName: 'Saldo de pontos ajustado manualmente',
	},
	wixLoyaltyProgram_wixLoyaltyPointsEarned: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_earned',
		displayName: 'Cliente ganha pontos',
	},
	wixLoyaltyProgram_wixLoyaltySocialMediaChannelFollowed: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-social_media_channel_followed',
		displayName: 'Perfil de rede social seguido',
	},
	wixLoyaltyProgram_wixLoyaltyTierUpdated: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-tier_updated',
		displayName: 'Cliente entra no nível',
	},
	wixOnlinePrograms_wixOnlineProgramsAccessDenied: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-access_denied',
		displayName: 'Participant access denied',
	},
	wixOnlinePrograms_wixOnlineProgramsCertificateReady: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-certificate_ready',
		displayName: 'Certificado está disponível para download',
	},
	wixOnlinePrograms_wixOnlineProgramsExportedProgramData: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-exported_program_data',
		displayName: 'Participant data exported',
	},
	wixOnlinePrograms_wixOnlineProgramsJoinRequestReceived: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-join_request_received',
		displayName: 'Solicitação de participação é recebida',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberInvitedToJoinAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_invited_to_join_a_program',
		displayName: 'Membro é convidado a participar de um programa',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinRequestApproved: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_join_request_approved',
		displayName: 'Solicitação de participação do membro é aprovada',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinRequestWasDeclined: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_join_request_was_declined',
		displayName: 'Solicitação de participação do membro é recusada',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinsAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_joins_a_program',
		displayName: 'Membro participa de um programa',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberPaysForAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_pays_for_a_program',
		displayName: 'Membro paga por um programa',
	},
	wixOnlinePrograms_wixOnlineProgramsOfflinePaymentDeclined: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-offline_payment_declined',
		displayName: 'Pagamento offline é recusado',
	},
	wixOnlinePrograms_wixOnlineProgramsOfflinePaymentReceived: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-offline_payment_received',
		displayName: 'Pagamento offline do programa é recebido',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantCompletesAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_completes_a_program',
		displayName: 'Participante conclui um programa',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantCompletesAStep: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_completes_a_step',
		displayName: 'Participante conclui uma etapa',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantLeavesAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_leaves_a_program',
		displayName: 'Participante sai de um programa',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantManuallyAddedToProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_manually_added_to_program',
		displayName: 'Participante é adicionado manualmente ao programa',
	},
	wixOnlinePrograms_wixOnlineProgramsPaymentFailed: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-payment_failed',
		displayName: 'Pagamento falhou',
	},
	wixOnlinePrograms_wixOnlineProgramsProgramDurationEnds: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-program_duration_ends',
		displayName: 'Data de término do programa já passou',
	},
	wixOnlinePrograms_wixOnlineProgramsProgramEndedWithoutAllStepsCompleted: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-program_ended_without_all_steps_completed',
		displayName: 'Programa termina sem que todas as etapas sejam concluídas',
	},
	wixOnlinePrograms_wixOnlineProgramsReminderToCompleteSteps: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-reminder_to_complete_steps',
		displayName: 'Lembrete para concluir etapas programadas',
	},
	wixOnlinePrograms_wixOnlineProgramsVisitorBlockedFromJoining: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-visitor_blocked_from_joining',
		displayName: 'Visitante é bloqueado de participar',
	},
	wixPortfolio_wixPortfolioProjectCreated: {
		appId: 'd90652a2-f5a1-4c7c-84c4-d4cdcc41f130',
		triggerKey: 'wix_portfolio-project_created',
		displayName: 'Novo projeto criado',
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
		displayName: 'Plano é cancelado',
	},
	wixPricingPlans_wixPricingPlansPlanPurchased: {
		appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
		triggerKey: 'wix_pricing_plans-plan_purchased',
		displayName: 'Plano é adquirido',
	},
	wixProposals_wixProposalsProposalAccepted: {
		appId: 'b68c2f3d-8a70-4e1f-9432-3cd1fd011965',
		triggerKey: 'wix_proposals-proposal_accepted',
		displayName: 'Proposta aceita',
	},
	wixProposals_wixProposalsSendProposal: {
		appId: 'b68c2f3d-8a70-4e1f-9432-3cd1fd011965',
		triggerKey: 'wix_proposals-send_proposal',
		displayName: 'Proposta enviada',
	},
	wixRestaurantsOrders_wixRestaurantsOrdersOrderSubmitted: {
		appId: '13e8d036-5516-6104-b456-c8466db39542',
		triggerKey: 'wix_restaurants_orders-order_submitted',
		displayName: 'Pedido enviado',
	},
	wixRestaurantsOrdersNew_restaurantsDeliveryOrderIsReady: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-delivery-order-is-ready',
		displayName: 'Pedido de entrega pronto',
	},
	wixRestaurantsOrdersNew_restaurantsFutureOrderApproved: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-future-order-approved',
		displayName: 'Pedido futuro deve ser atendido até',
	},
	wixRestaurantsOrdersNew_restaurantsOrderCanceled: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-canceled',
		displayName: 'Pedido é cancelado',
	},
	wixRestaurantsOrdersNew_restaurantsOrderEdited: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-edited',
		displayName: 'Pedido é editado',
	},
	wixRestaurantsOrdersNew_restaurantsOrderIsInDelivery: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-in-delivery',
		displayName: 'Pedido sai para entrega',
	},
	wixRestaurantsOrdersNew_restaurantsOrderIsPending: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-pending',
		displayName: 'Pedido é criado',
	},
	wixRestaurantsOrdersNew_restaurantsOrderIsReady: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-ready',
		displayName: 'Pedido de retirada pronto',
	},
	wixRestaurantsOrdersNew_restaurantsOrderWasAccepted: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-was-accepted',
		displayName: 'Pedido aceito',
	},
	wixRestaurantsOrdersNew_restaurantsOrderWasFulfilled: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-was-fulfilled',
		displayName: 'Pedido atendido',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewCreated: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-created',
		displayName: 'Avaliação é criada',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewDeleted: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-deleted',
		displayName: 'Avaliação é excluída',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewModerationStatusChanged: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-moderation_status_changed',
		displayName: 'Status da moderação da avaliação é alterado',
	},
	wixReviewsApp_wixReviewsReviewRequestCreated: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'wix_reviews_review-request-created',
		displayName: 'Review request created',
	},
	wixSiteMembersApp_wixMembersMemberApproves: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_approves',
		displayName: 'Membro é aprovado',
	},
	wixSiteMembersApp_wixMembersMemberBlocked: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_blocked',
		displayName: 'Membro é bloqueado',
	},
	wixSiteMembersApp_wixMembersMemberDeleted: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_deleted',
		displayName: 'Membro é excluído',
	},
	wixSiteMembersApp_wixMembersMemberLogsIn: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_logs_in',
		displayName: 'Membro faz login',
	},
	wixSiteMembersApp_wixMembersUouSignsUp: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-uou_signs_up',
		displayName: 'Visitante se inscreve no seu site',
	},
	wixSiteMembersApp_wixSitemembersAppMemberActivation: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_activation',
		displayName: 'Set contact as member',
	},
	wixSiteMembersApp_wixSitemembersAppMemberEmailConfirmationRequired: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_email_confirmation_required',
		displayName: 'Confirmação de email de membro necessária',
	},
	wixSiteMembersApp_wixSitemembersAppMemberResetPassword: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_reset_password',
		displayName: 'Membro do site pede para redefinir senha',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderPaymentAdded: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-order_payment_added',
		displayName: 'Pagamento adicionado ao pedido',
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
		displayName: 'Checkout é abandonado',
	},
	wixStores_wixECommerceOrderPlaced: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wix_e_commerce-order_placed',
		displayName: 'Pedido é feito',
	},
	wixStores_wixstoresLegacyOrderPlacedV1: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-legacy_order_placed_v1',
		displayName: 'Pedido é feito na loja',
	},
	wixStores_wixstoresPaymentAdded: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-payment_added',
		displayName: 'O cartão de crédito é cobrado',
	},
	wixTableReservations_reservationStarted: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'reservation_started',
		displayName: 'Reserva começa',
	},
	wixTableReservations_reservationWasCanceled: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'reservation_was_canceled',
		displayName: 'Reserva de mesa é cancelada',
	},
	wixTableReservations_uouCreatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'uou_created_reservation',
		displayName: 'Mesa é reservada pelo cliente',
	},
	wixTableReservations_userCreatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'user_created_reservation',
		displayName: 'Reserva é adicionada manualmente',
	},
	wixTableReservations_userUpdatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'user_updated_reservation',
		displayName: 'Horário da reserva de mesa é atualizado',
	},
	workflows_wixWorkflowsCardAddedOrMoved: {
		appId: 'ea2821fc-7d97-40a9-9f75-772f29178430',
		triggerKey: 'wix_workflows-card_added_or_moved',
		displayName: 'Cartão é adicionado ou movido',
	},
};
