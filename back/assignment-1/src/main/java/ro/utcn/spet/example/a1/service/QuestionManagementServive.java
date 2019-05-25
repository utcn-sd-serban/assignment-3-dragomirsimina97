package ro.utcn.spet.example.a1.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ro.utcn.spet.example.a1.command.CommandFactory;
import ro.utcn.spet.example.a1.dto.QuestionDTO;
import ro.utcn.spet.example.a1.entity.Question;
import ro.utcn.spet.example.a1.exception.QuestionNotFoundException;
import ro.utcn.spet.example.a1.repository.QuestionRepository;
import ro.utcn.spet.example.a1.repository.RepositoryFactory;
import ro.utcn.spet.example.a1.repository.memory.InMemoryQuestionRepository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionManagementServive {
    private final RepositoryFactory repositoryFactory;
    private final QuestionRepository questionRepository;
    private final CommandFactory commandFactory;

    // Transactional methods ensure that the code contained inside is run in a transaction, which is committed
    // when the methods returns and is rolled-back when an exception is thrown
    // http://www.codingpedia.org/jhadesdev/how-does-spring-transactional-really-work/
    @Transactional
    public List<QuestionDTO> question() {
        List<QuestionDTO> myQuestions = repositoryFactory.createQuestionRepository().findAll().stream().map(QuestionDTO::ofEntity).collect(Collectors.toList());
        Collections.reverse(myQuestions);

        return myQuestions;

    }
    @Transactional
    public List<QuestionDTO> findtitle(String title) {
        List<Question> myQuestions = repositoryFactory.createQuestionRepository().findAll().stream().filter( q->
                q.getTitle().toLowerCase().equals(title.toLowerCase())).collect(Collectors.toList());
        List<QuestionDTO> questionsOut = new ArrayList<>();
        for (Question q: myQuestions
             ) {
            questionsOut.add(QuestionDTO.ofEntity(q));
        }

        return questionsOut;

    }
    @Transactional
    public Optional<Question> findbyid(int id) {
       Optional <Question> myQuestions = repositoryFactory.createQuestionRepository().findAll().stream().filter((Question q)->q.getTitle().equals(id)).findFirst();


        return myQuestions;

    }


    @Transactional
    public QuestionDTO insert ( QuestionDTO dto) {
        return commandFactory.askCommand().execute(dto);
    }

    @Transactional
    public void update(int id,String title,String text) {
        QuestionRepository repository = repositoryFactory.createQuestionRepository();
        Question question = repository.findById(id).orElseThrow(QuestionNotFoundException::new);
        question.setText(text);
        question.setTitle(title);
       // QuestionRepository.save(question);
    }

    @Transactional
    public void remove(int id) {
        QuestionRepository repository = repositoryFactory.createQuestionRepository();
        Question question = repository.findById(id).orElseThrow(QuestionNotFoundException::new);
        repository.remove(question);
    }
}
