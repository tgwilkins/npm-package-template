describe(helloWorld.name, () => {
    it('Returns a hello world', () => {
        expect(helloWorld()).toBe('hello, world!')
    })
})