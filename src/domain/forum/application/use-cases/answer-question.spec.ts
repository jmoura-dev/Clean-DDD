import { AnswerQuestionUseCase } from './answer-question'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'

let inMemoryAnswerRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Answer Question', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswerRepository)
  })

  it('should be able to create an answer', async () => {
    const { answer } = await sut.execute({
      content: 'Nova resposta',
      instructorId: '1',
      questionId: '1',
    })
  
    expect(answer.content).toEqual('Nova resposta')
    expect(inMemoryAnswerRepository.items[0].id).toEqual(answer.id)
  })
  
})

