export const wixAutomationsTriggers: {
	[key: string]: { appId: string; triggerKey: string; displayName: string };
} = {
	backInStockRequests_wixECommerceBackInStockRequestCreatedStores: {
		appId: '16be6c71-d061-4f56-8cda-c6aa911d1832',
		triggerKey: 'wix_e_commerce-back_in_stock_request_created_stores',
		displayName: 'Richiesta di nuova disponibilità creata',
	},
	backInStockRequests_wixECommerceBackInStockStores: {
		appId: '16be6c71-d061-4f56-8cda-c6aa911d1832',
		triggerKey: 'wix_e_commerce-back_in_stock_stores',
		displayName: 'Prodotto di nuovo disponibile',
	},
	cmsDeprecated_cmsDatasetFormSubmitted: {
		appId: '1973457f-c021-4da5-941f-58444ff761d4',
		triggerKey: 'cms-dataset_form_submitted',
		displayName: 'Modulo Gestore contenuti inviato',
	},
	contacts_contactsContactAssigned: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-contact_assigned',
		displayName: 'Contatto assegnato',
	},
	contacts_contactsLabelAddedToContact: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-label_added_to_contact',
		displayName: 'Etichetta aggiunta al contatto',
	},
	contacts_contactsLabelRemovedFromContact: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-label_removed_from_contact',
		displayName: 'Etichetta rimossa dal contatto',
	},
	contacts_contactsNewContactWasCreated: {
		appId: '74bff718-5977-47f2-9e5f-a9fd0047fd1f',
		triggerKey: 'contacts-new_contact_was_created',
		displayName: 'Creazione di un nuovo contatto',
	},
	inbox_wixChatMessageReceiveFromUou: {
		appId: '141fbfae-511e-6817-c9f0-48993a7547d1',
		triggerKey: 'wix_chat-message_receive_from_uou',
		displayName: 'Messaggio ricevuto (chat o email)',
	},
	inbox_wixChatMessageSentToUou: {
		appId: '141fbfae-511e-6817-c9f0-48993a7547d1',
		triggerKey: 'wix_chat-message_sent_to_uou',
		displayName: 'Messaggio in chat inviato',
	},
	oldWixFormsAndPayments_wixFormsFormSubmit: {
		appId: '14ce1214-b278-a7e4-1373-00cebd1bef7c',
		triggerKey: 'wix_forms-form_submit',
		displayName: 'Modulo inviato',
	},
	payLinks_wixPaymentLinksPaymentLinkPaymentReceived: {
		appId: '324cf725-53d9-4bb2-b8f6-0c8ec9a77f45',
		triggerKey: 'wix_payment_links-payment_link_payment_received',
		displayName: 'Pagamento ricevuto',
	},
	payLinks_wixPaymentLinksSendPaymentLink: {
		appId: '324cf725-53d9-4bb2-b8f6-0c8ec9a77f45',
		triggerKey: 'wix_payment_links-send_payment_link',
		displayName: 'Invia un link di pagamento',
	},
	priceQuotes_wixPriceQuoteQuoteAccepted: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_accepted',
		displayName: 'Preventivo accettato',
	},
	priceQuotes_wixPriceQuoteQuoteExpired: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_expired',
		displayName: 'Preventivo scaduto',
	},
	priceQuotes_wixPriceQuoteQuoteSent: {
		appId: '55cd9036-36bb-480b-8ddc-afda3cb2eb8d',
		triggerKey: 'wix_price_quote-quote_sent',
		displayName: 'Preventivo inviato',
	},
	recurringInvoices_wixInvoicesRecurringInvoiceCanceled: {
		appId: '35aec784-bbec-4e6e-abcb-d3d724af52cf',
		triggerKey: 'wix_invoices-recurring_invoice_canceled',
		displayName: 'Pagamento ricorrente annullato',
	},
	recurringInvoices_wixInvoicesRecurringInvoiceCreated: {
		appId: '35aec784-bbec-4e6e-abcb-d3d724af52cf',
		triggerKey: 'wix_invoices-recurring_invoice_created',
		displayName: 'Inizio pagamento ricorrente',
	},
	segments_segmentsContactEntersSegment: {
		appId: 'ee070097-0850-4f23-ad8c-3cdd4efd5244',
		triggerKey: 'segments-contact_enters_segment',
		displayName: 'Il contatto entra nel segmento',
	},
	segments_segmentsContactLeavesSegment: {
		appId: 'ee070097-0850-4f23-ad8c-3cdd4efd5244',
		triggerKey: 'segments-contact_leaves_segment',
		displayName: 'Il contatto lascia il segmento',
	},
	subscriptions_billingDateUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'billing_date_updated',
		displayName: 'Data pagamento abbonamento aggiornata',
	},
	subscriptions_customerPaymentMethodUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'customer_payment_method_updated',
		displayName: 'Metodo di pagamento del cliente aggiornato',
	},
	subscriptions_failedPaymentGracePeriodStarted: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'failed_payment_grace_period_started',
		displayName: 'Pagamento non riuscito - inizia il periodo di grazia',
	},
	subscriptions_itemPriceUpdated: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'item_price_updated',
		displayName: 'Prezzo elemento dell`abbonamento aggiornato',
	},
	subscriptions_paymentSucceededGracePeriodEnds: {
		appId: '8725b255-2aa2-4a53-b76d-7d3c363aaeea',
		triggerKey: 'payment_succeeded_grace_period_ends',
		displayName: 'Pagamento riuscito: termine periodo di grazia',
	},
	tasks_tasksTaskOverdue: {
		appId: '146c0d71-352e-4464-9a03-2e868aabe7b9',
		triggerKey: 'tasks-task_overdue',
		displayName: 'Attività scaduta',
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
		displayName: 'Nuovo commento al post del blog',
	},
	wixBlog_wixBlogBlogPostLike: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-blog_post_like',
		displayName: '"Mi piace" al post del blog',
	},
	wixBlog_wixBlogNewBlogPost: {
		appId: '14bcded7-0066-7c35-14d7-466cb3f09103',
		triggerKey: 'wix_blog-new_blog_post',
		displayName: 'Nuovo post pubblicato sul blog',
	},
	wixBookings_fn36Fd6F5F469040FeB1D2771A7D7Ce688F85Ee74AB9Ce56B9Bff65147520Ccf8C:
		{
			appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
			triggerKey:
				'fn_36fd6f5f-4690-40fe-b1d2-771a7d7ce688_f85ee74a-b9ce-56b9-bff6-5147520ccf8c',
			displayName: 'Trigger Funzione',
		},
	wixBookings_function110369A31027526EB16AC016F9B889B1: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'function_110369a3-1027-526e-b16a-c016f9b889b1',
		displayName: 'Trigger Funzione',
	},
	wixBookings_wixBookingsAnyCheckIn: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-any_check_in',
		displayName: 'Cliente presente',
	},
	wixBookings_wixBookingsAppointmentConfirmed: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_confirmed',
		displayName: 'Richiesta di appuntamento approvata',
	},
	wixBookings_wixBookingsAppointmentDeclined: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_declined',
		displayName: 'Richiesta di appuntamento rifiutata',
	},
	wixBookings_wixBookingsAppointmentRequiresConfirmation: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointment_requires_confirmation',
		displayName: 'Appuntamento richiesto',
	},
	wixBookings_wixBookingsAppointmentsConfirmed: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointments_confirmed',
		displayName: 'Appointment requests approved (Multi-service)',
	},
	wixBookings_wixBookingsAppointmentsDeclined: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointments_declined',
		displayName: 'Appointment requests declined (Multi-service)',
	},
	wixBookings_wixBookingsAppointmentsRequireConfirmation: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-appointments_require_confirmation',
		displayName: 'Appointments requested (Multi-service)',
	},
	wixBookings_wixBookingsBookingCanceled: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-booking_canceled',
		displayName: 'Prenotazione annullata',
	},
	wixBookings_wixBookingsBookingsCanceled: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-bookings_canceled',
		displayName: 'Booking canceled (Multi-service)',
	},
	wixBookings_wixBookingsCourseSessionsUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-course_sessions_updated',
		displayName: 'Corso aggiornato',
	},
	wixBookings_wixBookingsDoubleBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-double_booked',
		displayName: 'Sessione prenotata due volte',
	},
	wixBookings_wixBookingsFailedToApplyBookingFee: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-failed_to_apply_booking_fee',
		displayName: 'Impossibile applicare la commissione di prenotazione',
	},
	wixBookings_wixBookingsFailedToCollectAppliedBookingFees: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-failed_to_collect_applied_booking_fees',
		displayName:
			'Impossibile riscuotere le commissioni di prenotazione applicate',
	},
	wixBookings_wixBookingsNoSessionsLeft: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-no_sessions_left',
		displayName: 'Nessuna sessione rimasta',
	},
	wixBookings_wixBookingsNoShow: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-no_show',
		displayName: 'Cliente segnato come "assente"',
	},
	wixBookings_wixBookingsNthCheckIn: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-nth_check_in',
		displayName: 'Il client ha effettuato il check-in X volte',
	},
	wixBookings_wixBookingsRefundFailed: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-refund_failed',
		displayName: 'Refund Failed',
	},
	wixBookings_wixBookingsSavedCardCharged: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-saved_card_charged',
		displayName: 'Saved card charged',
	},
	wixBookings_wixBookingsSavedCardDeclined: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-saved_card_declined',
		displayName: 'Saved card declined',
	},
	wixBookings_wixBookingsSessionEnds: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_ends',
		displayName: 'Fine sessione',
	},
	wixBookings_wixBookingsSessionsBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-sessions_booked',
		displayName: 'Sessione prenotata',
	},
	wixBookings_wixBookingsSessionStarts: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_starts',
		displayName: 'Inizio sessione',
	},
	wixBookings_wixBookingsSessionsUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-sessions_updated',
		displayName: 'Appointments or classes updated (Multi-service)',
	},
	wixBookings_wixBookingsSessionUpdated: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-session_updated',
		displayName: 'Appuntamento o lezione aggiornati',
	},
	wixBookings_wixBookingsUnifiedSessionsBooked: {
		appId: '13d21c63-b5ec-5912-8397-c3a5ddb27a97',
		triggerKey: 'wix_bookings-unified_sessions_booked',
		displayName: 'Sessions booked (Multi-service)',
	},
	wixChat_wixChatChatFormSubmitted: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-chat_form_submitted',
		displayName: 'Pre-chat form submitted',
	},
	wixChat_wixChatNewChatMessage: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-new_chat_message',
		displayName: 'Chat message received',
	},
	wixChat_wixChatVisitorOnLiveSite: {
		appId: '14517e1a-3ff0-af98-408e-2bd6953c36a2',
		triggerKey: 'wix_chat-visitor_on_live_site',
		displayName: 'Visitor on site',
	},
	wixDonations_wixDonationsDonationApproved: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_approved',
		displayName: 'La donazione viene fatta',
	},
	wixDonations_wixDonationsDonationCycle: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_cycle',
		displayName: 'La donazione ricorrente viene addebitata',
	},
	wixDonations_wixDonationsDonationSubscriptionCanceled: {
		appId: '333b456e-dd48-4d6b-b32b-9fd48d74e163',
		triggerKey: 'wix_donations-donation_subscription_canceled',
		displayName: 'La donazione ricorrente è annullata',
	},
	wixEventsTickets_domainEventsWixEventsGuestsV1GuestGuestCheckedIn: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.guests.v1.guest-guest_checked_in',
		displayName: 'Il partecipante si è registrato',
	},
	wixEventsTickets_domainEventsWixEventsGuestsV1GuestGuestEventStarts: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.guests.v1.guest-guest_event_starts',
		displayName: 'L`evento inizia',
	},
	wixEventsTickets_domainEventsWixEventsV3EventPublished: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.event-published',
		displayName: 'Evento pubblicato',
	},
	wixEventsTickets_domainEventsWixEventsV3TicketDefinitionSaleEnded: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.ticket_definition-sale_ended',
		displayName: 'La vendita dei biglietti è terminata',
	},
	wixEventsTickets_domainEventsWixEventsV3TicketDefinitionSaleStarted: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'domain_events_wix.events.v3.ticket_definition-sale_started',
		displayName: 'La vendita dei biglietti è iniziata',
	},
	wixEventsTickets_fn03Dabf87Cebf4775A48812A468Ae34281982Be9D060C5Bb8B112F93Bb2642E39:
		{
			appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
			triggerKey:
				'fn_03dabf87-cebf-4775-a488-12a468ae3428_1982be9d-060c-5bb8-b112-f93bb2642e39',
			displayName: 'Trigger Funzione',
		},
	wixEventsTickets_fn8F57E5Df0Adb49B1A3F31Ad3D744Bcd4Ff59D8057F7C5Ba7A3C300919A3768E9:
		{
			appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
			triggerKey:
				'fn_8f57e5df-0adb-49b1-a3f3-1ad3d744bcd4_ff59d805-7f7c-5ba7-a3c3-00919a3768e9',
			displayName: 'Trigger Funzione',
		},
	wixEventsTickets_wixEventsDailyReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-daily_report',
		displayName: 'Report giornaliero',
	},
	wixEventsTickets_wixEventsDailyRsvpReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-daily_rsvp_report',
		displayName: 'Report RSVP giornaliero',
	},
	wixEventsTickets_wixEventsEventEnds: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-event_ends',
		displayName: 'L`evento termina',
	},
	wixEventsTickets_wixEventsInstantOrderReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_order_report',
		displayName: 'Email ordine biglietti',
	},
	wixEventsTickets_wixEventsInstantRsvpNoReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_rsvp_no_report',
		displayName: 'L`invitato ha risposto NO all`email',
	},
	wixEventsTickets_wixEventsInstantRsvpYesReport: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-instant_rsvp_yes_report',
		displayName: 'Email RSVP invitato SÌ',
	},
	wixEventsTickets_wixEventsNotificationsEventCanceled: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_event_canceled',
		displayName: 'Evento annullato',
	},
	wixEventsTickets_wixEventsNotificationsEventReminder: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_event_reminder',
		displayName: 'È arrivato il promemoria dell`evento',
	},
	wixEventsTickets_wixEventsNotificationsNewSpotsAvailable: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_new_spots_available',
		displayName: 'Si è liberato un posto per la lista d`attesa',
	},
	wixEventsTickets_wixEventsNotificationsOrderConfirmation: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_order_confirmation',
		displayName: 'Ordine effettuato il',
	},
	wixEventsTickets_wixEventsNotificationsOrderConfirmationWithTicketsLink: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_order_confirmation_with_tickets_link',
		displayName: 'Ordine confermato ma i biglietti non sono stati generati',
	},
	wixEventsTickets_wixEventsNotificationsRsvpConfirmation: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-notifications_rsvp_confirmation',
		displayName: 'RSVP confermato',
	},
	wixEventsTickets_wixEventsTicketPurchase: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-ticket_purchase',
		displayName: 'Biglietto ordinato',
	},
	wixEventsTickets_wixEventsUouAddedToWaitlist: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-uou_added_to_waitlist',
		displayName: 'Registrazione ospite alla lista d`attesa',
	},
	wixEventsTickets_wixEventsUouRsvp: {
		appId: '140603ad-af8d-84a5-2c80-a0f60cb47351',
		triggerKey: 'wix_events-uou_rsvp',
		displayName: 'L`ospite risponde al RSVP',
	},
	wixFileShare_wixFileShareAccessToFolderApproved: {
		appId: '1537b24e-29d1-6d8f-b8e1-d6860f2f70b9',
		triggerKey: 'wix_file_share-access_to_folder_approved',
		displayName: 'Accesso alla cartella concesso',
	},
	wixFileShare_wixFileShareRequestedAccessToFolder: {
		appId: '1537b24e-29d1-6d8f-b8e1-d6860f2f70b9',
		triggerKey: 'wix_file_share-requested_access_to_folder',
		displayName: 'Accesso alla cartella richiesto',
	},
	wixForms_fn6E3266E324B547E29B11623Feede7B14294575A72A2D5D6AB56BC6B8Bda74B16: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey:
			'fn_6e3266e3-24b5-47e2-9b11-623feede7b14_294575a7-2a2d-5d6a-b56b-c6b8bda74b16',
		displayName: 'Trigger Funzione',
	},
	wixForms_fn8951D6BdB6B84016B07742Fd5B93D79E18F07A715Fb95A0D8E3E2D124Acf3846: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey:
			'fn_8951d6bd-b6b8-4016-b077-42fd5b93d79e_18f07a71-5fb9-5a0d-8e3e-2d124acf3846',
		displayName: 'Trigger Funzione',
	},
	wixForms_functionF85Ee74AB9Ce56B9Bff65147520Ccf8C: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey: 'function_f85ee74a-b9ce-56b9-bff6-5147520ccf8c',
		displayName: 'Trigger Funzione',
	},
	wixForms_wixFormAppFormSubmitted: {
		appId: '225dd912-7dea-4738-8688-4b8c6955ffc2',
		triggerKey: 'wix_form_app-form_submitted',
		displayName: 'Form submitted',
	},
	wixForum_wixForumForumCommentDeleted: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_comment_deleted',
		displayName: 'Commento nel forum eliminato',
	},
	wixForum_wixForumForumCommentPublished: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_comment_published',
		displayName: 'Commento nel forum pubblicato',
	},
	wixForum_wixForumForumPostLiked: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_post_liked',
		displayName: 'Ha aggiunto una reazione a un post nel forum',
	},
	wixForum_wixForumForumPostUnliked: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-forum_post_unliked',
		displayName: 'Ha rimosso la reazione dal post del forum',
	},
	wixForum_wixForumNewPost: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-new_post',
		displayName: 'Post pubblicato sul forum',
	},
	wixForum_wixForumReactedToComment: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-reacted_to_comment',
		displayName: 'Ha aggiunto una reazione a un commento nel forum',
	},
	wixForum_wixForumRemovedReactionFromForumComment: {
		appId: '14724f35-6794-cd1a-0244-25fd138f9242',
		triggerKey: 'wix_forum-removed_reaction_from_forum_comment',
		displayName: 'Ha rimosso la reazione dal commento del forum',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestApproved: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-approved',
		displayName: 'Group Request Approved DE',
	},
	wixGroups_domainEventsWixSocialGroupsV2GroupRequestCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'domain_events_wix.social_groups.v2.group_request-created',
		displayName: 'Un membro richiede di creare un gruppo',
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
		displayName: 'Promemoria per la creazione del gruppo',
	},
	wixGroups_wixGroupsFolloweeCreatesAPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-followee_creates_a_post',
		displayName: 'Una persona che segui crea un post',
	},
	wixGroups_wixGroupsGroupCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_created',
		displayName: 'Nuovo gruppo creato',
	},
	wixGroups_wixGroupsGroupRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_request_rejected',
		displayName: 'Group create request declined',
	},
	wixGroups_wixGroupsGroupUpdated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-group_updated',
		displayName: 'Aggiornamenti del gruppo',
	},
	wixGroups_wixGroupsInviteMembersReminder: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-invite_members_reminder',
		displayName: 'Promemoria per invitare i membri',
	},
	wixGroups_wixGroupsJoinRequestAccepted: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_accepted',
		displayName:
			'La richiesta di un membro per iscriversi a un gruppo è stata approvata',
	},
	wixGroups_wixGroupsJoinRequestCreated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_created',
		displayName: 'Un membro richiede l`iscrizione a un gruppo',
	},
	wixGroups_wixGroupsJoinRequestRejected: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-join_request_rejected',
		displayName:
			'La richiesta di adesione di un membro a un gruppo è stata rifiutata',
	},
	wixGroups_wixGroupsMemberAddedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_added_to_group',
		displayName: 'Un membro si iscrive a un gruppo',
	},
	wixGroups_wixGroupsMemberAddedToGroupAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_added_to_group_agg',
		displayName: 'Un membro si iscrive a un gruppo',
	},
	wixGroups_wixGroupsMemberCreatedPendingPostComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_pending_post_comment',
		displayName: 'Member comments on a post (Pending)',
	},
	wixGroups_wixGroupsMemberCreatedPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post',
		displayName: 'Un membro crea un post',
	},
	wixGroups_wixGroupsMemberCreatedPostAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post_agg',
		displayName: 'I membri creano i post',
	},
	wixGroups_wixGroupsMemberCreatedPostComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_created_post_comment',
		displayName: 'Un membro commenta un post',
	},
	wixGroups_wixGroupsMemberInvitedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_invited_to_group',
		displayName: 'Membro invitato nel gruppo',
	},
	wixGroups_wixGroupsMemberLeavesGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_leaves_group',
		displayName: 'Un membro lascia un gruppo',
	},
	wixGroups_wixGroupsMemberMentionedYouV3: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_mentioned_you_v3',
		displayName: 'Il membro ha menzionato qualcuno',
	},
	wixGroups_wixGroupsMemberMentionsSomeoneV2: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_mentions_someone_v2',
		displayName: 'Member mentions someone',
	},
	wixGroups_wixGroupsMemberPaidForGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_paid_for_group',
		displayName: 'Un membro paga per un gruppo',
	},
	wixGroups_wixGroupsMemberPpExpired: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_pp_expired',
		displayName: 'Il membro rimosso perché il piano a pagamento è scaduto',
	},
	wixGroups_wixGroupsMemberReactedToYourComment: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_comment',
		displayName: 'Un membro aggiunge una reazione a un commento',
	},
	wixGroups_wixGroupsMemberReactedToYourCommentAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_comment_agg',
		displayName: 'Member reacts to a comment aggregated',
	},
	wixGroups_wixGroupsMemberReactedToYourPost: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_post',
		displayName: 'Un membro aggiunge una reazione a un post',
	},
	wixGroups_wixGroupsMemberReactedToYourPostAgg: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_reacted_to_your_post_agg',
		displayName: 'Member reacts to a post aggregated',
	},
	wixGroups_wixGroupsMemberRequestToCreateGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member-request-to-create-group',
		displayName: 'Un membro richiede di creare un gruppo',
	},
	wixGroups_wixGroupsMemberRoleUpdated: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-member_role_updated',
		displayName: 'Ruolo del membro aggiornato',
	},
	wixGroups_wixGroupsMembersMentioned: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-members_mentioned',
		displayName: 'Member mentions someone NOT USED',
	},
	wixGroups_wixGroupsNewMembersJoined: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-new_members_joined',
		displayName: 'Il gruppo ha un nuovo aggiornamento generico per i membri',
	},
	wixGroups_wixGroupsPersonInvitedToGroup: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-person_invited_to_group',
		displayName: 'Persona invitata nel gruppo',
	},
	wixGroups_wixGroupsWeeklyDigest: {
		appId: '148c2287-c669-d849-d153-463c7486a694',
		triggerKey: 'wix_groups-weekly-digest',
		displayName: 'Riepilogo settimanale',
	},
	wixInvoices_wixInvoicesInvoiceOverdue: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_overdue',
		displayName: 'Fattura scaduta',
	},
	wixInvoices_wixInvoicesInvoicePaid: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_paid',
		displayName: 'Fattura pagata',
	},
	wixInvoices_wixInvoicesInvoicePaymentReceived: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_payment_received',
		displayName: 'Pagamento fattura ricevuto',
	},
	wixInvoices_wixInvoicesInvoiceSent: {
		appId: '13ee94c1-b635-8505-3391-97919052c16f',
		triggerKey: 'wix_invoices-invoice_sent',
		displayName: 'Fattura inviata',
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
		displayName: 'Il cliente ha abbastanza punti per ricevere dei premi',
	},
	wixLoyaltyProgram_wixLoyaltyPointsAboutToExpire: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_about_to_expire',
		displayName: 'I punti scadono dopo 14 giorni',
	},
	wixLoyaltyProgram_wixLoyaltyPointsAdjusted: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_adjusted',
		displayName: 'Il saldo punti viene regolato manualmente',
	},
	wixLoyaltyProgram_wixLoyaltyPointsEarned: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-points_earned',
		displayName: 'Il cliente guadagna punti',
	},
	wixLoyaltyProgram_wixLoyaltySocialMediaChannelFollowed: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-social_media_channel_followed',
		displayName: 'Profilo social media seguito',
	},
	wixLoyaltyProgram_wixLoyaltyTierUpdated: {
		appId: '553c79f3-5625-4f38-b14b-ef7c0d1e87df',
		triggerKey: 'wix_loyalty-tier_updated',
		displayName: 'Il cliente arriva al nuovo livello',
	},
	wixOnlinePrograms_wixOnlineProgramsAccessDenied: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-access_denied',
		displayName: 'Accesso al partecipante negato',
	},
	wixOnlinePrograms_wixOnlineProgramsCertificateReady: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-certificate_ready',
		displayName: 'Certificato pronto per il download',
	},
	wixOnlinePrograms_wixOnlineProgramsExportedProgramData: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-exported_program_data',
		displayName: 'Dati partecipanti esportati',
	},
	wixOnlinePrograms_wixOnlineProgramsJoinRequestReceived: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-join_request_received',
		displayName: 'Richiesta di partecipazione al programma ricevuta',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberInvitedToJoinAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_invited_to_join_a_program',
		displayName: 'Membro invitato a un programma',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinRequestApproved: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_join_request_approved',
		displayName: 'Richiesta di iscrizione approvata',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinRequestWasDeclined: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_join_request_was_declined',
		displayName: 'Richiesta di iscrizione rifiutata',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberJoinsAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_joins_a_program',
		displayName: 'Un membro si iscrive a un programma',
	},
	wixOnlinePrograms_wixOnlineProgramsMemberPaysForAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-member_pays_for_a_program',
		displayName: 'Il membro paga per un programma',
	},
	wixOnlinePrograms_wixOnlineProgramsOfflinePaymentDeclined: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-offline_payment_declined',
		displayName: 'Pagamento offline rifiutato',
	},
	wixOnlinePrograms_wixOnlineProgramsOfflinePaymentReceived: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-offline_payment_received',
		displayName: 'Pagamento offline del programma ricevuto',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantCompletesAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_completes_a_program',
		displayName: 'Il partecipante completa un programma',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantCompletesAStep: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_completes_a_step',
		displayName: 'Un partecipante completa un passaggio',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantLeavesAProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_leaves_a_program',
		displayName: 'Il partecipante abbandona un programma',
	},
	wixOnlinePrograms_wixOnlineProgramsParticipantManuallyAddedToProgram: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-participant_manually_added_to_program',
		displayName: 'Partecipante aggiunto manualmente',
	},
	wixOnlinePrograms_wixOnlineProgramsPaymentFailed: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-payment_failed',
		displayName: 'Pagamento non riuscito',
	},
	wixOnlinePrograms_wixOnlineProgramsProgramDurationEnds: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-program_duration_ends',
		displayName: 'La data di fine del programma è passata',
	},
	wixOnlinePrograms_wixOnlineProgramsProgramEndedWithoutAllStepsCompleted: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-program_ended_without_all_steps_completed',
		displayName: 'Programma terminato senza aver completato tutti gli step',
	},
	wixOnlinePrograms_wixOnlineProgramsReminderToCompleteSteps: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-reminder_to_complete_steps',
		displayName: 'Promemoria per completare i passaggi programmati',
	},
	wixOnlinePrograms_wixOnlineProgramsVisitorBlockedFromJoining: {
		appId: '2936472a-a1ed-4ae5-9f71-614313a9f4e7',
		triggerKey: 'wix_online_programs-visitor_blocked_from_joining',
		displayName: 'Accesso visitatore negato',
	},
	wixPortfolio_wixPortfolioProjectCreated: {
		appId: 'd90652a2-f5a1-4c7c-84c4-d4cdcc41f130',
		triggerKey: 'wix_portfolio-project_created',
		displayName: 'Nuovo progetto creato',
	},
	wixPricingPlans_fn214D1C3FD56B467FA95D927Cd3E367A5765A669949435F2E9Aeb4Bd78D72454D:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_214d1c3f-d56b-467f-a95d-927cd3e367a5_765a6699-4943-5f2e-9aeb-4bd78d72454d',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fn3D1Dd01508B14300Ab44055E149550808Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_3d1dd015-08b1-4300-ab44-055e14955080_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fn46138Fed7Cd244A09Bb30B78C34A397396Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_46138fed-7cd2-44a0-9bb3-0b78c34a3973_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fn53231893Aead479B83Af7D9D556364928Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_53231893-aead-479b-83af-7d9d55636492_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fn60C383A45Aab4CefB96363B5D8Bfe8B78Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_60c383a4-5aab-4cef-b963-63b5d8bfe8b7_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fn77101Bfb43124A51A1FaA840808B231F8Aa6A53D85D257E1827D6C7Beede2D83:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_77101bfb-4312-4a51-a1fa-a840808b231f_8aa6a53d-85d2-57e1-827d-6c7beede2d83',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fnBd14Eb16Cea6446594905052A4E805C296Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_bd14eb16-cea6-4465-9490-5052a4e805c2_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fnE0D72747A2874Da29Fdc0B24A5445E31B6B2579F17Ab5Fa6B0A021F2Ddbacc1E:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_e0d72747-a287-4da2-9fdc-0b24a5445e31_b6b2579f-17ab-5fa6-b0a0-21f2ddbacc1e',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fnEd6Bc2E62F8E49999Fb5B56E5630Ef4296Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_ed6bc2e6-2f8e-4999-9fb5-b56e5630ef42_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_fnF0B130E595564Ed1A714A8Ab84C13Fb596Db7B39Fa5051B1B576B8A3B9Db0Cff:
		{
			appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
			triggerKey:
				'fn_f0b130e5-9556-4ed1-a714-a8ab84c13fb5_96db7b39-fa50-51b1-b576-b8a3b9db0cff',
			displayName: 'Trigger Funzione',
		},
	wixPricingPlans_wixPricingPlansPlanCanceled: {
		appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
		triggerKey: 'wix_pricing_plans-plan_canceled',
		displayName: 'Piano annullato',
	},
	wixPricingPlans_wixPricingPlansPlanPurchased: {
		appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
		triggerKey: 'wix_pricing_plans-plan_purchased',
		displayName: 'Piano ordinato',
	},
	wixPricingPlans_wixPricingPlansSiteMigratedToEcom: {
		appId: '1522827f-c56c-a5c9-2ac9-00f9e6ae12d3',
		triggerKey: 'wix_pricing_plans-site_migrated_to_ecom',
		displayName: 'Site migrated to ECOM',
	},
	wixProposals_wixProposalsProposalAccepted: {
		appId: 'b68c2f3d-8a70-4e1f-9432-3cd1fd011965',
		triggerKey: 'wix_proposals-proposal_accepted',
		displayName: 'Proposta accettata',
	},
	wixProposals_wixProposalsSendProposal: {
		appId: 'b68c2f3d-8a70-4e1f-9432-3cd1fd011965',
		triggerKey: 'wix_proposals-send_proposal',
		displayName: 'Proposta inviata',
	},
	wixRestaurantsOrders_restaurantsDeliveryOrderIsReady: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-delivery-order-is-ready',
		displayName: 'Ordine pronto per la consegna',
	},
	wixRestaurantsOrders_restaurantsFutureOrderApproved: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-future-order-approved',
		displayName: 'L`ordine è da completare entro il',
	},
	wixRestaurantsOrders_restaurantsOrderCanceled: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-canceled',
		displayName: 'Ordine annullato',
	},
	wixRestaurantsOrders_restaurantsOrderEdited: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-edited',
		displayName: 'Ordine modificato',
	},
	wixRestaurantsOrders_restaurantsOrderIsInDelivery: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-in-delivery',
		displayName: 'L`ordine è in consegna',
	},
	wixRestaurantsOrders_restaurantsOrderIsPending: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-pending',
		displayName: 'Ordine creato',
	},
	wixRestaurantsOrders_restaurantsOrderIsReady: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-is-ready',
		displayName: 'Ordine pronto per il ritiro',
	},
	wixRestaurantsOrders_restaurantsOrderWasAccepted: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-was-accepted',
		displayName: 'Ordine accettato',
	},
	wixRestaurantsOrders_restaurantsOrderWasFulfilled: {
		appId: '9a5d83fd-8570-482e-81ab-cfa88942ee60',
		triggerKey: 'restaurants-order-was-fulfilled',
		displayName: 'Ordine evaso',
	},
	wixRestaurantsOrders2_wixRestaurantsOrdersOrderSubmitted: {
		appId: '13e8d036-5516-6104-b456-c8466db39542',
		triggerKey: 'wix_restaurants_orders-order_submitted',
		displayName: 'Ordine del ristorante inviato',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewCreated: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-created',
		displayName: 'Recensione creata',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewDeleted: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-deleted',
		displayName: 'Recensione eliminata',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewModerationStatusChanged: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-moderation_status_changed',
		displayName: 'Lo stato di moderazione delle recensioni è stato modificato',
	},
	wixReviewsApp_domainEventsWixReviewsV1ReviewReviewPublished: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'domain_events_wix.reviews.v1.review-review_published',
		displayName: 'Recensione pubblicata',
	},
	wixReviewsApp_wixReviewsReviewRequestCreated: {
		appId: 'a95a5fce-e370-4402-9ce4-96956acc747d',
		triggerKey: 'wix_reviews_review-request-created',
		displayName: 'Richiesta di recensione creata',
	},
	wixSiteMembersApp_wixMembersMemberApproves: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_approves',
		displayName: 'Membro approvato',
	},
	wixSiteMembersApp_wixMembersMemberBlocked: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_blocked',
		displayName: 'Membro bloccato',
	},
	wixSiteMembersApp_wixMembersMemberDeleted: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_deleted',
		displayName: 'Membro eliminato',
	},
	wixSiteMembersApp_wixMembersMemberLogsIn: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-member_logs_in',
		displayName: 'Il membro accede',
	},
	wixSiteMembersApp_wixMembersUouSignsUp: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_members-uou_signs_up',
		displayName: 'Un visitatore si iscrive al tuo sito',
	},
	wixSiteMembersApp_wixSitemembersAppMemberActivation: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_activation',
		displayName: 'Imposta contatto come membro',
	},
	wixSiteMembersApp_wixSitemembersAppMemberEmailConfirmationRequired: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_email_confirmation_required',
		displayName: 'Conferma email richiesta per il Membro',
	},
	wixSiteMembersApp_wixSitemembersAppMemberResetPassword: {
		appId: 'eb377299-86b4-4a86-a1b5-774a2d1d374b',
		triggerKey: 'wix_sitemembers_app-member_reset_password',
		displayName: 'Il membro del sito richiede il reimpostare la password',
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
			displayName: 'Payment made for digital item',
		},
	wixStores_domainEventsWixEcomV1AutomationTriggerFulfillmentRequestIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-fulfillment_request_issued',
		displayName: 'Automation Trigger Fulfillment Request Issued',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderCancellationIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-order_cancellation_issued',
		displayName: 'Ordine annullato',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderConfirmationIssuedToBuyer:
		{
			appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
			triggerKey:
				'domain_events_wix.ecom.v1.automation_trigger-order_confirmation_issued_to_buyer',
			displayName: 'Ordine idoneo effettuato',
		},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderConfirmationIssuedToMerchant:
		{
			appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
			triggerKey:
				'domain_events_wix.ecom.v1.automation_trigger-order_confirmation_issued_to_merchant',
			displayName: 'Ordine idoneo effettuato',
		},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderPaymentAdded: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-order_payment_added',
		displayName: 'Pagamento aggiunto all`ordine',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerOrderUpdatedIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-order_updated_issued',
		displayName: 'Ordine aggiornato',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerReadyForPickupIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-ready_for_pickup_issued',
		displayName: 'Ordine pronto per il ritiro',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerRefundConfirmationIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-refund_confirmation_issued',
		displayName: 'Rimborso avviato',
	},
	wixStores_domainEventsWixEcomV1AutomationTriggerShippingConfirmationIssued: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey:
			'domain_events_wix.ecom.v1.automation_trigger-shipping_confirmation_issued',
		displayName: 'Ordine spedito',
	},
	wixStores_fnB56C6504E65648C4A245935C334Fd52B78Eb5D7F788854DdBca71598B432Bfd8:
		{
			appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
			triggerKey:
				'fn_b56c6504-e656-48c4-a245-935c334fd52b_78eb5d7f-7888-54dd-bca7-1598b432bfd8',
			displayName: 'Trigger Funzione',
		},
	wixStores_function2646Ba8896A8526BBada351Ee357Ad78: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'function_2646ba88-96a8-526b-bada-351ee357ad78',
		displayName: 'Function trigger',
	},
	wixStores_function424205E1E0865E1A8F2F63040Cf1B22B: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'function_424205e1-e086-5e1a-8f2f-63040cf1b22b',
		displayName: 'Trigger Funzione',
	},
	wixStores_wixECommerceCartAbandonment: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wix_e_commerce-cart_abandonment',
		displayName: 'Checkout abbandonato',
	},
	wixStores_wixECommerceOrderPlaced: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wix_e_commerce-order_placed',
		displayName: 'Ordine effettuato',
	},
	wixStores_wixstoresLegacyOrderPlacedV1: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-legacy_order_placed_v1',
		displayName: 'Ordine effettuato nel Negozio',
	},
	wixStores_wixstoresPaymentAdded: {
		appId: '1380b703-ce81-ff05-f115-39571d94dfcd',
		triggerKey: 'wixstores-payment_added',
		displayName: 'La carta di credito addebitata',
	},
	wixTableReservations_reservationStarted: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'reservation_started',
		displayName: 'Inizio prenotazione tavolo',
	},
	wixTableReservations_reservationWasCanceled: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'reservation_was_canceled',
		displayName: 'Prenotazione tavolo annullata',
	},
	wixTableReservations_uouCreatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'uou_created_reservation',
		displayName: 'Tavolo riservato dall`ospite',
	},
	wixTableReservations_userCreatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'user_created_reservation',
		displayName: 'Prenotazione tavolo aggiunta manualmente',
	},
	wixTableReservations_userUpdatedReservation: {
		appId: 'f9c07de2-5341-40c6-b096-8eb39de391fb',
		triggerKey: 'user_updated_reservation',
		displayName: 'Orario della prenotazione del tavolo aggiornato',
	},
	workflows_wixWorkflowsCardAddedOrMoved: {
		appId: 'ea2821fc-7d97-40a9-9f75-772f29178430',
		triggerKey: 'wix_workflows-card_added_or_moved',
		displayName: 'Scheda aggiunta o spostata',
	},
};
