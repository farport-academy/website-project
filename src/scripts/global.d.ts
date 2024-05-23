declare module 'website'{
    global{
        interface Window {
            toggleAccordion: (element) => void,
            closeDialog: (element) => void
        }
    }
}